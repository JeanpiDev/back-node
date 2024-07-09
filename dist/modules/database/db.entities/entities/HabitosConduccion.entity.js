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
exports.HabitosConduccion = void 0;
const typeorm_1 = require("typeorm");
const EventTypes_entity_1 = require("./EventTypes.entity");
const MobileUnities_entity_1 = require("./MobileUnities.entity");
let HabitosConduccion = class HabitosConduccion {
};
exports.HabitosConduccion = HabitosConduccion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], HabitosConduccion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id_event" }),
    __metadata("design:type", Number)
], HabitosConduccion.prototype, "idEvent", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "server_date_hour" }),
    __metadata("design:type", Date)
], HabitosConduccion.prototype, "serverDateHour", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "device_date_hour" }),
    __metadata("design:type", Date)
], HabitosConduccion.prototype, "deviceDateHour", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "direccion",
        nullable: true,
        length: 500,
        default: () => "NULL::character varying",
    }),
    __metadata("design:type", String)
], HabitosConduccion.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", {
        name: "velocity",
        nullable: true,
        precision: 53,
    }),
    __metadata("design:type", Number)
], HabitosConduccion.prototype, "velocity", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "course",
        nullable: true,
        length: 30,
        default: () => "NULL::character varying",
    }),
    __metadata("design:type", String)
], HabitosConduccion.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "battery", nullable: true }),
    __metadata("design:type", Number)
], HabitosConduccion.prototype, "battery", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "mileage",
        nullable: true,
        length: 155,
        default: () => "NULL::character varying",
    }),
    __metadata("design:type", String)
], HabitosConduccion.prototype, "mileage", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], HabitosConduccion.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], HabitosConduccion.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => EventTypes_entity_1.EventTypes, (eventTypes) => eventTypes.habitosConduccions),
    (0, typeorm_1.JoinColumn)([{ name: "event_type_id", referencedColumnName: "id" }]),
    __metadata("design:type", EventTypes_entity_1.EventTypes)
], HabitosConduccion.prototype, "eventType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => MobileUnities_entity_1.MobileUnities, (mobileUnities) => mobileUnities.habitosConduccions),
    (0, typeorm_1.JoinColumn)([{ name: "unity_id", referencedColumnName: "id" }]),
    __metadata("design:type", MobileUnities_entity_1.MobileUnities)
], HabitosConduccion.prototype, "unity", void 0);
exports.HabitosConduccion = HabitosConduccion = __decorate([
    (0, typeorm_1.Index)("hb_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("habitos_conduccion", { schema: "public" })
], HabitosConduccion);
//# sourceMappingURL=HabitosConduccion.entity.js.map