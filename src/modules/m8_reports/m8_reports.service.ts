/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { DynamicEntityService,EventsService } from '../database/db.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Between, FindManyOptions, In, LessThan, MoreThan, Repository } from 'typeorm';

@Injectable()
export class ReportsService {
  constructor(
    private readonly dynamicEntityService: DynamicEntityService,
    private readonly eventsService: EventsService,
  ) {
  }
  /* ---------------- FUNCIONES FuelConsumption ----------------*/
  async consultTank(unityId: number): Promise<any> {
    try {
      const conditions = { id: unityId };
      const fields = ['tankCapacity'];
      const result = await this.dynamicEntityService.searchCamp('MobileUnities', conditions, fields);
      const tankCapacity = result[0].tankCapacity;
      return { tankCapacity: tankCapacity };
    } catch (error) {
      // Manejar la excepción
      console.error(error);
      throw error;
    }
  }

  async registerDayBefore(unityId: number): Promise<any> {
    try {
      const conditions = { 'unityId' : unityId };
      const fields = [
        'FuelConsumption.*',
        'MobileUnities.tank_capacity'
      ];
      const join = {
        table: 'MobileUnities',
        condition: 'FuelConsumption.unityId = MobileUnities.id'
      };
      
      const latestFuelConsumption = await this.dynamicEntityService.searchCampWithJoin(
        'FuelConsumption',
        conditions,
        fields,
        join
      );
      
      if (latestFuelConsumption.length > 0) {
        const response = {
          success: true,
          data: latestFuelConsumption[0]
        };
        return response;
      } else {
        const response = {
          success: false,
          message: 'El vehículo no tiene registros de consumo de combustible.'
        };
        return response;
      }
    } catch (error) {
      // Manejar la excepción
      console.error(error);
      throw error;
    }
  }

  async updateDayBefore(id: number, resultgal: number, resultkm: number, rendimiento: number): Promise<any> {
    try {
      const conditions = { id: id };
      const data = {
        resultgal,
        resultkm,
        rendimiento
      };
      const updated = await this.dynamicEntityService.edit('FuelConsumption', conditions, data);
      if (updated) {
        const response = {
          success: true,
          message: 'Registro actualizado correctamente.'
        };
        return response;
      } else {
        const response = {
          success: false,
          message: 'No se pudo actualizar el registro.'
        };
        return response;
      }
    } catch (error) {
      // Manejar la excepción
      console.error(error);
      throw error;
    }
  }

  async updateFuelConsumption(id: number, fuel_quantity: string, price: string, car_mileage: number, created_at: string ,ruta: string): Promise<any> {

    try {
      //Buscar informacion
      const fuelConsumption = await this.dynamicEntityService.findOneP('FuelConsumption', { where: { id: id } });

      if (!fuelConsumption) {
        return [{'success': false, 'message': 'Registro no encontrado'}];
      }
      
      const regAP = await this.Consult(fuelConsumption.createdAt, fuelConsumption.unityId);
      
      //Actualizacion
      const entityData = {
        fuelQuantity: fuel_quantity,
        price: price,
        carMileage:car_mileage,
        createdAt: created_at,
        ruta: ruta,
      };

      const conditionEdit = { id: id };
      const fuelConsumptionResponse = await this.dynamicEntityService.edit('FuelConsumption',conditionEdit ,entityData);
      if (!fuelConsumptionResponse) {
        return [{'success': false, 'message': 'Registro no guardado'}];
      }

      await this.Position(fuelConsumption, regAP, fuelConsumption.created_at);

      return ({ success: true, message: 'Guardado exitoso' });
    } catch (error) {
      console.error(error);
    }
  }

  async Identifying(regA: any, regT: any, regP: any): Promise<void> {
    const KrepT = regT.carMileage;
    const GtanqT = regT.fuelQuantity;
    
    if (!regP) {
      const KrepA = regA.carMileage;
      const kmRA = KrepT - KrepA;
      const gCA = GtanqT;
      const rendimiento = kmRA / gCA;
      await this.saveUpdate(regA.id, gCA, kmRA, rendimiento);
      await this.saveUpdate(regT.id, 0, 0, 0);
    } else if (!regA) {
      const KrepP = regP.carMileage;
      const GtanqP = regP.fuelQuantity;
      const kmRT = KrepP - KrepT;
      const gCT = GtanqP;
      const rendimiento = kmRT / gCT;
      await this.saveUpdate(regT.id, gCT, kmRT, rendimiento);
    } else {
      const KrepP = regP.carMileage;
      const GtanqP = regP.fuelQuantity;
      const KrepA = regA.carMileage;
      const kmRT = KrepP - KrepT;
      const kmRA = KrepT - KrepA;
      const gCT = GtanqP;
      const gCA = GtanqT;
      const rendimiento = kmRA / gCA;
      await this.saveUpdate(regA.id, gCA, kmRA, rendimiento);
      await this.saveUpdate(regT.id, gCT, kmRT, rendimiento);
    }
  }

  async saveUpdate(id: number, resultGal: number, resultKm: number, rendimiento: number): Promise<void> {
    
    const data = {
      id : id,
      resultgal : resultGal,
      resultkm : resultKm,
      rendimiento : rendimiento,
    };
    
    await this.dynamicEntityService.edit('FuelConsumption', { id : id }, data);
  }

  async Position(regTF: any, regAPI: any, FTI: Date): Promise<void> {
    let regAPF = await this.Consult(regTF.createdAt, regTF.unityId);
    
    let regAF = regAPF.dateA;
    let regPF = regAPF.dateP;
    
    await this.Identifying(regAF, regTF, regPF);
    if (FTI < regTF.created_at) {
      regTF = regAPI.dateP;
      regAPF = await this.Consult(regTF.createdAt, regTF.unityId);
      regAF = regAPF.dateA;
      regPF = regAPF.dateP;
      await this.Identifying(regAF, regTF, regPF);
    } else if (FTI > regTF.created_at) {
      regTF = regAPI.dateA;
      regAPF = await this.Consult(regTF.createdAt, regTF.unityId);
      regAF = regAPF.dateA;
      regPF= regAPF.dateP;
      await this.Identifying(regAF, regTF, regPF);
    }
  }

  async Consult(created_at: Date, unityId: number): Promise<any> {
    
    let dateA = await this.dynamicEntityService.search('FuelConsumption', { createdAt: LessThan(created_at), unityId : unityId },{ createdAt: 'DESC' });

    let dateP = await this.dynamicEntityService.search('FuelConsumption', { createdAt: MoreThan(created_at), unityId : unityId }, { createdAt: 'ASC' });
    dateA = dateA[0];
    dateP = dateP[0];

    return {dateA,dateP};
  }

  /* ---------------- FIN FUNCIONES FuelConsumption -----------------------------*/
  
  async reportHoursworked(entityName: any,request: any): Promise<any> {
    const mobileUnitiesIds = request.mobileUnitiesIds;
    const startDate = request.startDate;
    const endDate = request.endDate;
    const type = request.type;
    let actualDate = new Date(startDate);
    let horasTrabajadas = {};
    let dataHoras = {};
    let dataHorasTotal = {};
    let totalMiliseconds = 0;
    let totalTimeMiliseconds = 0;
    let time;
    let timeTotal;
    
    while (actualDate <= new Date(endDate)) {
      time = actualDate;
  
      for (const unity of mobileUnitiesIds) {
        const condicion = {
          unityId: unity,
          type: type,
          start: MoreThan(time)
        }; 
        horasTrabajadas[unity] = [];
        if(!dataHorasTotal[unity]){
          dataHorasTotal[unity] = 0;
        }
        const field = ['start','end','unityId'];
        const datos = await this.dynamicEntityService.searchCamp(
          entityName, // entityName
          condicion,
          field
        );
  
        totalMiliseconds = 0;
        datos.forEach((result) => {
          const diffInMs = result.end.getTime() - result.start.getTime();
          totalMiliseconds+=diffInMs;
        });
  
        const timeConvert = await this.dynamicEntityService.formatTime(totalMiliseconds);
        dataHoras[time]=timeConvert;
        actualDate = new Date(actualDate.getTime() + 24 * 60 * 60 * 1000);
        horasTrabajadas[unity].push(dataHoras);
        dataHorasTotal[unity] += totalMiliseconds;
        totalMiliseconds = 0;
      };
    } 
    for (const unity of mobileUnitiesIds) {
      const timeConvert = await this.dynamicEntityService.formatTime(dataHorasTotal[unity]);
      const dataHorasT = {...horasTrabajadas[unity][horasTrabajadas[unity].length - 1], total: timeConvert };
      horasTrabajadas[unity][horasTrabajadas[unity].length - 1] = dataHorasT;
    }
    
    return horasTrabajadas;
  }

  async reportManagerial(entityName: any,request: any ): Promise<any> {

    let report = request.report;
    let mobileUnitiesIds = request.mobileUnitiesIds;
    let startDate = request.startDate;
    let endDate = request.endDate;
    let dataArray = {};
    let array = [];
    let titleArray = {};
    let queryData;
    let unityData;

    const condicion = {
      id: In(mobileUnitiesIds)
    };
    const field = ['id','plate'];

    const datos = await this.dynamicEntityService.searchCamp(
      entityName, // entityName
      condicion,
      field
    );

    for (const unityId of datos) {
      dataArray[unityId.id] = [];
      titleArray = [{'FechaInicio': 'Fecha inicio', 'FechaFinal' : 'Fecha final', 'Placa' : 'Activo movil'}];
      let id = unityId.id;
      unityData = { 'FechaInicio': startDate, 'FechaFinal': endDate, 'Placa': unityId.plate };      
      for (const reportData of report) {
      console.log(report);

        if( reportData.info != null){
          let events = reportData.info.split(',');
          for (const eventId of events) {
            
            queryData = await this.createQuery(reportData.typeReport, eventId, unityId.id, startDate, endDate);
            let title = queryData.title;
            let value = queryData.value;
            unityData[title] = value;
            
            dataArray[unityId.id].push(unityData);
            // console.log(dataArray);
          };
        }
      };
    };
    return dataArray;
  }

  async createQuery(typeRepot,typeData,mobileUnitiesIds,startDate,endDate): Promise<any> {
    let resultArray = {};
    let eventTypeName = await this.eventsService.eventTypeName();
    let consumptionTypeName = ['Galones consumidos','Rendimiento'];
    let hoursName = {1:'Horas Trabajadas',2:'Horas en reposo'};
    let specialCharacter = false;
    let title;
    let query;
    
    const request = {
      startDate: startDate,
      endDate: endDate,
      mobileUnitiesIds: [mobileUnitiesIds],
      eventTypeId: typeData,
      type: typeData
    };

    switch (typeRepot) {
      //Reporte general
      case 1:
        query = await this.eventsService.queryMobileEvent(request);
        title = eventTypeName[typeData];
        if (!query){
          query = 0;
        }
        break;
       //horas trabajadas
       case 2:
        query = await this.reportHoursworked('Works', request);
        query = query[mobileUnitiesIds][0].total;
        title = hoursName[typeData];
        break;
    
      default:
        break;
    }
    
    if (!specialCharacter) {
        resultArray['title'] = title;
        resultArray['value'] = query;
    }
    // console.log(resultArray);

    return resultArray;
    
  }
  
}
