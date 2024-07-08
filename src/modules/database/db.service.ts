/* eslint-disable prettier/prettier */
//CONFIG
export { DatabaseService } from './database.service';
export { SchedulerService } from './../comandos/schedule.service';
export { DynamicEntityService } from './db.entities/dynamicentity.service';
export { Registry } from  './db.entities/registry.service';

//CUSTOMERS
export { CustomerService } from '../m1_customers/customers/customers.service';
export { UsersService } from '../m1_customers/users/users.service';
export { ContactsService } from '../m1_customers/contact/contact.service';

//DEVICES
export { DevicesSerice } from '../m2_devices/devices/devices.service';
export { CommandService } from '../m2_devices/command/command.service';

//CENTRALALERTS
export { CentralAlertsService } from '../m4_centralAlerts/m4_centralAlerts.service';

//MAP
export { MapService } from '../m5_map/m5_map.service';

//MOBILE UNITIES
export { MobileUnitiesService, } from '../m6_mobileUnity/mobileUnities/mobileUnities.service';
export { EventsService } from '../m6_mobileUnity/events/events.service';

//Notification
export { NotificationsService } from '../m7_notification/m7_notification.service';

//REPORTS
export { ReportsService } from '../m8_reports/m8_reports.service';

//ADMINISTRACION
export { EventTypesService,LogsService,PlansService,SimcardLogsService,SimcardPlanService,SimcardsService } from '../m3_admin/deviceConfig/deviceConfig.service';
export { MobileUnityBrandsService,MobileUnityClassService,MobileUnityLineService,MobileUnityStatusService,MobileUnityStatusHistoryService,MobileUnitySubclassService,MobileUnityTypeService } from '../m3_admin/mobileUnitiesConfig/mobileUnitiesConfig.service';
export { TemplatesService,UserEmailTemplatesService,UserScheduledEmailsService } from '../m3_admin/template/template.service';
export { ConsultantsService,DocumentTypesService,ModelHasPermissionsService,ModelHasRolesService,PermissionsService,RoleHasPermissionsService,RolesService } from '../m3_admin/userConfig/userConfig.service';
export { ParametersService,WebserviceBrandService,WebserviceLineService,WebserviceLogsService,WebserviceTypeMobileUnityService } from '../m3_admin/webservices/webservices.service';
