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
exports.Brands = void 0;
const typeorm_1 = require("typeorm");
const DevicePlots_entity_1 = require("./DevicePlots.entity");
const DeviceTypes_entity_1 = require("./DeviceTypes.entity");
let Brands = class Brands {
};
exports.Brands = Brands;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Brands.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", length: 120 }),
    __metadata("design:type", String)
], Brands.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", default: () => "1" }),
    __metadata("design:type", Number)
], Brands.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], Brands.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Brands.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DevicePlots_entity_1.DevicePlots, (devicePlots) => devicePlots.brand),
    __metadata("design:type", Array)
], Brands.prototype, "devicePlots", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DeviceTypes_entity_1.DeviceTypes, (deviceTypes) => deviceTypes.brand),
    __metadata("design:type", Array)
], Brands.prototype, "deviceTypes", void 0);
exports.Brands = Brands = __decorate([
    (0, typeorm_1.Index)("brands_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("brands", { schema: "public" })
], Brands);
//# sourceMappingURL=Brands.entity.js.map