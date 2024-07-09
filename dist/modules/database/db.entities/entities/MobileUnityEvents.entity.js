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
exports.MobileUnityEvents = void 0;
const typeorm_1 = require("typeorm");
let MobileUnityEvents = class MobileUnityEvents {
};
exports.MobileUnityEvents = MobileUnityEvents;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], MobileUnityEvents.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "device_plot_header_type_id", nullable: true }),
    __metadata("design:type", Number)
], MobileUnityEvents.prototype, "devicePlotHeaderTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "unity_id" }),
    __metadata("design:type", Number)
], MobileUnityEvents.prototype, "unityId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "event_type_id", nullable: true }),
    __metadata("design:type", Number)
], MobileUnityEvents.prototype, "eventTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "event",
        nullable: true,
        length: 120,
        default: () => "NULL::character varying",
    }),
    __metadata("design:type", String)
], MobileUnityEvents.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "event_type",
        nullable: true,
        length: 120,
        default: () => "NULL::character varying",
    }),
    __metadata("design:type", String)
], MobileUnityEvents.prototype, "eventType", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "location",
        nullable: true,
        length: 45,
        default: () => "NULL::character varying",
    }),
    __metadata("design:type", String)
], MobileUnityEvents.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "address",
        nullable: true,
        length: 255,
        default: () => "NULL::character varying",
    }),
    __metadata("design:type", String)
], MobileUnityEvents.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", {
        name: "velocity",
        nullable: true,
        precision: 53,
    }),
    __metadata("design:type", Number)
], MobileUnityEvents.prototype, "velocity", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "server_date_hour",
        nullable: true,
    }),
    __metadata("design:type", Date)
], MobileUnityEvents.prototype, "serverDateHour", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "device_date_hour" }),
    __metadata("design:type", Date)
], MobileUnityEvents.prototype, "deviceDateHour", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "plot",
        nullable: true,
        length: 500,
        default: () => "NULL::character varying",
    }),
    __metadata("design:type", String)
], MobileUnityEvents.prototype, "plot", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", {
        name: "reported",
        nullable: true,
        default: () => "'0'",
    }),
    __metadata("design:type", Number)
], MobileUnityEvents.prototype, "reported", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "notified", default: () => "'0'" }),
    __metadata("design:type", Number)
], MobileUnityEvents.prototype, "notified", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "push_notified", default: () => "'0'" }),
    __metadata("design:type", Number)
], MobileUnityEvents.prototype, "pushNotified", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "mileage",
        nullable: true,
        length: 155,
        default: () => "NULL::character varying",
    }),
    __metadata("design:type", String)
], MobileUnityEvents.prototype, "mileage", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", default: () => "'1'" }),
    __metadata("design:type", Number)
], MobileUnityEvents.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "battery", nullable: true, default: () => "100" }),
    __metadata("design:type", Number)
], MobileUnityEvents.prototype, "battery", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "degree", default: () => "'0'" }),
    __metadata("design:type", Number)
], MobileUnityEvents.prototype, "degree", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "geofences_id", nullable: true }),
    __metadata("design:type", Number)
], MobileUnityEvents.prototype, "geofencesId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], MobileUnityEvents.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], MobileUnityEvents.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "fix", nullable: true, default: () => "'1'" }),
    __metadata("design:type", Number)
], MobileUnityEvents.prototype, "fix", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", {
        name: "hourwork",
        nullable: true,
        default: () => "'0'",
    }),
    __metadata("design:type", Number)
], MobileUnityEvents.prototype, "hourwork", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "temperature", nullable: true }),
    __metadata("design:type", String)
], MobileUnityEvents.prototype, "temperature", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "id_driver", nullable: true }),
    __metadata("design:type", Number)
], MobileUnityEvents.prototype, "idDriver", void 0);
exports.MobileUnityEvents = MobileUnityEvents = __decorate([
    (0, typeorm_1.Entity)("mobile_unity_events", { schema: "public" })
], MobileUnityEvents);
//# sourceMappingURL=MobileUnityEvents.entity.js.map