"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevicesModule = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("./../database/db.service");
const db_controller_1 = require("./../database/db.controller");
const typeorm_1 = require("@nestjs/typeorm");
const db_entities_1 = require("../database/db.entities/db.entities");
let DevicesModule = class DevicesModule {
};
exports.DevicesModule = DevicesModule;
exports.DevicesModule = DevicesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                db_entities_1.Brands, db_entities_1.DevicePlotDeviceType, db_entities_1.Devices, db_entities_1.DevicePlotHeaderTypes, db_entities_1.DevicePlotHeaders, db_entities_1.DevicePlots, db_entities_1.DeviceTests, db_entities_1.DeviceTypeCommands, db_entities_1.DeviceTypes, db_entities_1.DeviceUser, db_entities_1.CommandLog, db_entities_1.CommandPending, db_entities_1.CommandsList, db_entities_1.CommandsTosend
            ])
        ],
        providers: [
            db_service_1.DevicesSerice, db_service_1.CommandService
        ],
        controllers: [
            db_controller_1.DevicesController
        ],
        exports: [
            db_service_1.DevicesSerice, db_service_1.CommandService
        ]
    })
], DevicesModule);
//# sourceMappingURL=m2_devices.module.js.map