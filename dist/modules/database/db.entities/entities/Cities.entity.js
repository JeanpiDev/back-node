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
exports.Cities = void 0;
const typeorm_1 = require("typeorm");
const Departments_entity_1 = require("./Departments.entity");
const Customers_entity_1 = require("./Customers.entity");
const DriversDallas_entity_1 = require("./DriversDallas.entity");
const MobileUnities_entity_1 = require("./MobileUnities.entity");
const MobileUnityDrivers_entity_1 = require("./MobileUnityDrivers.entity");
let Cities = class Cities {
};
exports.Cities = Cities;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Cities.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "department_id" }),
    __metadata("design:type", Number)
], Cities.prototype, "departmentId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", length: 45 }),
    __metadata("design:type", String)
], Cities.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Departments_entity_1.Departments, (departments) => departments.cities),
    (0, typeorm_1.JoinColumn)([{ name: "department_id", referencedColumnName: "id" }]),
    __metadata("design:type", Departments_entity_1.Departments)
], Cities.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Customers_entity_1.Customers, (customers) => customers.city),
    __metadata("design:type", Array)
], Cities.prototype, "customers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DriversDallas_entity_1.DriversDallas, (driversDallas) => driversDallas.city),
    __metadata("design:type", Array)
], Cities.prototype, "driversDallas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MobileUnities_entity_1.MobileUnities, (mobileUnities) => mobileUnities.city),
    __metadata("design:type", Array)
], Cities.prototype, "mobileUnities", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MobileUnityDrivers_entity_1.MobileUnityDrivers, (mobileUnityDrivers) => mobileUnityDrivers.city),
    __metadata("design:type", Array)
], Cities.prototype, "mobileUnityDrivers", void 0);
exports.Cities = Cities = __decorate([
    (0, typeorm_1.Index)("idxcities_department_id", ["departmentId"], {}),
    (0, typeorm_1.Index)("cities_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("cities", { schema: "public" })
], Cities);
//# sourceMappingURL=Cities.entity.js.map