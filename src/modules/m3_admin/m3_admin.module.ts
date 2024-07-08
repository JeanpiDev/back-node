/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { EventTypesService,LogsService,PlansService,SimcardLogsService,SimcardPlanService,SimcardsService,MobileUnityBrandsService,MobileUnityClassService,MobileUnityLineService,MobileUnityStatusService,MobileUnityStatusHistoryService,MobileUnitySubclassService,MobileUnityTypeService,TemplatesService,UserEmailTemplatesService,UserScheduledEmailsService,ConsultantsService,DocumentTypesService,ModelHasPermissionsService,ModelHasRolesService,PermissionsService,RoleHasPermissionsService,RolesService,ParametersService,WebserviceBrandService,WebserviceLineService,WebserviceLogsService,WebserviceTypeMobileUnityService } from '../database/db.service';

import { AdminController } from '../database/db.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parameters,WebserviceBrand,WebserviceLine,WebserviceLogs,WebserviceTypeMobileUnity,Consultants,DocumentTypes,ModelHasPermissions,ModelHasRoles,Permissions,RoleHasPermissions,Roles,Templates,UserEmailTemplates,UserScheduledEmails,MobileUnityBrands,MobileUnityClass,MobileUnityLine,MobileUnityStatus,MobileUnityStatusHistory,MobileUnitySubclass,MobileUnityType,EventTypes,Logs,Plans,SimcardLogs,SimcardPlan,Simcards } from '../database/db.entities/db.entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Parameters,WebserviceBrand,WebserviceLine,WebserviceLogs,WebserviceTypeMobileUnity,Consultants,DocumentTypes,ModelHasPermissions,ModelHasRoles,Permissions,RoleHasPermissions,Roles,Templates,UserEmailTemplates,UserScheduledEmails,MobileUnityBrands,MobileUnityClass,MobileUnityLine,MobileUnityStatus,MobileUnityStatusHistory,MobileUnitySubclass,MobileUnityType,EventTypes,Logs,Plans,SimcardLogs,SimcardPlan,Simcards
    ])
  ],
  providers: [
    EventTypesService,LogsService,PlansService,SimcardLogsService,SimcardPlanService,SimcardsService,MobileUnityBrandsService,MobileUnityClassService,MobileUnityLineService,MobileUnityStatusService,MobileUnityStatusHistoryService,MobileUnitySubclassService,MobileUnityTypeService,TemplatesService,UserEmailTemplatesService,UserScheduledEmailsService,ConsultantsService,DocumentTypesService,ModelHasPermissionsService,ModelHasRolesService,PermissionsService,RoleHasPermissionsService,RolesService,ParametersService,WebserviceBrandService,WebserviceLineService,WebserviceLogsService,WebserviceTypeMobileUnityService
  ],
  controllers: [
    AdminController
  ],
  exports: [
    EventTypesService,LogsService,PlansService,SimcardLogsService,SimcardPlanService,SimcardsService,MobileUnityBrandsService,MobileUnityClassService,MobileUnityLineService,MobileUnityStatusService,MobileUnityStatusHistoryService,MobileUnitySubclassService,MobileUnityTypeService,TemplatesService,UserEmailTemplatesService,UserScheduledEmailsService,ConsultantsService,DocumentTypesService,ModelHasPermissionsService,ModelHasRolesService,PermissionsService,RoleHasPermissionsService,RolesService,ParametersService,WebserviceBrandService,WebserviceLineService,WebserviceLogsService,WebserviceTypeMobileUnityService
  ]
})
export class AdminModule {}