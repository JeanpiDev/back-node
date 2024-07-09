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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceTypes = void 0;
const typeorm_1 = require("typeorm");
const DevicePlotDeviceType_entity_1 = require("./DevicePlotDeviceType.entity");
const Brands_entity_1 = require("./Brands.entity");
const Variables_entity_1 = require("./Variables.entity");
const Devices_entity_1 = require("./Devices.entity");
let DeviceTypes = class DeviceTypes {
};
exports.DeviceTypes = DeviceTypes;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], DeviceTypes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "code", length: 45 }),
    __metadata("design:type", String)
], DeviceTypes.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", nullable: true }),
    __metadata("design:type", Number)
], DeviceTypes.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DevicePlotDeviceType_entity_1.DevicePlotDeviceType, (devicePlotDeviceType) => devicePlotDeviceType.deviceType),
    __metadata("design:type", Array)
], DeviceTypes.prototype, "devicePlotDeviceTypes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Brands_entity_1.Brands, (brands) => brands.deviceTypes),
    (0, typeorm_1.JoinColumn)([{ name: "brand_id", referencedColumnName: "id" }]),
    __metadata("design:type", Brands_entity_1.Brands)
], DeviceTypes.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Variables_entity_1.Variables, (variables) => variables.deviceTypes),
    (0, typeorm_1.JoinTable)({
        name: "device_variable",
        joinColumns: [{ name: "device_types_id", referencedColumnName: "id" }],
        inverseJoinColumns: [{ name: "variables_id", referencedColumnName: "id" }],
        schema: "public",
    }),
    __metadata("design:type", Array)
], DeviceTypes.prototype, "variables", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Devices_entity_1.Devices, (devices) => devices.deviceType),
    __metadata("design:type", Array)
], DeviceTypes.prototype, "devices", void 0);
exports.DeviceTypes = DeviceTypes = __decorate([
    (0, typeorm_1.Index)("device_types_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("device_types", { schema: "public" })
], DeviceTypes);
//# sourceMappingURL=DeviceTypes.entity.js.map