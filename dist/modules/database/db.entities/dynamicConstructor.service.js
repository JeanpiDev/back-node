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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicEntityServiceConstructor = exports.DynamicEntityService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const db_entities_1 = require("./db.entities");
const db_entities_2 = require("./db.entities");
const db_entities_3 = require("./db.entities");
const db_entities_4 = require("./db.entities");
const db_entities_5 = require("./db.entities");
const db_entities_6 = require("./db.entities");
const db_entities_7 = require("./db.entities");
const db_entities_8 = require("./db.entities");
let DynamicEntityService = class DynamicEntityService {
    constructor(moduleRef, customersRepository, usersRepository, devicesRepository, brandsRepository, devicePlotDeviceTypeRepository, devicePlotHeaderTypesRepository, devicePlotHeadersRepository, devicePlotsRepository, deviceTestsRepository, deviceTypeCommandsRepository, deviceTypesRepository, deviceUserRepository, contactTypesRepository, contactsEmergencyRepository, customersBlockedRepository, contactsRepository, usersTypesRepository, driversDallasRepository, eventDriverValidatorRepository, mobileUnityDriversRepository, commandLogRepository, commandPendingRepository, commandsListRepository, commandsTosendRepository, alertsRepository, centralAlertsRepository, centralSilencedAlertsRepository, noveltiesRepository, noveltyTypesRepository, carrerasCallesRepository, citiesRepository, departmentsRepository, directionsRepository, geographicalEventsRepository, geographicalResourcesRepository, municipiosRepository, rutogramaRepository, mobileUnitiesRepository, mobileUnityDallasKeysRepository, mobileUnityDriverRepository, mobileUnityGroupsRepository, shareTrackingRepository, habitosConduccionRepository, mobileUnityAlertsRepository, mobileUnityEventsRepository, mobileUnityLastEventsRepository, notificationUnityRepository, preoperacionalRepository, geographicalResourceNotificationRepository, geographicalResourcesNotificationsRepository, mobileUnityEventTypeRepository, notificationsRepository, userNotificationsRepository, formStructureCustomerRepository, fuelConsumptionRepository, scheduledReportsRepository, sharePreoperationalRepository, temporalWorksRepository, worksRepository, parametersRepository, webserviceBrandRepository, webserviceLineRepository, webserviceLogsRepository, webserviceTypeMobileUnityRepository, consultantsRepository, documentTypesRepository, modelHasPermissionsRepository, modelHasRolesRepository, permissionsRepository, roleHasPermissionsRepository, rolesRepository, templatesRepository, userEmailTemplatesRepository, userScheduledEmailsRepository, mobileUnityBrandsRepository, mobileUnityClassRepository, mobileUnityLineRepository, mobileUnityStatusRepository, mobileUnityStatusHistoryRepository, mobileUnitySubclassRepository, mobileUnityTypeRepository, eventTypesRepository, logsRepository, plansRepository, simcardLogsRepository, simcardPlanRepository, simcardsRepository) {
        this.moduleRef = moduleRef;
        this.customersRepository = customersRepository;
        this.usersRepository = usersRepository;
        this.devicesRepository = devicesRepository;
        this.brandsRepository = brandsRepository;
        this.devicePlotDeviceTypeRepository = devicePlotDeviceTypeRepository;
        this.devicePlotHeaderTypesRepository = devicePlotHeaderTypesRepository;
        this.devicePlotHeadersRepository = devicePlotHeadersRepository;
        this.devicePlotsRepository = devicePlotsRepository;
        this.deviceTestsRepository = deviceTestsRepository;
        this.deviceTypeCommandsRepository = deviceTypeCommandsRepository;
        this.deviceTypesRepository = deviceTypesRepository;
        this.deviceUserRepository = deviceUserRepository;
        this.contactTypesRepository = contactTypesRepository;
        this.contactsEmergencyRepository = contactsEmergencyRepository;
        this.customersBlockedRepository = customersBlockedRepository;
        this.contactsRepository = contactsRepository;
        this.usersTypesRepository = usersTypesRepository;
        this.driversDallasRepository = driversDallasRepository;
        this.eventDriverValidatorRepository = eventDriverValidatorRepository;
        this.mobileUnityDriversRepository = mobileUnityDriversRepository;
        this.commandLogRepository = commandLogRepository;
        this.commandPendingRepository = commandPendingRepository;
        this.commandsListRepository = commandsListRepository;
        this.commandsTosendRepository = commandsTosendRepository;
        this.alertsRepository = alertsRepository;
        this.centralAlertsRepository = centralAlertsRepository;
        this.centralSilencedAlertsRepository = centralSilencedAlertsRepository;
        this.noveltiesRepository = noveltiesRepository;
        this.noveltyTypesRepository = noveltyTypesRepository;
        this.carrerasCallesRepository = carrerasCallesRepository;
        this.citiesRepository = citiesRepository;
        this.departmentsRepository = departmentsRepository;
        this.directionsRepository = directionsRepository;
        this.geographicalEventsRepository = geographicalEventsRepository;
        this.geographicalResourcesRepository = geographicalResourcesRepository;
        this.municipiosRepository = municipiosRepository;
        this.rutogramaRepository = rutogramaRepository;
        this.mobileUnitiesRepository = mobileUnitiesRepository;
        this.mobileUnityDallasKeysRepository = mobileUnityDallasKeysRepository;
        this.mobileUnityDriverRepository = mobileUnityDriverRepository;
        this.mobileUnityGroupsRepository = mobileUnityGroupsRepository;
        this.shareTrackingRepository = shareTrackingRepository;
        this.habitosConduccionRepository = habitosConduccionRepository;
        this.mobileUnityAlertsRepository = mobileUnityAlertsRepository;
        this.mobileUnityEventsRepository = mobileUnityEventsRepository;
        this.mobileUnityLastEventsRepository = mobileUnityLastEventsRepository;
        this.notificationUnityRepository = notificationUnityRepository;
        this.preoperacionalRepository = preoperacionalRepository;
        this.geographicalResourceNotificationRepository = geographicalResourceNotificationRepository;
        this.geographicalResourcesNotificationsRepository = geographicalResourcesNotificationsRepository;
        this.mobileUnityEventTypeRepository = mobileUnityEventTypeRepository;
        this.notificationsRepository = notificationsRepository;
        this.userNotificationsRepository = userNotificationsRepository;
        this.formStructureCustomerRepository = formStructureCustomerRepository;
        this.fuelConsumptionRepository = fuelConsumptionRepository;
        this.scheduledReportsRepository = scheduledReportsRepository;
        this.sharePreoperationalRepository = sharePreoperationalRepository;
        this.temporalWorksRepository = temporalWorksRepository;
        this.worksRepository = worksRepository;
        this.parametersRepository = parametersRepository;
        this.webserviceBrandRepository = webserviceBrandRepository;
        this.webserviceLineRepository = webserviceLineRepository;
        this.webserviceLogsRepository = webserviceLogsRepository;
        this.webserviceTypeMobileUnityRepository = webserviceTypeMobileUnityRepository;
        this.consultantsRepository = consultantsRepository;
        this.documentTypesRepository = documentTypesRepository;
        this.modelHasPermissionsRepository = modelHasPermissionsRepository;
        this.modelHasRolesRepository = modelHasRolesRepository;
        this.permissionsRepository = permissionsRepository;
        this.roleHasPermissionsRepository = roleHasPermissionsRepository;
        this.rolesRepository = rolesRepository;
        this.templatesRepository = templatesRepository;
        this.userEmailTemplatesRepository = userEmailTemplatesRepository;
        this.userScheduledEmailsRepository = userScheduledEmailsRepository;
        this.mobileUnityBrandsRepository = mobileUnityBrandsRepository;
        this.mobileUnityClassRepository = mobileUnityClassRepository;
        this.mobileUnityLineRepository = mobileUnityLineRepository;
        this.mobileUnityStatusRepository = mobileUnityStatusRepository;
        this.mobileUnityStatusHistoryRepository = mobileUnityStatusHistoryRepository;
        this.mobileUnitySubclassRepository = mobileUnitySubclassRepository;
        this.mobileUnityTypeRepository = mobileUnityTypeRepository;
        this.eventTypesRepository = eventTypesRepository;
        this.logsRepository = logsRepository;
        this.plansRepository = plansRepository;
        this.simcardLogsRepository = simcardLogsRepository;
        this.simcardPlanRepository = simcardPlanRepository;
        this.simcardsRepository = simcardsRepository;
    }
    getConstructorInfo() {
        return this.constructor;
    }
};
exports.DynamicEntityService = DynamicEntityService;
exports.DynamicEntityService = DynamicEntityService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_2.InjectRepository)(db_entities_1.Customers)),
    __param(2, (0, typeorm_2.InjectRepository)(db_entities_1.Users)),
    __param(3, (0, typeorm_2.InjectRepository)(db_entities_2.Devices)),
    __param(4, (0, typeorm_2.InjectRepository)(db_entities_2.Brands)),
    __param(5, (0, typeorm_2.InjectRepository)(db_entities_2.DevicePlotDeviceType)),
    __param(6, (0, typeorm_2.InjectRepository)(db_entities_2.DevicePlotHeaderTypes)),
    __param(7, (0, typeorm_2.InjectRepository)(db_entities_2.DevicePlotHeaders)),
    __param(8, (0, typeorm_2.InjectRepository)(db_entities_2.DevicePlots)),
    __param(9, (0, typeorm_2.InjectRepository)(db_entities_2.DeviceTests)),
    __param(10, (0, typeorm_2.InjectRepository)(db_entities_2.DeviceTypeCommands)),
    __param(11, (0, typeorm_2.InjectRepository)(db_entities_2.DeviceTypes)),
    __param(12, (0, typeorm_2.InjectRepository)(db_entities_2.DeviceUser)),
    __param(13, (0, typeorm_2.InjectRepository)(db_entities_1.ContactTypes)),
    __param(14, (0, typeorm_2.InjectRepository)(db_entities_1.ContactsEmergency)),
    __param(15, (0, typeorm_2.InjectRepository)(db_entities_1.CustomersBlocked)),
    __param(16, (0, typeorm_2.InjectRepository)(db_entities_1.Contacts)),
    __param(17, (0, typeorm_2.InjectRepository)(db_entities_1.UsersTypes)),
    __param(18, (0, typeorm_2.InjectRepository)(db_entities_1.DriversDallas)),
    __param(19, (0, typeorm_2.InjectRepository)(db_entities_1.EventDriverValidator)),
    __param(20, (0, typeorm_2.InjectRepository)(db_entities_1.MobileUnityDrivers)),
    __param(21, (0, typeorm_2.InjectRepository)(db_entities_2.CommandLog)),
    __param(22, (0, typeorm_2.InjectRepository)(db_entities_2.CommandPending)),
    __param(23, (0, typeorm_2.InjectRepository)(db_entities_2.CommandsList)),
    __param(24, (0, typeorm_2.InjectRepository)(db_entities_2.CommandsTosend)),
    __param(25, (0, typeorm_2.InjectRepository)(db_entities_3.Alerts)),
    __param(26, (0, typeorm_2.InjectRepository)(db_entities_3.CentralAlerts)),
    __param(27, (0, typeorm_2.InjectRepository)(db_entities_3.CentralSilencedAlerts)),
    __param(28, (0, typeorm_2.InjectRepository)(db_entities_3.Novelties)),
    __param(29, (0, typeorm_2.InjectRepository)(db_entities_3.NoveltyTypes)),
    __param(30, (0, typeorm_2.InjectRepository)(db_entities_4.CarrerasCalles)),
    __param(31, (0, typeorm_2.InjectRepository)(db_entities_4.Cities)),
    __param(32, (0, typeorm_2.InjectRepository)(db_entities_4.Departments)),
    __param(33, (0, typeorm_2.InjectRepository)(db_entities_4.Directions)),
    __param(34, (0, typeorm_2.InjectRepository)(db_entities_4.GeographicalEvents)),
    __param(35, (0, typeorm_2.InjectRepository)(db_entities_4.GeographicalResources)),
    __param(36, (0, typeorm_2.InjectRepository)(db_entities_4.Municipios)),
    __param(37, (0, typeorm_2.InjectRepository)(db_entities_4.Rutograma)),
    __param(38, (0, typeorm_2.InjectRepository)(db_entities_5.MobileUnities)),
    __param(39, (0, typeorm_2.InjectRepository)(db_entities_5.MobileUnityDallasKeys)),
    __param(40, (0, typeorm_2.InjectRepository)(db_entities_5.MobileUnityDriver)),
    __param(41, (0, typeorm_2.InjectRepository)(db_entities_5.MobileUnityGroups)),
    __param(42, (0, typeorm_2.InjectRepository)(db_entities_5.ShareTracking)),
    __param(43, (0, typeorm_2.InjectRepository)(db_entities_5.HabitosConduccion)),
    __param(44, (0, typeorm_2.InjectRepository)(db_entities_5.MobileUnityAlerts)),
    __param(45, (0, typeorm_2.InjectRepository)(db_entities_5.MobileUnityEvents)),
    __param(46, (0, typeorm_2.InjectRepository)(db_entities_5.MobileUnityLastEvents)),
    __param(47, (0, typeorm_2.InjectRepository)(db_entities_5.NotificationUnity)),
    __param(48, (0, typeorm_2.InjectRepository)(db_entities_5.Preoperacional)),
    __param(49, (0, typeorm_2.InjectRepository)(db_entities_6.GeographicalResourceNotification)),
    __param(50, (0, typeorm_2.InjectRepository)(db_entities_6.GeographicalResourcesNotifications)),
    __param(51, (0, typeorm_2.InjectRepository)(db_entities_6.MobileUnityEventType)),
    __param(52, (0, typeorm_2.InjectRepository)(db_entities_6.Notifications)),
    __param(53, (0, typeorm_2.InjectRepository)(db_entities_6.UserNotifications)),
    __param(54, (0, typeorm_2.InjectRepository)(db_entities_7.FormStructureCustomer)),
    __param(55, (0, typeorm_2.InjectRepository)(db_entities_7.FuelConsumption)),
    __param(56, (0, typeorm_2.InjectRepository)(db_entities_7.ScheduledReports)),
    __param(57, (0, typeorm_2.InjectRepository)(db_entities_7.SharePreoperational)),
    __param(58, (0, typeorm_2.InjectRepository)(db_entities_7.TemporalWorks)),
    __param(59, (0, typeorm_2.InjectRepository)(db_entities_7.Works)),
    __param(60, (0, typeorm_2.InjectRepository)(db_entities_8.Parameters)),
    __param(61, (0, typeorm_2.InjectRepository)(db_entities_8.WebserviceBrand)),
    __param(62, (0, typeorm_2.InjectRepository)(db_entities_8.WebserviceLine)),
    __param(63, (0, typeorm_2.InjectRepository)(db_entities_8.WebserviceLogs)),
    __param(64, (0, typeorm_2.InjectRepository)(db_entities_8.WebserviceTypeMobileUnity)),
    __param(65, (0, typeorm_2.InjectRepository)(db_entities_8.Consultants)),
    __param(66, (0, typeorm_2.InjectRepository)(db_entities_8.DocumentTypes)),
    __param(67, (0, typeorm_2.InjectRepository)(db_entities_8.ModelHasPermissions)),
    __param(68, (0, typeorm_2.InjectRepository)(db_entities_8.ModelHasRoles)),
    __param(69, (0, typeorm_2.InjectRepository)(db_entities_8.Permissions)),
    __param(70, (0, typeorm_2.InjectRepository)(db_entities_8.RoleHasPermissions)),
    __param(71, (0, typeorm_2.InjectRepository)(db_entities_8.Roles)),
    __param(72, (0, typeorm_2.InjectRepository)(db_entities_8.Templates)),
    __param(73, (0, typeorm_2.InjectRepository)(db_entities_8.UserEmailTemplates)),
    __param(74, (0, typeorm_2.InjectRepository)(db_entities_8.UserScheduledEmails)),
    __param(75, (0, typeorm_2.InjectRepository)(db_entities_8.MobileUnityBrands)),
    __param(76, (0, typeorm_2.InjectRepository)(db_entities_8.MobileUnityClass)),
    __param(77, (0, typeorm_2.InjectRepository)(db_entities_8.MobileUnityLine)),
    __param(78, (0, typeorm_2.InjectRepository)(db_entities_8.MobileUnityStatus)),
    __param(79, (0, typeorm_2.InjectRepository)(db_entities_8.MobileUnityStatusHistory)),
    __param(80, (0, typeorm_2.InjectRepository)(db_entities_8.MobileUnitySubclass)),
    __param(81, (0, typeorm_2.InjectRepository)(db_entities_8.MobileUnityType)),
    __param(82, (0, typeorm_2.InjectRepository)(db_entities_8.EventTypes)),
    __param(83, (0, typeorm_2.InjectRepository)(db_entities_8.Logs)),
    __param(84, (0, typeorm_2.InjectRepository)(db_entities_8.Plans)),
    __param(85, (0, typeorm_2.InjectRepository)(db_entities_8.SimcardLogs)),
    __param(86, (0, typeorm_2.InjectRepository)(db_entities_8.SimcardPlan)),
    __param(87, (0, typeorm_2.InjectRepository)(db_entities_8.Simcards)),
    __metadata("design:paramtypes", [core_1.ModuleRef,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], DynamicEntityService);
exports.DynamicEntityServiceConstructor = DynamicEntityService;
//# sourceMappingURL=dynamicConstructor.service.js.map