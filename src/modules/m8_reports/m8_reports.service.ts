/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { DynamicEntityService } from '../database/db.entities/dynamicentity.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Between, FindManyOptions, In, LessThan, MoreThan, Repository } from 'typeorm';
import { parse } from 'date-fns';

@Injectable()
export class ReportsService {
  constructor(
    private readonly dynamicEntityService: DynamicEntityService,
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
        condition: 'FuelConsumption.unity_id = MobileUnities.id'
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

  async Consult(created_at: Date, unity_id: number): Promise<any> {
    
    let dateA = await this.dynamicEntityService.search('FuelConsumption', { createdAt: LessThan(created_at), unityId : unity_id },{ createdAt: 'DESC' });

    let dateP = await this.dynamicEntityService.search('FuelConsumption', { createdAt: MoreThan(created_at), unityId : unity_id }, { createdAt: 'ASC' });
    dateA = dateA[0];
    dateP = dateP[0];

    return {dateA,dateP};
  }

  /* ---------------- FIN FUNCIONES FuelConsumption -----------------------------*/

  /* ---------------- INICIO REPORTES -----------------------------*/
  // async reportHoursworked(request: any, type: number): Promise<any> {
  //   const mobileUnitiesIds = request.mobileUnitiesIds;
  //   const startDate = request.startDate;
  //   const endDate = request.endDate;
  
  //   const rst = await this.dynamicEntityService.search(
  //     'Works', // entityName
  //     {
  //       unityId: In(mobileUnitiesIds),
  //       type: type,
  //       start: Between(startDate + ' 00:00:00', endDate + ' 23:59:59')
  //     }
  //   );
  //   return rst;
  //   if (!rst) {
  //     return [{'success': false, 'message': 'Sin datos para mostrar'}];
  //   }
  
  //   let array = [];
  //   let response = [];
  //   let label = 'Worked';
  
  //   if (type == 2) {
  //     label = 'Rest';
  //   }
  
  //   rst.forEach((result) => {
  //     const turnOn = new Date(result.start);
  //     const turnOff = new Date(result.end);
  
  //     const diffInMs = turnOff.getTime() - turnOn.getTime();
  //     const time = this.formatTime(diffInMs);
  
  //     array.push({
  //       unityId: result.unityId,
  //       ['hour' + label]: time,
  //       ['date' + label]: turnOn.toLocaleDateString(),
  //       numberHour: this.convertTimeToDecimal(time)
  //     });
  //   });
  
  //   const object = {};
  
  //   array.forEach((item) => {
  //     const key = `${item.unityId}${item['date' + label]}`;
  //     if (!object[key]) {
  //       object[key] = {
  //         unityId: item.unityId,
  //         ['date' + label]: item['date' + label],
  //         ['hour' + label]: [item['hour' + label]],
  //         numberHour: item.numberHour
  //       };
  //     } else {
  //       object[key]['hour' + label].push(item['hour' + label]);
  //       object[key].numberHour += item.numberHour;
  //     }
  //   });
  
  //   Object.values(object).forEach((item:any) => {
  //     item['hour' + label] = this.sumTimes(item['hour' + label]);
  //     item.numberHour = this.convertirAHorasDecimales(item['hour' + label]);
  //   });
  
  //   response.push(Object.values(object));
  //   console.log(response);
    
  //   return response;
  // }
  
  async reportHoursworked(entityName: any,request: any): Promise<any> {
    const mobileUnitiesIds = request.mobileUnitiesIds;
    const startDate = request.startDate;
    const endDate = request.endDate;
    const type = request.type;
    let actualDate = new Date(startDate);
    let horasTrabajadas = [];

    const g = {
      unityId: In(mobileUnitiesIds),
      type: type,
      start: Between(startDate + ' 00:00:00', endDate + ' 23:59:59')
    }; 
    const f = ['start','end','unityId'];
    const rst = await this.dynamicEntityService.searchCamp(
      entityName, // entityName
      g,
      f
    );
    if (!rst) {
      return [{'success': false, 'message': 'Sin datos para mostrar'}];
    }
    
    //while (actualDate <= new Date(endDate)) {
    
      const time = parse(startDate, 'yyyy-MM-dd', new Date);
      console.log(time);
      
      // Incrementar un día
      const condicion = {
        unityId: In(mobileUnitiesIds),
        type: type,
        start: Between(time + ' 00:00:00', time + ' 23:59:59')
      }; 
      const field = ['start','end','unityId'];
      const datos = await this.dynamicEntityService.searchCamp(
        entityName, // entityName
        condicion,
        field
      );
      console.log(datos);
      
      datos.forEach((result) => {
        const diffInMs = result.end.getTime() - result.start.getTime();
        const time = diffInMs;
        console.log(result.end);

        horasTrabajadas.push({
          plate: result.unityId, //Falta traerlo por join
          horasT: time
          
        });
        
      });
      //actualDate.setDate(actualDate.getDate() + 1);
    //}

    
    return [];
  }
}
