/* eslint-disable prettier/prettier */
import { Controller, Get, Patch, Post, Body, Param, Inject, Query } from '@nestjs/common';
import { CustomerService,UsersService,DatabaseService,SchedulerService,DynamicEntityService } from './modules/database/db.service';
import { FindOptionsWhere } from 'typeorm';
// Entidades
import { ReportsService } from './modules/m8_reports/m8_reports.service';


@Controller('app')
export class AppController {
  constructor(
    private readonly customersService: CustomerService,
    private readonly usersService: UsersService,
    private readonly databaseService: DatabaseService,
    private readonly dynamicEntityService: DynamicEntityService,
    private readonly reportsService: ReportsService,
    @Inject(SchedulerService) private readonly schedulerService: SchedulerService,
  ) {
    this.databaseService.verifyConnection(dynamicEntityService.getEntityByName('Customers'));
  }

  // Ejecuta las tareas programadas automaticamente
  @Get('schedule')
  async scheduleCronJob() {
    return await this.schedulerService.scheduleCronJob();
  }

  @Get(':entityName')
  async getentity(@Param('entityName') entityName: string){
    return this.dynamicEntityService.findAllSeparated(entityName);
  }
  @Post('search/:entityName')
  async getSearch(@Param('entityName') entityName: string, @Body() conditions: FindOptionsWhere<any>): Promise<any[]> {
    console.log(conditions);
    return this.dynamicEntityService.search(entityName, conditions);
  }
  
  @Patch('edit/:entityName/:condition')
  async editEntity(@Param('entityName') entityName: string, @Param('condition') condition: any, @Body() data: Partial<any>): Promise<any> {
    return this.dynamicEntityService.edit(entityName, condition, data);
  }
  
  @Post('insert/:entityName')
  async insertEntity(@Param('entityName') entityName: string, @Body() data: Partial<any>): Promise<any>{
    return this.dynamicEntityService.insert(entityName, data);
  }
  
  @Patch('delete/:entityName/:id')
  async removeEntity(@Param('entityName') entityName: string, @Param('id') id: number): Promise<any> {
    return this.dynamicEntityService.remove(entityName, id);
  }


  @Post('searchField/:entityName')
  async getSearchField(
    @Param('entityName') entityName: string,
    @Body() conditions: FindOptionsWhere<any>,
    @Query('fields') fields: string
  ): Promise<any[]> {
    const fieldsArray = fields.split(',');
    console.log(conditions);
    return this.dynamicEntityService.searchCamp(entityName, conditions, fieldsArray);
  }

  @Post('searchFieldRelation/:entityName')
  async getSearchFieldRelation(
    @Param('entityName') entityName: string,
    @Body() conditions: FindOptionsWhere<any>,
    @Query('fields') fields: string,
    @Query('relations') relations: string
  ): Promise<any[]> {
    const fieldsArray = fields.split(',');
    const relationsArray = relations? relations.split(',') : [];
    const response = await this.dynamicEntityService.searchCampWithRelations(entityName, conditions, fieldsArray, relationsArray);
     return response;
  }

  //COMBUSTIBLE
  @Get('report/consult-tank')
  async consultaJSON(@Query('unity_id') unityId: number) {
    return this.reportsService.consultTank(unityId);
  }
  @Post('registerDayBefore/:unityId')
  async registerDayBefore(@Param('unityId') unityId: number): Promise<any> {
    return this.reportsService.registerDayBefore(unityId);
  }
  @Patch('update-day-before/:id')
  async updateDayBefore(@Param('id') id: number, @Body() data: any): Promise<any> {
    // const { resultGal, resultKm, rendimiento } = data;
    return this.reportsService.updateDayBefore(id, data.resultGal, data.resultKm, data.rendimiento);
  }
  @Patch('update-fuelConsumption/:id')
  async updateFuelConsumption(@Param('id') id: number, @Body() data: any): Promise<any> {
    return this.reportsService.updateFuelConsumption(id, data.fuel_quantity, data.price, data.car_mileage, data.created_at, data.ruta);
  }

  //REPORTS
  //HORAS TRABAJADAS
  @Patch('report-hours-worked/:entityName')
  async reportHoursWorked( @Body() data: any, @Param('entityName') entityName: any): Promise<any> {
    return this.reportsService.reportHoursworked(entityName,data);
  }
  //REPORTE GERENCIAL
  @Patch('report-managerial/:entityName')
  async reportManagerial( @Body() data: any, @Param('entityName') entityName: any): Promise<any> {
    return this.reportsService.reportManagerial(entityName,data);
  }

  // INDEX
  @Get()
  async getIndex() {
    return 'Welcome to my application!';
  }
}