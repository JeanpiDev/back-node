/* eslint-disable prettier/prettier */
//CUSTOMER
import { Type } from '@nestjs/common';
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

export const entityMap: { [key: string]: Type<any> } = {
    'Customers': Customers,
    'Users': Users,
    'ContactTypes': ContactTypes,
    'ContactsEmergency': ContactsEmergency,
    'CustomersBlocked': CustomersBlocked,
    'Contacts': Contacts,
    'UsersTypes': UsersTypes,
    'Devices': Devices,
    'Brands': Brands,
    'DevicePlotDeviceType': DevicePlotDeviceType,
    'DevicePlotHeaderTypes': DevicePlotHeaderTypes,
    'DevicePlotHeaders': DevicePlotHeaders,
    'DevicePlots': DevicePlots,
    'DeviceTests': DeviceTests,
    'DeviceTypeCommands': DeviceTypeCommands,
    'DeviceTypes': DeviceTypes,
    'DeviceUser': DeviceUser,
    'DriversDallas': DriversDallas,
    'EventDriverValidator': EventDriverValidator,
    'MobileUnityDrivers': MobileUnityDrivers,
    'CommandLog': CommandLog,
    'CommandPending': CommandPending,
    'CommandsList': CommandsList,
    'CommandsTosend': CommandsTosend,
    'Alerts': Alerts,
    'CentralAlerts': CentralAlerts,
    'CentralSilencedAlerts': CentralSilencedAlerts,
    'Novelties': Novelties,
    'NoveltyTypes': NoveltyTypes,
    'CarrerasCalles': CarrerasCalles,
    'Cities': Cities,
    'Departments': Departments,
    'Directions': Directions,
    'GeographicalEvents': GeographicalEvents,
    'GeographicalResources': GeographicalResources,
    'Municipios': Municipios,
    'Rutograma': Rutograma,
    'MobileUnities': MobileUnities,
    'MobileUnityDallasKeys': MobileUnityDallasKeys,
    'MobileUnityDriver': MobileUnityDriver,
    'MobileUnityGroups': MobileUnityGroups,
    'ShareTracking': ShareTracking,
    'HabitosConduccion': HabitosConduccion,
    'MobileUnityAlerts': MobileUnityAlerts,
    'MobileUnityEvents': MobileUnityEvents,
    'MobileUnityLastEvents': MobileUnityLastEvents,
    'NotificationUnity': NotificationUnity,
    'Preoperacional': Preoperacional,
    'GeographicalResourceNotification': GeographicalResourceNotification,
    'GeographicalResourcesNotifications': GeographicalResourcesNotifications,
    'MobileUnityEventType': MobileUnityEventType,
    'Notifications': Notifications,
    'UserNotifications': UserNotifications,
    'FormStructureCustomer': FormStructureCustomer,
    'FuelConsumption': FuelConsumption,
    'ScheduledReports': ScheduledReports,
    'SharePreoperational': SharePreoperational,
    'TemporalWorks': TemporalWorks,
    'Works': Works,
    'Parameters': Parameters,
    'WebserviceBrand': WebserviceBrand,
    'WebserviceLine': WebserviceLine,
    'WebserviceLogs': WebserviceLogs,
    'WebserviceTypeMobileUnity': WebserviceTypeMobileUnity,
    'Consultants': Consultants,
    'DocumentTypes': DocumentTypes,
    'ModelHasPermissions': ModelHasPermissions,
    'ModelHasRoles': ModelHasRoles,
    'Permissions': Permissions,
    'RoleHasPermissions': RoleHasPermissions,
    'Roles': Roles,
    'Templates': Templates,
    'UserEmailTemplates': UserEmailTemplates,
    'UserScheduledEmails': UserScheduledEmails,
    'MobileUnityBrands': MobileUnityBrands,
    'MobileUnityClass': MobileUnityClass,
    'MobileUnityLine': MobileUnityLine,
    'MobileUnityStatus': MobileUnityStatus,
    'MobileUnityStatusHistory': MobileUnityStatusHistory,
    'MobileUnitySubclass': MobileUnitySubclass,
    'MobileUnityType': MobileUnityType,
    'EventTypes': EventTypes,
    'Logs': Logs,
    'Plans': Plans,
    'SimcardLogs': SimcardLogs,
    'SimcardPlan': SimcardPlan,
    'Simcards': Simcards,
};
