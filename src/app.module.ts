/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule, ReportsModule, CustomerModule } from './modules/database/db.modules';
import { DynamicEntityService,Registry } from './modules/database/db.service';
import { TypeOrmModule } from '@nestjs/typeorm';
//CUSTOMER

import { Customers, Users, ContactTypes, ContactsEmergency, DriversDallas, CustomersBlocked, Contacts, UsersTypes, EventDriverValidator, MobileUnityDrivers } from './modules/database/db.entities/db.entities';
//DEVICES
import { Brands,DevicePlotDeviceType,Devices,DevicePlotHeaderTypes,DevicePlotHeaders,DevicePlots,DeviceTests,DeviceTypeCommands,DeviceTypes,DeviceUser,CommandLog,CommandPending,CommandsList,CommandsTosend } from './modules/database/db.entities/db.entities';
//CENTRALALERTS
import { Alerts,CentralAlerts,CentralSilencedAlerts,Novelties,NoveltyTypes } from './modules/database/db.entities/db.entities';
//MAPS
import { CarrerasCalles,Cities,Departments,Directions,GeographicalEvents,GeographicalResources,Municipios,Rutograma } from './modules/database/db.entities/db.entities';
import { ScheduleModule } from '@nestjs/schedule';
import { SchedulerService } from './modules/comandos/schedule.service';
//MOBILE UNITIES
import { MobileUnities,MobileUnityDallasKeys,MobileUnityDriver,MobileUnityGroups,ShareTracking,HabitosConduccion,MobileUnityAlerts,MobileUnityEvents,MobileUnityLastEvents,NotificationUnity,Preoperacional } from './modules/database/db.entities/db.entities';
//NOTIFICATION
import { GeographicalResourceNotification,GeographicalResourcesNotifications,MobileUnityEventType,Notifications,UserNotifications } from './modules/database/db.entities/db.entities';
//REPORTS
import { FormStructureCustomer,FuelConsumption,ScheduledReports,SharePreoperational,TemporalWorks,Works } from './modules/database/db.entities/db.entities';
import { Parameters,WebserviceBrand,WebserviceLine,WebserviceLogs,WebserviceTypeMobileUnity,Consultants,DocumentTypes,ModelHasPermissions,ModelHasRoles,Permissions,RoleHasPermissions,Roles,Templates,UserEmailTemplates,UserScheduledEmails,MobileUnityBrands,MobileUnityClass,MobileUnityLine,MobileUnityStatus,MobileUnityStatusHistory,MobileUnitySubclass,MobileUnityType,EventTypes,Logs,Plans,SimcardLogs,SimcardPlan,Simcards } from './modules/database/db.entities/db.entities';

import { ReportsService } from "./modules/m8_reports/m8_reports.service";

@Module({
  imports: [
    DatabaseModule,
    CustomerModule,
    ScheduleModule.forRoot(),
    ReportsModule,
    TypeOrmModule.forFeature([Customers,Users,ContactTypes,ContactsEmergency,DriversDallas, CustomersBlocked,Contacts,UsersTypes,EventDriverValidator,MobileUnityDrivers,Brands,DevicePlotDeviceType,Devices,DevicePlotHeaderTypes,DevicePlotHeaders,DevicePlots,DeviceTests,DeviceTypeCommands,DeviceTypes,DeviceUser,CommandLog,CommandPending,CommandsList,CommandsTosend,Alerts,CentralAlerts,CentralSilencedAlerts,Novelties,NoveltyTypes,CarrerasCalles,Cities,Departments,Directions,GeographicalEvents,GeographicalResources,Municipios,Rutograma,MobileUnities,MobileUnityDallasKeys,MobileUnityDriver,MobileUnityGroups,ShareTracking,HabitosConduccion,MobileUnityAlerts,MobileUnityEvents,MobileUnityLastEvents,NotificationUnity,Preoperacional,GeographicalResourceNotification,GeographicalResourcesNotifications,MobileUnityEventType,Notifications,UserNotifications,FormStructureCustomer,FuelConsumption,ScheduledReports,SharePreoperational,TemporalWorks,Works,Parameters,WebserviceBrand,WebserviceLine,WebserviceLogs,WebserviceTypeMobileUnity,Consultants,DocumentTypes,ModelHasPermissions,ModelHasRoles,Permissions,RoleHasPermissions,Roles,Templates,UserEmailTemplates,UserScheduledEmails,MobileUnityBrands,MobileUnityClass,MobileUnityLine,MobileUnityStatus,MobileUnityStatusHistory,MobileUnitySubclass,MobileUnityType,EventTypes,Logs,Plans,SimcardLogs,SimcardPlan,Simcards]),
  ],
  controllers: [AppController],
  providers: [AppService, SchedulerService, DynamicEntityService, FuelConsumption, ReportsService, Registry], 
})
export class AppModule {}