/* eslint-disable prettier/prettier */
// dynamic-entity.service.ts
import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { entityMap } from './entityMap';

//CUSTOMER
import { Customers, Users, ContactTypes, ContactsEmergency, DriversDallas, CustomersBlocked, Contacts, UsersTypes, EventDriverValidator, MobileUnityDrivers } from './db.entities';
//DEVICES
import { Brands,DevicePlotDeviceType,Devices,DevicePlotHeaderTypes,DevicePlotHeaders,DevicePlots,DeviceTests,DeviceTypeCommands,DeviceTypes,DeviceUser,CommandLog,CommandPending,CommandsList,CommandsTosend } from './db.entities';
//CENTRALALERTS
import { Alerts,CentralAlerts,CentralSilencedAlerts,Novelties,NoveltyTypes } from './db.entities';
//MAPS
import { CarrerasCalles,Cities,Departments,Directions,GeographicalEvents,GeographicalResources,Municipios,Rutograma } from './db.entities';
//MOBILE UNITIES
import { MobileUnities,MobileUnityDallasKeys,MobileUnityDriver,MobileUnityGroups,ShareTracking,HabitosConduccion,MobileUnityAlerts,MobileUnityEvents,MobileUnityLastEvents,NotificationUnity,Preoperacional } from './db.entities';
//NOTIFICATIONS
import { GeographicalResourceNotification,GeographicalResourcesNotifications,MobileUnityEventType,Notifications,UserNotifications } from './db.entities';
//REPORTS
import { FormStructureCustomer,FuelConsumption,ScheduledReports,SharePreoperational,TemporalWorks,Works } from './db.entities';
//ADMIN
import { Parameters,WebserviceBrand,WebserviceLine,WebserviceLogs,WebserviceTypeMobileUnity,Consultants,DocumentTypes,ModelHasPermissions,ModelHasRoles,Permissions,RoleHasPermissions,Roles,Templates,UserEmailTemplates,UserScheduledEmails,MobileUnityBrands,MobileUnityClass,MobileUnityLine,MobileUnityStatus,MobileUnityStatusHistory,MobileUnitySubclass,MobileUnityType,EventTypes,Logs,Plans,SimcardLogs,SimcardPlan,Simcards } from './db.entities';
import { Registry } from '../db.service';

@Injectable()
export class DynamicListService {
  private repository: Repository<any>;
  
  constructor(
    private entitymap: any,
    private moduleRef: ModuleRef,
    private registry: Registry
  ) {
    this.registry.registerConstructor(this.constructor);
    entitymap = entityMap;
  }
}