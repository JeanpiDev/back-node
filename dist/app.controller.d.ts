import { CustomerService, UsersService, DatabaseService, SchedulerService, DynamicEntityService } from './modules/database/db.service';
import { FindOptionsWhere } from 'typeorm';
import { ReportsService } from './modules/m8_reports/m8_reports.service';
export declare class AppController {
    private readonly customersService;
    private readonly usersService;
    private readonly databaseService;
    private readonly dynamicEntityService;
    private readonly reportsService;
    private readonly schedulerService;
    constructor(customersService: CustomerService, usersService: UsersService, databaseService: DatabaseService, dynamicEntityService: DynamicEntityService, reportsService: ReportsService, schedulerService: SchedulerService);
    scheduleCronJob(): Promise<void>;
    getentity(entityName: string): Promise<{
        headers: string[];
        body: any[];
    }>;
    getSearch(entityName: string, conditions: FindOptionsWhere<any>): Promise<any[]>;
    editEntity(entityName: string, condition: any, data: Partial<any>): Promise<any>;
    insertEntity(entityName: string, data: Partial<any>): Promise<any>;
    removeEntity(entityName: string, id: number): Promise<any>;
    getSearchField(entityName: string, conditions: FindOptionsWhere<any>, fields: string): Promise<any[]>;
    getSearchFieldRelation(entityName: string, conditions: FindOptionsWhere<any>, fields: string, relations: string): Promise<any[]>;
    consultaJSON(unityId: number): Promise<any>;
    registerDayBefore(unityId: number): Promise<any>;
    updateDayBefore(id: number, data: any): Promise<any>;
    updateFuelConsumption(id: number, data: any): Promise<any>;
    reportHoursWorked(data: any, entityName: any): Promise<any>;
    reportManagerial(data: any, entityName: any): Promise<any>;
    getIndex(): Promise<string>;
}
