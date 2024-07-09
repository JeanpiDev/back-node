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
exports.DevicePlotDeviceType = void 0;
const typeorm_1 = require("typeorm");
const DevicePlots_entity_1 = require("./DevicePlots.entity");
const DeviceTypes_entity_1 = require("./DeviceTypes.entity");
const EventTypes_entity_1 = require("./EventTypes.entity");
let DevicePlotDeviceType = class DevicePlotDeviceType {
};
exports.DevicePlotDeviceType = DevicePlotDeviceType;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], DevicePlotDeviceType.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "device_type_id" }),
    __metadata("design:type", Number)
], DevicePlotDeviceType.prototype, "deviceTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "device_plot_id" }),
    __metadata("design:type", Number)
], DevicePlotDeviceType.prototype, "devicePlotId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "key", nullable: true, length: 80 }),
    __metadata("design:type", String)
], DevicePlotDeviceType.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", nullable: true, length: 80 }),
    __metadata("design:type", String)
], DevicePlotDeviceType.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "imei_position", nullable: true }),
    __metadata("design:type", Number)
], DevicePlotDeviceType.prototype, "imeiPosition", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DevicePlots_entity_1.DevicePlots, (devicePlots) => devicePlots.devicePlotDeviceTypes),
    (0, typeorm_1.JoinColumn)([{ name: "device_plot_id", referencedColumnName: "id" }]),
    __metadata("design:type", DevicePlots_entity_1.DevicePlots)
], DevicePlotDeviceType.prototype, "devicePlot", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DeviceTypes_entity_1.DeviceTypes, (deviceTypes) => deviceTypes.devicePlotDeviceTypes),
    (0, typeorm_1.JoinColumn)([{ name: "device_type_id", referencedColumnName: "id" }]),
    __metadata("design:type", DeviceTypes_entity_1.DeviceTypes)
], DevicePlotDeviceType.prototype, "deviceType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => EventTypes_entity_1.EventTypes, (eventTypes) => eventTypes.devicePlotDeviceTypes),
    (0, typeorm_1.JoinColumn)([{ name: "event_type_id", referencedColumnName: "id" }]),
    __metadata("design:type", EventTypes_entity_1.EventTypes)
], DevicePlotDeviceType.prototype, "eventType", void 0);
exports.DevicePlotDeviceType = DevicePlotDeviceType = __decorate([
    (0, typeorm_1.Index)("idxdevice_plot_device_type_device_plot_id", ["devicePlotId"], {}),
    (0, typeorm_1.Index)("idxdevice_plot_device_type_device_type_id", ["deviceTypeId"], {}),
    (0, typeorm_1.Index)("device_plot_device_type_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("device_plot_device_type", { schema: "public" })
], DevicePlotDeviceType);
//# sourceMappingURL=DevicePlotDeviceType.entity.js.map