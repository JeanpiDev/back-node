"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileUnityModule = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../database/db.service");
const db_controller_1 = require("../database/db.controller");
const typeorm_1 = require("@nestjs/typeorm");
const db_entities_1 = require("../database/db.entities/db.entities");
let MobileUnityModule = class MobileUnityModule {
};
exports.MobileUnityModule = MobileUnityModule;
exports.MobileUnityModule = MobileUnityModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                db_entities_1.MobileUnities, db_entities_1.MobileUnityDallasKeys, db_entities_1.MobileUnityDriver, db_entities_1.MobileUnityGroups, db_entities_1.ShareTracking, db_entities_1.HabitosConduccion, db_entities_1.MobileUnityAlerts, db_entities_1.MobileUnityEvents, db_entities_1.MobileUnityLastEvents, db_entities_1.NotificationUnity, db_entities_1.Preoperacional
            ])
        ],
        providers: [
            db_service_1.MobileUnitiesService,
            db_service_1.EventsService,
            db_service_1.DynamicEntityService,
            db_service_1.Registry
        ],
        controllers: [
            db_controller_1.MobileUnitiesController
        ],
        exports: [
            db_service_1.MobileUnitiesService,
            db_service_1.EventsService
        ]
    })
], MobileUnityModule);
//# sourceMappingURL=m6_mobileUnity.module.js.map