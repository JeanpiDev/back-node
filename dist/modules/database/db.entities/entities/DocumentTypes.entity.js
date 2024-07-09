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
exports.DocumentTypes = void 0;
const typeorm_1 = require("typeorm");
const Customers_entity_1 = require("./Customers.entity");
const DriversDallas_entity_1 = require("./DriversDallas.entity");
const MobileUnityDrivers_entity_1 = require("./MobileUnityDrivers.entity");
let DocumentTypes = class DocumentTypes {
};
exports.DocumentTypes = DocumentTypes;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], DocumentTypes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", length: 45 }),
    __metadata("design:type", String)
], DocumentTypes.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Customers_entity_1.Customers, (customers) => customers.documentType),
    __metadata("design:type", Array)
], DocumentTypes.prototype, "customers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DriversDallas_entity_1.DriversDallas, (driversDallas) => driversDallas.documentType),
    __metadata("design:type", Array)
], DocumentTypes.prototype, "driversDallas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MobileUnityDrivers_entity_1.MobileUnityDrivers, (mobileUnityDrivers) => mobileUnityDrivers.documentType),
    __metadata("design:type", Array)
], DocumentTypes.prototype, "mobileUnityDrivers", void 0);
exports.DocumentTypes = DocumentTypes = __decorate([
    (0, typeorm_1.Index)("document_types_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("document_types", { schema: "public" })
], DocumentTypes);
//# sourceMappingURL=DocumentTypes.entity.js.map