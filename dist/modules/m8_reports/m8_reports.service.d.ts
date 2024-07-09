import { DynamicEntityService, EventsService } from '../database/db.service';
export declare class ReportsService {
    private readonly dynamicEntityService;
    private readonly eventsService;
    constructor(dynamicEntityService: DynamicEntityService, eventsService: EventsService);
    consultTank(unityId: number): Promise<any>;
    registerDayBefore(unityId: number): Promise<any>;
    updateDayBefore(id: number, resultgal: number, resultkm: number, rendimiento: number): Promise<any>;
    updateFuelConsumption(id: number, fuel_quantity: string, price: string, car_mileage: number, created_at: string, ruta: string): Promise<any>;
    Identifying(regA: any, regT: any, regP: any): Promise<void>;
    saveUpdate(id: number, resultGal: number, resultKm: number, rendimiento: number): Promise<void>;
    Position(regTF: any, regAPI: any, FTI: Date): Promise<void>;
    Consult(created_at: Date, unityId: number): Promise<any>;
    reportHoursworked(entityName: any, request: any): Promise<any>;
    reportManagerial(entityName: any, request: any): Promise<any>;
    createQuery(typeRepot: any, typeData: any, mobileUnitiesIds: any, startDate: any, endDate: any): Promise<any>;
}
