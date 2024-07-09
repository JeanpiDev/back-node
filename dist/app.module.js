"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const db_modules_1 = require("./modules/database/db.modules");
const db_service_1 = require("./modules/database/db.service");
const typeorm_1 = require("@nestjs/typeorm");
const db_entities_1 = require("./modules/database/db.entities/db.entities");
const db_entities_2 = require("./modules/database/db.entities/db.entities");
const db_entities_3 = require("./modules/database/db.entities/db.entities");
const db_entities_4 = require("./modules/database/db.entities/db.entities");
const schedule_1 = require("@nestjs/schedule");
const schedule_service_1 = require("./modules/comandos/schedule.service");
const db_entities_5 = require("./modules/database/db.entities/db.entities");
const db_entities_6 = require("./modules/database/db.entities/db.entities");
const db_entities_7 = require("./modules/database/db.entities/db.entities");
const db_entities_8 = require("./modules/database/db.entities/db.entities");
const db_service_2 = require("./modules/database/db.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            db_modules_1.DatabaseModule,
            db_modules_1.CustomerModule,
            schedule_1.ScheduleModule.forRoot(),
            db_modules_1.ReportsModule,
            typeorm_1.TypeOrmModule.forFeature([db_entities_1.Customers, db_entities_1.Users, db_entities_1.ContactTypes, db_entities_1.ContactsEmergency, db_entities_1.DriversDallas, db_entities_1.CustomersBlocked, db_entities_1.Contacts, db_entities_1.UsersTypes, db_entities_1.EventDriverValidator, db_entities_1.MobileUnityDrivers, db_entities_2.Brands, db_entities_2.DevicePlotDeviceType, db_entities_2.Devices, db_entities_2.DevicePlotHeaderTypes, db_entities_2.DevicePlotHeaders, db_entities_2.DevicePlots, db_entities_2.DeviceTests, db_entities_2.DeviceTypeCommands, db_entities_2.DeviceTypes, db_entities_2.DeviceUser, db_entities_2.CommandLog, db_entities_2.CommandPending, db_entities_2.CommandsList, db_entities_2.CommandsTosend, db_entities_3.Alerts, db_entities_3.CentralAlerts, db_entities_3.CentralSilencedAlerts, db_entities_3.Novelties, db_entities_3.NoveltyTypes, db_entities_4.CarrerasCalles, db_entities_4.Cities, db_entities_4.Departments, db_entities_4.Directions, db_entities_4.GeographicalEvents, db_entities_4.GeographicalResources, db_entities_4.Municipios, db_entities_4.Rutograma, db_entities_5.MobileUnities, db_entities_5.MobileUnityDallasKeys, db_entities_5.MobileUnityDriver, db_entities_5.MobileUnityGroups, db_entities_5.ShareTracking, db_entities_5.HabitosConduccion, db_entities_5.MobileUnityAlerts, db_entities_5.MobileUnityEvents, db_entities_5.MobileUnityLastEvents, db_entities_5.NotificationUnity, db_entities_5.Preoperacional, db_entities_6.GeographicalResourceNotification, db_entities_6.GeographicalResourcesNotifications, db_entities_6.MobileUnityEventType, db_entities_6.Notifications, db_entities_6.UserNotifications, db_entities_7.FormStructureCustomer, db_entities_7.FuelConsumption, db_entities_7.ScheduledReports, db_entities_7.SharePreoperational, db_entities_7.TemporalWorks, db_entities_7.Works, db_entities_8.Parameters, db_entities_8.WebserviceBrand, db_entities_8.WebserviceLine, db_entities_8.WebserviceLogs, db_entities_8.WebserviceTypeMobileUnity, db_entities_8.Consultants, db_entities_8.DocumentTypes, db_entities_8.ModelHasPermissions, db_entities_8.ModelHasRoles, db_entities_8.Permissions, db_entities_8.RoleHasPermissions, db_entities_8.Roles, db_entities_8.Templates, db_entities_8.UserEmailTemplates, db_entities_8.UserScheduledEmails, db_entities_8.MobileUnityBrands, db_entities_8.MobileUnityClass, db_entities_8.MobileUnityLine, db_entities_8.MobileUnityStatus, db_entities_8.MobileUnityStatusHistory, db_entities_8.MobileUnitySubclass, db_entities_8.MobileUnityType, db_entities_8.EventTypes, db_entities_8.Logs, db_entities_8.Plans, db_entities_8.SimcardLogs, db_entities_8.SimcardPlan, db_entities_8.Simcards]),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, schedule_service_1.SchedulerService, db_service_1.DynamicEntityService, db_entities_7.FuelConsumption, db_service_2.ReportsService, db_service_1.Registry, db_service_2.EventsService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map