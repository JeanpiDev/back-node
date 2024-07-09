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
exports.TemporalWorks = void 0;
const typeorm_1 = require("typeorm");
let TemporalWorks = class TemporalWorks {
};
exports.TemporalWorks = TemporalWorks;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], TemporalWorks.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "unity_id", nullable: true }),
    __metadata("design:type", Number)
], TemporalWorks.prototype, "unityId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "event_type", nullable: true }),
    __metadata("design:type", Number)
], TemporalWorks.prototype, "eventType", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "addres", nullable: true, length: 255 }),
    __metadata("design:type", String)
], TemporalWorks.prototype, "addres", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", {
        name: "mileage",
        nullable: true,
        precision: 53,
    }),
    __metadata("design:type", Number)
], TemporalWorks.prototype, "mileage", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "device_date_hour",
        nullable: true,
    }),
    __metadata("design:type", Date)
], TemporalWorks.prototype, "deviceDateHour", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "id_mobile_unities", nullable: true }),
    __metadata("design:type", Number)
], TemporalWorks.prototype, "idMobileUnities", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", {
        name: "velocity",
        nullable: true,
        precision: 53,
    }),
    __metadata("design:type", Number)
], TemporalWorks.prototype, "velocity", void 0);
exports.TemporalWorks = TemporalWorks = __decorate([
    (0, typeorm_1.Index)("temporal_works_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("temporal_works", { schema: "public" })
], TemporalWorks);
//# sourceMappingURL=TemporalWorks.entity.js.map