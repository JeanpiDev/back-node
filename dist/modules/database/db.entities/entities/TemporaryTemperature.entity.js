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
exports.TemporaryTemperature = void 0;
const typeorm_1 = require("typeorm");
let TemporaryTemperature = class TemporaryTemperature {
};
exports.TemporaryTemperature = TemporaryTemperature;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], TemporaryTemperature.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "unity_id", nullable: true }),
    __metadata("design:type", Number)
], TemporaryTemperature.prototype, "unityId", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", {
        name: "temperature",
        nullable: true,
        precision: 53,
    }),
    __metadata("design:type", Number)
], TemporaryTemperature.prototype, "temperature", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "created_at",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], TemporaryTemperature.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "updated_at",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], TemporaryTemperature.prototype, "updatedAt", void 0);
exports.TemporaryTemperature = TemporaryTemperature = __decorate([
    (0, typeorm_1.Index)("temporary_temperature_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("temporary_temperature", { schema: "public" })
], TemporaryTemperature);
//# sourceMappingURL=TemporaryTemperature.entity.js.map