/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
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


// ... imports de entidades ...

@Injectable()
export class DynamicEntityService {
  private repository: Repository<any>;

  constructor(
    private moduleRef: ModuleRef,
    @InjectRepository(Customers)
    private customersRepository: Repository<Customers>,
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    @InjectRepository(Devices)
    private devicesRepository: Repository<Devices>,
    @InjectRepository(Brands)
    private brandsRepository: Repository<Brands>,
    @InjectRepository(DevicePlotDeviceType)
    private devicePlotDeviceTypeRepository: Repository<DevicePlotDeviceType>,
    @InjectRepository(DevicePlotHeaderTypes)
    private devicePlotHeaderTypesRepository: Repository<DevicePlotHeaderTypes>,
    @InjectRepository(DevicePlotHeaders)
    private devicePlotHeadersRepository: Repository<DevicePlotHeaders>,
    @InjectRepository(DevicePlots)
    private devicePlotsRepository: Repository<DevicePlots>,
    @InjectRepository(DeviceTests)
    private deviceTestsRepository: Repository<DeviceTests>,
    @InjectRepository(DeviceTypeCommands)
    private deviceTypeCommandsRepository: Repository<DeviceTypeCommands>,
    @InjectRepository(DeviceTypes)
    private deviceTypesRepository: Repository<DeviceTypes>,
    @InjectRepository(DeviceUser)
    private deviceUserRepository: Repository<DeviceUser>,
    @InjectRepository(ContactTypes)
    private contactTypesRepository: Repository<ContactTypes>,
    @InjectRepository(ContactsEmergency)
    private contactsEmergencyRepository: Repository<ContactsEmergency>,
    @InjectRepository(CustomersBlocked)
    private customersBlockedRepository: Repository<CustomersBlocked>,
    @InjectRepository(Contacts)
    private contactsRepository: Repository<Contacts>,
    @InjectRepository(UsersTypes)
    private usersTypesRepository: Repository<UsersTypes>,
    @InjectRepository(DriversDallas)
    private driversDallasRepository: Repository<DriversDallas>,
    @InjectRepository(EventDriverValidator)
    private eventDriverValidatorRepository: Repository<EventDriverValidator>,
    @InjectRepository(MobileUnityDrivers)
    private mobileUnityDriversRepository: Repository<MobileUnityDrivers>,
    @InjectRepository(CommandLog)
    private commandLogRepository: Repository<CommandLog>,
    @InjectRepository(CommandPending)
    private commandPendingRepository: Repository<CommandPending>,
    @InjectRepository(CommandsList)
    private commandsListRepository: Repository<CommandsList>,
    @InjectRepository(CommandsTosend)
    private commandsTosendRepository: Repository<CommandsTosend>,
    @InjectRepository(Alerts)
    private alertsRepository: Repository<Alerts>,
    @InjectRepository(CentralAlerts)
    private centralAlertsRepository: Repository<CentralAlerts>,
    @InjectRepository(CentralSilencedAlerts)
    private centralSilencedAlertsRepository: Repository<CentralSilencedAlerts>,
    @InjectRepository(Novelties)
    private noveltiesRepository: Repository<Novelties>,
    @InjectRepository(NoveltyTypes)
    private noveltyTypesRepository: Repository<NoveltyTypes>,
    @InjectRepository(CarrerasCalles)
    private carrerasCallesRepository: Repository<CarrerasCalles>,
    @InjectRepository(Cities)
    private citiesRepository: Repository<Cities>,
    @InjectRepository(Departments)
    private departmentsRepository: Repository<Departments>,
    @InjectRepository(Directions)
    private directionsRepository: Repository<Directions>,
    @InjectRepository(GeographicalEvents)
    private geographicalEventsRepository: Repository<GeographicalEvents>,
    @InjectRepository(GeographicalResources)
    private geographicalResourcesRepository: Repository<GeographicalResources>,
    @InjectRepository(Municipios)
    private municipiosRepository: Repository<Municipios>,
    @InjectRepository(Rutograma)
    private rutogramaRepository: Repository<Rutograma>,
    @InjectRepository(MobileUnities)
    private mobileUnitiesRepository: Repository<MobileUnities>,
    @InjectRepository(MobileUnityDallasKeys)
    private mobileUnityDallasKeysRepository: Repository<MobileUnityDallasKeys>,
    @InjectRepository(MobileUnityDriver)
    private mobileUnityDriverRepository: Repository<MobileUnityDriver>,
    @InjectRepository(MobileUnityGroups)
    private mobileUnityGroupsRepository: Repository<MobileUnityGroups>,
    @InjectRepository(ShareTracking)
    private shareTrackingRepository: Repository<ShareTracking>,
    @InjectRepository(HabitosConduccion)
    private habitosConduccionRepository: Repository<HabitosConduccion>,
    @InjectRepository(MobileUnityAlerts)
    private mobileUnityAlertsRepository: Repository<MobileUnityAlerts>,
    @InjectRepository(MobileUnityEvents)
    private mobileUnityEventsRepository: Repository<MobileUnityEvents>,
    @InjectRepository(MobileUnityLastEvents)
    private mobileUnityLastEventsRepository: Repository<MobileUnityLastEvents>,
    @InjectRepository(NotificationUnity)
    private notificationUnityRepository: Repository<NotificationUnity>,
    @InjectRepository(Preoperacional)
    private preoperacionalRepository: Repository<Preoperacional>,
    @InjectRepository(GeographicalResourceNotification)
    private geographicalResourceNotificationRepository: Repository<GeographicalResourceNotification>,
    @InjectRepository(GeographicalResourcesNotifications)
    private geographicalResourcesNotificationsRepository: Repository<GeographicalResourcesNotifications>,
    @InjectRepository(MobileUnityEventType)
    private mobileUnityEventTypeRepository: Repository<MobileUnityEventType>,
    @InjectRepository(Notifications)
    private notificationsRepository: Repository<Notifications>,
    @InjectRepository(UserNotifications)
    private userNotificationsRepository: Repository<UserNotifications>,
    @InjectRepository(FormStructureCustomer)
    private formStructureCustomerRepository: Repository<FormStructureCustomer>,
    @InjectRepository(FuelConsumption)
    private fuelConsumptionRepository: Repository<FuelConsumption>,
    @InjectRepository(ScheduledReports)
    private scheduledReportsRepository: Repository<ScheduledReports>,
    @InjectRepository(SharePreoperational)
    private sharePreoperationalRepository: Repository<SharePreoperational>,
    @InjectRepository(TemporalWorks)
    private temporalWorksRepository: Repository<TemporalWorks>,
    @InjectRepository(Works)
    private worksRepository: Repository<Works>,
    @InjectRepository(Parameters)
    private parametersRepository: Repository<Parameters>,
    @InjectRepository(WebserviceBrand)
    private webserviceBrandRepository: Repository<WebserviceBrand>,
    @InjectRepository(WebserviceLine)
    private webserviceLineRepository: Repository<WebserviceLine>,
    @InjectRepository(WebserviceLogs)
    private webserviceLogsRepository: Repository<WebserviceLogs>,
    @InjectRepository(WebserviceTypeMobileUnity)
    private webserviceTypeMobileUnityRepository: Repository<WebserviceTypeMobileUnity>,
    @InjectRepository(Consultants)
    private consultantsRepository: Repository<Consultants>,
    @InjectRepository(DocumentTypes)
    private documentTypesRepository: Repository<DocumentTypes>,
    @InjectRepository(ModelHasPermissions)
    private modelHasPermissionsRepository: Repository<ModelHasPermissions>,
    @InjectRepository(ModelHasRoles)
    private modelHasRolesRepository: Repository<ModelHasRoles>,
    @InjectRepository(Permissions)
    private permissionsRepository: Repository<Permissions>,
    @InjectRepository(RoleHasPermissions)
    private roleHasPermissionsRepository: Repository<RoleHasPermissions>,
    @InjectRepository(Roles)
    private rolesRepository: Repository<Roles>,
    @InjectRepository(Templates)
    private templatesRepository: Repository<Templates>,
    @InjectRepository(UserEmailTemplates)
    private userEmailTemplatesRepository: Repository<UserEmailTemplates>,
    @InjectRepository(UserScheduledEmails)
    private userScheduledEmailsRepository: Repository<UserScheduledEmails>,
    @InjectRepository(MobileUnityBrands)
    private mobileUnityBrandsRepository: Repository<MobileUnityBrands>,
    @InjectRepository(MobileUnityClass)
    private mobileUnityClassRepository: Repository<MobileUnityClass>,
    @InjectRepository(MobileUnityLine)
    private mobileUnityLineRepository: Repository<MobileUnityLine>,
    @InjectRepository(MobileUnityStatus)
    private mobileUnityStatusRepository: Repository<MobileUnityStatus>,
    @InjectRepository(MobileUnityStatusHistory)
    private mobileUnityStatusHistoryRepository: Repository<MobileUnityStatusHistory>,
    @InjectRepository(MobileUnitySubclass)
    private mobileUnitySubclassRepository: Repository<MobileUnitySubclass>,
    @InjectRepository(MobileUnityType)
    private mobileUnityTypeRepository: Repository<MobileUnityType>,
    @InjectRepository(EventTypes)
    private eventTypesRepository: Repository<EventTypes>,
    @InjectRepository(Logs)
    private logsRepository: Repository<Logs>,
    @InjectRepository(Plans)
    private plansRepository: Repository<Plans>,
    @InjectRepository(SimcardLogs)
    private simcardLogsRepository: Repository<SimcardLogs>,
    @InjectRepository(SimcardPlan)
    private simcardPlanRepository: Repository<SimcardPlan>,
    @InjectRepository(Simcards)
    private simcardsRepository: Repository<Simcards>,
  ) {}

  // ... métodos de la clase ...

  getConstructorInfo() {
    return this.constructor;
  }
}

export const DynamicEntityServiceConstructor = DynamicEntityService;