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
exports.EventTypes = void 0;
const typeorm_1 = require("typeorm");
const DevicePlotDeviceType_entity_1 = require("./DevicePlotDeviceType.entity");
const HabitosConduccion_entity_1 = require("./HabitosConduccion.entity");
const MobileUnityEventType_entity_1 = require("./MobileUnityEventType.entity");
const NoveltyTypes_entity_1 = require("./NoveltyTypes.entity");
let EventTypes = class EventTypes {
};
exports.EventTypes = EventTypes;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], EventTypes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "name",
        length: 200,
        default: () => "'1'",
    }),
    __metadata("design:type", String)
], EventTypes.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status" }),
    __metadata("design:type", Number)
], EventTypes.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "color",
        length: 155,
        default: () => "'#FFF'",
    }),
    __metadata("design:type", String)
], EventTypes.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "central_monitoring", default: () => "1" }),
    __metadata("design:type", Number)
], EventTypes.prototype, "centralMonitoring", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "visible_in_app", default: () => "0" }),
    __metadata("design:type", Number)
], EventTypes.prototype, "visibleInApp", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "code_ws", nullable: true }),
    __metadata("design:type", Number)
], EventTypes.prototype, "codeWs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DevicePlotDeviceType_entity_1.DevicePlotDeviceType, (devicePlotDeviceType) => devicePlotDeviceType.eventType),
    __metadata("design:type", Array)
], EventTypes.prototype, "devicePlotDeviceTypes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => HabitosConduccion_entity_1.HabitosConduccion, (habitosConduccion) => habitosConduccion.eventType),
    __metadata("design:type", Array)
], EventTypes.prototype, "habitosConduccions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MobileUnityEventType_entity_1.MobileUnityEventType, (mobileUnityEventType) => mobileUnityEventType.eventType),
    __metadata("design:type", Array)
], EventTypes.prototype, "mobileUnityEventTypes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => NoveltyTypes_entity_1.NoveltyTypes, (noveltyTypes) => noveltyTypes.eventType),
    __metadata("design:type", Array)
], EventTypes.prototype, "noveltyTypes", void 0);
exports.EventTypes = EventTypes = __decorate([
    (0, typeorm_1.Index)("event_types_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("event_types", { schema: "public" })
], EventTypes);
//# sourceMappingURL=EventTypes.entity.js.map