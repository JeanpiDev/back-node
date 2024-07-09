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
exports.FuelConsumption = void 0;
const typeorm_1 = require("typeorm");
let FuelConsumption = class FuelConsumption {
};
exports.FuelConsumption = FuelConsumption;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], FuelConsumption.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "unity_id" }),
    __metadata("design:type", Number)
], FuelConsumption.prototype, "unityId", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", {
        name: "fuel_quantity",
        nullable: true,
        precision: 53,
    }),
    __metadata("design:type", Number)
], FuelConsumption.prototype, "fuelQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", { name: "price", nullable: true, precision: 53 }),
    __metadata("design:type", Number)
], FuelConsumption.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", {
        name: "car_mileage",
        nullable: true,
        precision: 53,
    }),
    __metadata("design:type", Number)
], FuelConsumption.prototype, "carMileage", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "ruta", nullable: true, length: 50 }),
    __metadata("design:type", String)
], FuelConsumption.prototype, "ruta", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "created_at",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], FuelConsumption.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "updated_at",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], FuelConsumption.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", {
        name: "resultgal",
        nullable: true,
        precision: 53,
    }),
    __metadata("design:type", Number)
], FuelConsumption.prototype, "resultgal", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "resultkm", nullable: true }),
    __metadata("design:type", Number)
], FuelConsumption.prototype, "resultkm", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", {
        name: "rendimiento",
        nullable: true,
        precision: 53,
    }),
    __metadata("design:type", Number)
], FuelConsumption.prototype, "rendimiento", void 0);
exports.FuelConsumption = FuelConsumption = __decorate([
    (0, typeorm_1.Index)("fuel_consumption_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("fuel_consumption", { schema: "public" })
], FuelConsumption);
//# sourceMappingURL=FuelConsumption.entity.js.map