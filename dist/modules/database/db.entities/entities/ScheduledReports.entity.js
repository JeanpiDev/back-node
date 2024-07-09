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
exports.ScheduledReports = void 0;
const typeorm_1 = require("typeorm");
let ScheduledReports = class ScheduledReports {
};
exports.ScheduledReports = ScheduledReports;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], ScheduledReports.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "customer_id", nullable: true }),
    __metadata("design:type", Number)
], ScheduledReports.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "type_report",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], ScheduledReports.prototype, "typeReport", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "emails", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ScheduledReports.prototype, "emails", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "mobile_unities_ids",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], ScheduledReports.prototype, "mobileUnitiesIds", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "event_type_id",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], ScheduledReports.prototype, "eventTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "geofences_ids",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], ScheduledReports.prototype, "geofencesIds", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "to_see_how", nullable: true }),
    __metadata("design:type", Number)
], ScheduledReports.prototype, "toSeeHow", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "limited_velocity", nullable: true }),
    __metadata("design:type", Number)
], ScheduledReports.prototype, "limitedVelocity", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "periodicity", nullable: true }),
    __metadata("design:type", Number)
], ScheduledReports.prototype, "periodicity", void 0);
__decorate([
    (0, typeorm_1.Column)("interval", { name: "hour_send", nullable: true }),
    __metadata("design:type", Object)
], ScheduledReports.prototype, "hourSend", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ScheduledReports.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], ScheduledReports.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "status", nullable: true }),
    __metadata("design:type", Boolean)
], ScheduledReports.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "last_send", nullable: true }),
    __metadata("design:type", Date)
], ScheduledReports.prototype, "lastSend", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "send_date",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], ScheduledReports.prototype, "sendDate", void 0);
exports.ScheduledReports = ScheduledReports = __decorate([
    (0, typeorm_1.Index)("scheduled_reports_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("scheduled_reports", { schema: "public" })
], ScheduledReports);
//# sourceMappingURL=ScheduledReports.entity.js.map