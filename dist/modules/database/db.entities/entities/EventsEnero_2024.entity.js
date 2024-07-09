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
exports.EventsEnero_2024 = void 0;
const typeorm_1 = require("typeorm");
let EventsEnero_2024 = class EventsEnero_2024 {
};
exports.EventsEnero_2024 = EventsEnero_2024;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], EventsEnero_2024.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "device_plot_header_type_id", nullable: true }),
    __metadata("design:type", Number)
], EventsEnero_2024.prototype, "devicePlotHeaderTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "unity_id" }),
    __metadata("design:type", Number)
], EventsEnero_2024.prototype, "unityId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "event_type_id", nullable: true }),
    __metadata("design:type", Number)
], EventsEnero_2024.prototype, "eventTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "event",
        nullable: true,
        length: 120,
        default: () => "NULL::character varying",
    }),
    __metadata("design:type", String)
], EventsEnero_2024.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "event_type",
        nullable: true,
        length: 120,
        default: () => "NULL::character varying",
    }),
    __metadata("design:type", String)
], EventsEnero_2024.prototype, "eventType", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "location",
        nullable: true,
        length: 45,
        default: () => "NULL::character varying",
    }),
    __metadata("design:type", String)
], EventsEnero_2024.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "address",
        nullable: true,
        length: 255,
        default: () => "NULL::character varying",
    }),
    __metadata("design:type", String)
], EventsEnero_2024.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", {
        name: "velocity",
        nullable: true,
        precision: 53,
    }),
    __metadata("design:type", Number)
], EventsEnero_2024.prototype, "velocity", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "server_date_hour",
        nullable: true,
    }),
    __metadata("design:type", Date)
], EventsEnero_2024.prototype, "serverDateHour", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        primary: true,
        name: "device_date_hour",
    }),
    __metadata("design:type", Date)
], EventsEnero_2024.prototype, "deviceDateHour", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "plot",
        nullable: true,
        length: 500,
        default: () => "NULL::character varying",
    }),
    __metadata("design:type", String)
], EventsEnero_2024.prototype, "plot", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", {
        name: "reported",
        nullable: true,
        default: () => "'0'",
    }),
    __metadata("design:type", Number)
], EventsEnero_2024.prototype, "reported", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "notified", default: () => "'0'" }),
    __metadata("design:type", Number)
], EventsEnero_2024.prototype, "notified", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "push_notified", default: () => "'0'" }),
    __metadata("design:type", Number)
], EventsEnero_2024.prototype, "pushNotified", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "mileage",
        nullable: true,
        length: 155,
        default: () => "NULL::character varying",
    }),
    __metadata("design:type", String)
], EventsEnero_2024.prototype, "mileage", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", default: () => "'1'" }),
    __metadata("design:type", Number)
], EventsEnero_2024.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "battery", nullable: true, default: () => "100" }),
    __metadata("design:type", Number)
], EventsEnero_2024.prototype, "battery", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "degree", default: () => "'0'" }),
    __metadata("design:type", Number)
], EventsEnero_2024.prototype, "degree", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "geofences_id", nullable: true }),
    __metadata("design:type", Number)
], EventsEnero_2024.prototype, "geofencesId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], EventsEnero_2024.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], EventsEnero_2024.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "fix", nullable: true, default: () => "'1'" }),
    __metadata("design:type", Number)
], EventsEnero_2024.prototype, "fix", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", {
        name: "hourwork",
        nullable: true,
        default: () => "'0'",
    }),
    __metadata("design:type", Number)
], EventsEnero_2024.prototype, "hourwork", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "temperature", nullable: true }),
    __metadata("design:type", String)
], EventsEnero_2024.prototype, "temperature", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "id_driver", nullable: true }),
    __metadata("design:type", Number)
], EventsEnero_2024.prototype, "idDriver", void 0);
exports.EventsEnero_2024 = EventsEnero_2024 = __decorate([
    (0, typeorm_1.Index)("events_enero_2024_pkey", ["deviceDateHour", "id"], { unique: true }),
    (0, typeorm_1.Index)("events_enero_2024_device_date_hour_idx", ["deviceDateHour"], {}),
    (0, typeorm_1.Index)("events_enero_2024_event_type_id_idx", ["eventTypeId"], {}),
    (0, typeorm_1.Index)("events_enero_2024_id_driver_idx", ["idDriver"], {}),
    (0, typeorm_1.Index)("events_enero_2024_unity_id_idx", ["unityId"], {}),
    (0, typeorm_1.Entity)("events_enero_2024", { schema: "public" })
], EventsEnero_2024);
//# sourceMappingURL=EventsEnero_2024.entity.js.map