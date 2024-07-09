import { ModuleRef } from '@nestjs/core';
import { Repository } from 'typeorm';
import { Customers, Users, ContactTypes, ContactsEmergency, DriversDallas, CustomersBlocked, Contacts, UsersTypes, EventDriverValidator, MobileUnityDrivers } from './db.entities';
import { Brands, DevicePlotDeviceType, Devices, DevicePlotHeaderTypes, DevicePlotHeaders, DevicePlots, DeviceTests, DeviceTypeCommands, DeviceTypes, DeviceUser, CommandLog, CommandPending, CommandsList, CommandsTosend } from './db.entities';
import { Alerts, CentralAlerts, CentralSilencedAlerts, Novelties, NoveltyTypes } from './db.entities';
import { CarrerasCalles, Cities, Departments, Directions, GeographicalEvents, GeographicalResources, Municipios, Rutograma } from './db.entities';
import { MobileUnities, MobileUnityDallasKeys, MobileUnityDriver, MobileUnityGroups, ShareTracking, HabitosConduccion, MobileUnityAlerts, MobileUnityEvents, MobileUnityLastEvents, NotificationUnity, Preoperacional } from './db.entities';
import { GeographicalResourceNotification, GeographicalResourcesNotifications, MobileUnityEventType, Notifications, UserNotifications } from './db.entities';
import { FormStructureCustomer, FuelConsumption, ScheduledReports, SharePreoperational, TemporalWorks, Works } from './db.entities';
import { Parameters, WebserviceBrand, WebserviceLine, WebserviceLogs, WebserviceTypeMobileUnity, Consultants, DocumentTypes, ModelHasPermissions, ModelHasRoles, Permissions, RoleHasPermissions, Roles, Templates, UserEmailTemplates, UserScheduledEmails, MobileUnityBrands, MobileUnityClass, MobileUnityLine, MobileUnityStatus, MobileUnityStatusHistory, MobileUnitySubclass, MobileUnityType, EventTypes, Logs, Plans, SimcardLogs, SimcardPlan, Simcards } from './db.entities';
export declare class DynamicEntityService {
    private moduleRef;
    private customersRepository;
    private usersRepository;
    private devicesRepository;
    private brandsRepository;
    private devicePlotDeviceTypeRepository;
    private devicePlotHeaderTypesRepository;
    private devicePlotHeadersRepository;
    private devicePlotsRepository;
    private deviceTestsRepository;
    private deviceTypeCommandsRepository;
    private deviceTypesRepository;
    private deviceUserRepository;
    private contactTypesRepository;
    private contactsEmergencyRepository;
    private customersBlockedRepository;
    private contactsRepository;
    private usersTypesRepository;
    private driversDallasRepository;
    private eventDriverValidatorRepository;
    private mobileUnityDriversRepository;
    private commandLogRepository;
    private commandPendingRepository;
    private commandsListRepository;
    private commandsTosendRepository;
    private alertsRepository;
    private centralAlertsRepository;
    private centralSilencedAlertsRepository;
    private noveltiesRepository;
    private noveltyTypesRepository;
    private carrerasCallesRepository;
    private citiesRepository;
    private departmentsRepository;
    private directionsRepository;
    private geographicalEventsRepository;
    private geographicalResourcesRepository;
    private municipiosRepository;
    private rutogramaRepository;
    private mobileUnitiesRepository;
    private mobileUnityDallasKeysRepository;
    private mobileUnityDriverRepository;
    private mobileUnityGroupsRepository;
    private shareTrackingRepository;
    private habitosConduccionRepository;
    private mobileUnityAlertsRepository;
    private mobileUnityEventsRepository;
    private mobileUnityLastEventsRepository;
    private notificationUnityRepository;
    private preoperacionalRepository;
    private geographicalResourceNotificationRepository;
    private geographicalResourcesNotificationsRepository;
    private mobileUnityEventTypeRepository;
    private notificationsRepository;
    private userNotificationsRepository;
    private formStructureCustomerRepository;
    private fuelConsumptionRepository;
    private scheduledReportsRepository;
    private sharePreoperationalRepository;
    private temporalWorksRepository;
    private worksRepository;
    private parametersRepository;
    private webserviceBrandRepository;
    private webserviceLineRepository;
    private webserviceLogsRepository;
    private webserviceTypeMobileUnityRepository;
    private consultantsRepository;
    private documentTypesRepository;
    private modelHasPermissionsRepository;
    private modelHasRolesRepository;
    private permissionsRepository;
    private roleHasPermissionsRepository;
    private rolesRepository;
    private templatesRepository;
    private userEmailTemplatesRepository;
    private userScheduledEmailsRepository;
    private mobileUnityBrandsRepository;
    private mobileUnityClassRepository;
    private mobileUnityLineRepository;
    private mobileUnityStatusRepository;
    private mobileUnityStatusHistoryRepository;
    private mobileUnitySubclassRepository;
    private mobileUnityTypeRepository;
    private eventTypesRepository;
    private logsRepository;
    private plansRepository;
    private simcardLogsRepository;
    private simcardPlanRepository;
    private simcardsRepository;
    private repository;
    constructor(moduleRef: ModuleRef, customersRepository: Repository<Customers>, usersRepository: Repository<Users>, devicesRepository: Repository<Devices>, brandsRepository: Repository<Brands>, devicePlotDeviceTypeRepository: Repository<DevicePlotDeviceType>, devicePlotHeaderTypesRepository: Repository<DevicePlotHeaderTypes>, devicePlotHeadersRepository: Repository<DevicePlotHeaders>, devicePlotsRepository: Repository<DevicePlots>, deviceTestsRepository: Repository<DeviceTests>, deviceTypeCommandsRepository: Repository<DeviceTypeCommands>, deviceTypesRepository: Repository<DeviceTypes>, deviceUserRepository: Repository<DeviceUser>, contactTypesRepository: Repository<ContactTypes>, contactsEmergencyRepository: Repository<ContactsEmergency>, customersBlockedRepository: Repository<CustomersBlocked>, contactsRepository: Repository<Contacts>, usersTypesRepository: Repository<UsersTypes>, driversDallasRepository: Repository<DriversDallas>, eventDriverValidatorRepository: Repository<EventDriverValidator>, mobileUnityDriversRepository: Repository<MobileUnityDrivers>, commandLogRepository: Repository<CommandLog>, commandPendingRepository: Repository<CommandPending>, commandsListRepository: Repository<CommandsList>, commandsTosendRepository: Repository<CommandsTosend>, alertsRepository: Repository<Alerts>, centralAlertsRepository: Repository<CentralAlerts>, centralSilencedAlertsRepository: Repository<CentralSilencedAlerts>, noveltiesRepository: Repository<Novelties>, noveltyTypesRepository: Repository<NoveltyTypes>, carrerasCallesRepository: Repository<CarrerasCalles>, citiesRepository: Repository<Cities>, departmentsRepository: Repository<Departments>, directionsRepository: Repository<Directions>, geographicalEventsRepository: Repository<GeographicalEvents>, geographicalResourcesRepository: Repository<GeographicalResources>, municipiosRepository: Repository<Municipios>, rutogramaRepository: Repository<Rutograma>, mobileUnitiesRepository: Repository<MobileUnities>, mobileUnityDallasKeysRepository: Repository<MobileUnityDallasKeys>, mobileUnityDriverRepository: Repository<MobileUnityDriver>, mobileUnityGroupsRepository: Repository<MobileUnityGroups>, shareTrackingRepository: Repository<ShareTracking>, habitosConduccionRepository: Repository<HabitosConduccion>, mobileUnityAlertsRepository: Repository<MobileUnityAlerts>, mobileUnityEventsRepository: Repository<MobileUnityEvents>, mobileUnityLastEventsRepository: Repository<MobileUnityLastEvents>, notificationUnityRepository: Repository<NotificationUnity>, preoperacionalRepository: Repository<Preoperacional>, geographicalResourceNotificationRepository: Repository<GeographicalResourceNotification>, geographicalResourcesNotificationsRepository: Repository<GeographicalResourcesNotifications>, mobileUnityEventTypeRepository: Repository<MobileUnityEventType>, notificationsRepository: Repository<Notifications>, userNotificationsRepository: Repository<UserNotifications>, formStructureCustomerRepository: Repository<FormStructureCustomer>, fuelConsumptionRepository: Repository<FuelConsumption>, scheduledReportsRepository: Repository<ScheduledReports>, sharePreoperationalRepository: Repository<SharePreoperational>, temporalWorksRepository: Repository<TemporalWorks>, worksRepository: Repository<Works>, parametersRepository: Repository<Parameters>, webserviceBrandRepository: Repository<WebserviceBrand>, webserviceLineRepository: Repository<WebserviceLine>, webserviceLogsRepository: Repository<WebserviceLogs>, webserviceTypeMobileUnityRepository: Repository<WebserviceTypeMobileUnity>, consultantsRepository: Repository<Consultants>, documentTypesRepository: Repository<DocumentTypes>, modelHasPermissionsRepository: Repository<ModelHasPermissions>, modelHasRolesRepository: Repository<ModelHasRoles>, permissionsRepository: Repository<Permissions>, roleHasPermissionsRepository: Repository<RoleHasPermissions>, rolesRepository: Repository<Roles>, templatesRepository: Repository<Templates>, userEmailTemplatesRepository: Repository<UserEmailTemplates>, userScheduledEmailsRepository: Repository<UserScheduledEmails>, mobileUnityBrandsRepository: Repository<MobileUnityBrands>, mobileUnityClassRepository: Repository<MobileUnityClass>, mobileUnityLineRepository: Repository<MobileUnityLine>, mobileUnityStatusRepository: Repository<MobileUnityStatus>, mobileUnityStatusHistoryRepository: Repository<MobileUnityStatusHistory>, mobileUnitySubclassRepository: Repository<MobileUnitySubclass>, mobileUnityTypeRepository: Repository<MobileUnityType>, eventTypesRepository: Repository<EventTypes>, logsRepository: Repository<Logs>, plansRepository: Repository<Plans>, simcardLogsRepository: Repository<SimcardLogs>, simcardPlanRepository: Repository<SimcardPlan>, simcardsRepository: Repository<Simcards>);
    getConstructorInfo(): Function;
}
export declare const DynamicEntityServiceConstructor: typeof DynamicEntityService;
