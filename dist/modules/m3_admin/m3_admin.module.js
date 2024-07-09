"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../database/db.service");
const db_controller_1 = require("../database/db.controller");
const typeorm_1 = require("@nestjs/typeorm");
const db_entities_1 = require("../database/db.entities/db.entities");
let AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule;
exports.AdminModule = AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                db_entities_1.Parameters, db_entities_1.WebserviceBrand, db_entities_1.WebserviceLine, db_entities_1.WebserviceLogs, db_entities_1.WebserviceTypeMobileUnity, db_entities_1.Consultants, db_entities_1.DocumentTypes, db_entities_1.ModelHasPermissions, db_entities_1.ModelHasRoles, db_entities_1.Permissions, db_entities_1.RoleHasPermissions, db_entities_1.Roles, db_entities_1.Templates, db_entities_1.UserEmailTemplates, db_entities_1.UserScheduledEmails, db_entities_1.MobileUnityBrands, db_entities_1.MobileUnityClass, db_entities_1.MobileUnityLine, db_entities_1.MobileUnityStatus, db_entities_1.MobileUnityStatusHistory, db_entities_1.MobileUnitySubclass, db_entities_1.MobileUnityType, db_entities_1.EventTypes, db_entities_1.Logs, db_entities_1.Plans, db_entities_1.SimcardLogs, db_entities_1.SimcardPlan, db_entities_1.Simcards
            ])
        ],
        providers: [
            db_service_1.EventTypesService, db_service_1.LogsService, db_service_1.PlansService, db_service_1.SimcardLogsService, db_service_1.SimcardPlanService, db_service_1.SimcardsService, db_service_1.MobileUnityBrandsService, db_service_1.MobileUnityClassService, db_service_1.MobileUnityLineService, db_service_1.MobileUnityStatusService, db_service_1.MobileUnityStatusHistoryService, db_service_1.MobileUnitySubclassService, db_service_1.MobileUnityTypeService, db_service_1.TemplatesService, db_service_1.UserEmailTemplatesService, db_service_1.UserScheduledEmailsService, db_service_1.ConsultantsService, db_service_1.DocumentTypesService, db_service_1.ModelHasPermissionsService, db_service_1.ModelHasRolesService, db_service_1.PermissionsService, db_service_1.RoleHasPermissionsService, db_service_1.RolesService, db_service_1.ParametersService, db_service_1.WebserviceBrandService, db_service_1.WebserviceLineService, db_service_1.WebserviceLogsService, db_service_1.WebserviceTypeMobileUnityService
        ],
        controllers: [
            db_controller_1.AdminController
        ],
        exports: [
            db_service_1.EventTypesService, db_service_1.LogsService, db_service_1.PlansService, db_service_1.SimcardLogsService, db_service_1.SimcardPlanService, db_service_1.SimcardsService, db_service_1.MobileUnityBrandsService, db_service_1.MobileUnityClassService, db_service_1.MobileUnityLineService, db_service_1.MobileUnityStatusService, db_service_1.MobileUnityStatusHistoryService, db_service_1.MobileUnitySubclassService, db_service_1.MobileUnityTypeService, db_service_1.TemplatesService, db_service_1.UserEmailTemplatesService, db_service_1.UserScheduledEmailsService, db_service_1.ConsultantsService, db_service_1.DocumentTypesService, db_service_1.ModelHasPermissionsService, db_service_1.ModelHasRolesService, db_service_1.PermissionsService, db_service_1.RoleHasPermissionsService, db_service_1.RolesService, db_service_1.ParametersService, db_service_1.WebserviceBrandService, db_service_1.WebserviceLineService, db_service_1.WebserviceLogsService, db_service_1.WebserviceTypeMobileUnityService
        ]
    })
], AdminModule);
//# sourceMappingURL=m3_admin.module.js.map