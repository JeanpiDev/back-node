"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../database/db.service");
const typeorm_1 = require("typeorm");
let ReportsService = class ReportsService {
    constructor(dynamicEntityService, eventsService) {
        this.dynamicEntityService = dynamicEntityService;
        this.eventsService = eventsService;
    }
    async consultTank(unityId) {
        try {
            const conditions = { id: unityId };
            const fields = ['tankCapacity'];
            const result = await this.dynamicEntityService.searchCamp('MobileUnities', conditions, fields);
            const tankCapacity = result[0].tankCapacity;
            return { tankCapacity: tankCapacity };
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async registerDayBefore(unityId) {
        try {
            const conditions = { 'unityId': unityId };
            const fields = [
                'FuelConsumption.*',
                'MobileUnities.tank_capacity'
            ];
            const join = {
                table: 'MobileUnities',
                condition: 'FuelConsumption.unityId = MobileUnities.id'
            };
            const latestFuelConsumption = await this.dynamicEntityService.searchCampWithJoin('FuelConsumption', conditions, fields, join);
            if (latestFuelConsumption.length > 0) {
                const response = {
                    success: true,
                    data: latestFuelConsumption[0]
                };
                return response;
            }
            else {
                const response = {
                    success: false,
                    message: 'El vehículo no tiene registros de consumo de combustible.'
                };
                return response;
            }
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async updateDayBefore(id, resultgal, resultkm, rendimiento) {
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
            }
            else {
                const response = {
                    success: false,
                    message: 'No se pudo actualizar el registro.'
                };
                return response;
            }
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async updateFuelConsumption(id, fuel_quantity, price, car_mileage, created_at, ruta) {
        try {
            const fuelConsumption = await this.dynamicEntityService.findOneP('FuelConsumption', { where: { id: id } });
            if (!fuelConsumption) {
                return [{ 'success': false, 'message': 'Registro no encontrado' }];
            }
            const regAP = await this.Consult(fuelConsumption.createdAt, fuelConsumption.unityId);
            const entityData = {
                fuelQuantity: fuel_quantity,
                price: price,
                carMileage: car_mileage,
                createdAt: created_at,
                ruta: ruta,
            };
            const conditionEdit = { id: id };
            const fuelConsumptionResponse = await this.dynamicEntityService.edit('FuelConsumption', conditionEdit, entityData);
            if (!fuelConsumptionResponse) {
                return [{ 'success': false, 'message': 'Registro no guardado' }];
            }
            await this.Position(fuelConsumption, regAP, fuelConsumption.created_at);
            return ({ success: true, message: 'Guardado exitoso' });
        }
        catch (error) {
            console.error(error);
        }
    }
    async Identifying(regA, regT, regP) {
        const KrepT = regT.carMileage;
        const GtanqT = regT.fuelQuantity;
        if (!regP) {
            const KrepA = regA.carMileage;
            const kmRA = KrepT - KrepA;
            const gCA = GtanqT;
            const rendimiento = kmRA / gCA;
            await this.saveUpdate(regA.id, gCA, kmRA, rendimiento);
            await this.saveUpdate(regT.id, 0, 0, 0);
        }
        else if (!regA) {
            const KrepP = regP.carMileage;
            const GtanqP = regP.fuelQuantity;
            const kmRT = KrepP - KrepT;
            const gCT = GtanqP;
            const rendimiento = kmRT / gCT;
            await this.saveUpdate(regT.id, gCT, kmRT, rendimiento);
        }
        else {
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
    async saveUpdate(id, resultGal, resultKm, rendimiento) {
        const data = {
            id: id,
            resultgal: resultGal,
            resultkm: resultKm,
            rendimiento: rendimiento,
        };
        await this.dynamicEntityService.edit('FuelConsumption', { id: id }, data);
    }
    async Position(regTF, regAPI, FTI) {
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
        }
        else if (FTI > regTF.created_at) {
            regTF = regAPI.dateA;
            regAPF = await this.Consult(regTF.createdAt, regTF.unityId);
            regAF = regAPF.dateA;
            regPF = regAPF.dateP;
            await this.Identifying(regAF, regTF, regPF);
        }
    }
    async Consult(created_at, unityId) {
        let dateA = await this.dynamicEntityService.search('FuelConsumption', { createdAt: (0, typeorm_1.LessThan)(created_at), unityId: unityId }, { createdAt: 'DESC' });
        let dateP = await this.dynamicEntityService.search('FuelConsumption', { createdAt: (0, typeorm_1.MoreThan)(created_at), unityId: unityId }, { createdAt: 'ASC' });
        dateA = dateA[0];
        dateP = dateP[0];
        return { dateA, dateP };
    }
    async reportHoursworked(entityName, request) {
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
                    start: (0, typeorm_1.MoreThan)(time)
                };
                horasTrabajadas[unity] = [];
                if (!dataHorasTotal[unity]) {
                    dataHorasTotal[unity] = 0;
                }
                const field = ['start', 'end', 'unityId'];
                const datos = await this.dynamicEntityService.searchCamp(entityName, condicion, field);
                totalMiliseconds = 0;
                datos.forEach((result) => {
                    const diffInMs = result.end.getTime() - result.start.getTime();
                    totalMiliseconds += diffInMs;
                });
                const timeConvert = await this.dynamicEntityService.formatTime(totalMiliseconds);
                dataHoras[time] = timeConvert;
                actualDate = new Date(actualDate.getTime() + 24 * 60 * 60 * 1000);
                horasTrabajadas[unity].push(dataHoras);
                dataHorasTotal[unity] += totalMiliseconds;
                totalMiliseconds = 0;
            }
            ;
        }
        for (const unity of mobileUnitiesIds) {
            const timeConvert = await this.dynamicEntityService.formatTime(dataHorasTotal[unity]);
            const dataHorasT = { ...horasTrabajadas[unity][horasTrabajadas[unity].length - 1], total: timeConvert };
            horasTrabajadas[unity][horasTrabajadas[unity].length - 1] = dataHorasT;
        }
        return horasTrabajadas;
    }
    async reportManagerial(entityName, request) {
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
            id: (0, typeorm_1.In)(mobileUnitiesIds)
        };
        const field = ['id', 'plate'];
        const datos = await this.dynamicEntityService.searchCamp(entityName, condicion, field);
        for (const unityId of datos) {
            dataArray[unityId.id] = [];
            titleArray = [{ 'FechaInicio': 'Fecha inicio', 'FechaFinal': 'Fecha final', 'Placa': 'Activo movil' }];
            let id = unityId.id;
            unityData = { 'FechaInicio': startDate, 'FechaFinal': endDate, 'Placa': unityId.plate };
            for (const reportData of report) {
                console.log(report);
                if (reportData.info != null) {
                    let events = reportData.info.split(',');
                    for (const eventId of events) {
                        queryData = await this.createQuery(reportData.typeReport, eventId, unityId.id, startDate, endDate);
                        let title = queryData.title;
                        let value = queryData.value;
                        unityData[title] = value;
                        dataArray[unityId.id].push(unityData);
                    }
                    ;
                }
            }
            ;
        }
        ;
        return dataArray;
    }
    async createQuery(typeRepot, typeData, mobileUnitiesIds, startDate, endDate) {
        let resultArray = {};
        let eventTypeName = await this.eventsService.eventTypeName();
        let consumptionTypeName = ['Galones consumidos', 'Rendimiento'];
        let hoursName = { 1: 'Horas Trabajadas', 2: 'Horas en reposo' };
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
            case 1:
                query = await this.eventsService.queryMobileEvent(request);
                title = eventTypeName[typeData];
                if (!query) {
                    query = 0;
                }
                break;
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
        return resultArray;
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DynamicEntityService,
        db_service_1.EventsService])
], ReportsService);
//# sourceMappingURL=m8_reports.service.js.map