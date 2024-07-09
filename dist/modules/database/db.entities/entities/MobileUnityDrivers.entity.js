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
exports.MobileUnityDrivers = void 0;
const typeorm_1 = require("typeorm");
const MobileUnityDriver_entity_1 = require("./MobileUnityDriver.entity");
const Cities_entity_1 = require("./Cities.entity");
const Departments_entity_1 = require("./Departments.entity");
const DocumentTypes_entity_1 = require("./DocumentTypes.entity");
const MobileUnities_entity_1 = require("./MobileUnities.entity");
let MobileUnityDrivers = class MobileUnityDrivers {
};
exports.MobileUnityDrivers = MobileUnityDrivers;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], MobileUnityDrivers.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "department_id" }),
    __metadata("design:type", Number)
], MobileUnityDrivers.prototype, "departmentId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "city_id" }),
    __metadata("design:type", Number)
], MobileUnityDrivers.prototype, "cityId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "mobile_unity_id", nullable: true }),
    __metadata("design:type", Number)
], MobileUnityDrivers.prototype, "mobileUnityId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "document_type_id" }),
    __metadata("design:type", Number)
], MobileUnityDrivers.prototype, "documentTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "document_number", length: 45 }),
    __metadata("design:type", String)
], MobileUnityDrivers.prototype, "documentNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "first_name",
        nullable: true,
        length: 45,
    }),
    __metadata("design:type", String)
], MobileUnityDrivers.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "last_name",
        nullable: true,
        length: 45,
    }),
    __metadata("design:type", String)
], MobileUnityDrivers.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "gender", nullable: true, length: 1 }),
    __metadata("design:type", String)
], MobileUnityDrivers.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "birthdate", nullable: true }),
    __metadata("design:type", String)
], MobileUnityDrivers.prototype, "birthdate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "address", nullable: true, length: 45 }),
    __metadata("design:type", String)
], MobileUnityDrivers.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "email", nullable: true, length: 45 }),
    __metadata("design:type", String)
], MobileUnityDrivers.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "telephone",
        nullable: true,
        length: 45,
    }),
    __metadata("design:type", String)
], MobileUnityDrivers.prototype, "telephone", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "cellphone",
        nullable: true,
        length: 45,
    }),
    __metadata("design:type", String)
], MobileUnityDrivers.prototype, "cellphone", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "driver_license_number",
        nullable: true,
        length: 45,
    }),
    __metadata("design:type", String)
], MobileUnityDrivers.prototype, "driverLicenseNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "driver_license_due_date", nullable: true }),
    __metadata("design:type", String)
], MobileUnityDrivers.prototype, "driverLicenseDueDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "driver_license_category",
        nullable: true,
        length: 45,
    }),
    __metadata("design:type", String)
], MobileUnityDrivers.prototype, "driverLicenseCategory", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "rh", nullable: true, length: 45 }),
    __metadata("design:type", String)
], MobileUnityDrivers.prototype, "rh", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "image", nullable: true, length: 255 }),
    __metadata("design:type", String)
], MobileUnityDrivers.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", nullable: true }),
    __metadata("design:type", Number)
], MobileUnityDrivers.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], MobileUnityDrivers.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], MobileUnityDrivers.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MobileUnityDriver_entity_1.MobileUnityDriver, (mobileUnityDriver) => mobileUnityDriver.driver),
    __metadata("design:type", Array)
], MobileUnityDrivers.prototype, "mobileUnityDrivers", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Cities_entity_1.Cities, (cities) => cities.mobileUnityDrivers),
    (0, typeorm_1.JoinColumn)([{ name: "city_id", referencedColumnName: "id" }]),
    __metadata("design:type", Cities_entity_1.Cities)
], MobileUnityDrivers.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Departments_entity_1.Departments, (departments) => departments.mobileUnityDrivers),
    (0, typeorm_1.JoinColumn)([{ name: "department_id", referencedColumnName: "id" }]),
    __metadata("design:type", Departments_entity_1.Departments)
], MobileUnityDrivers.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DocumentTypes_entity_1.DocumentTypes, (documentTypes) => documentTypes.mobileUnityDrivers),
    (0, typeorm_1.JoinColumn)([{ name: "document_type_id", referencedColumnName: "id" }]),
    __metadata("design:type", DocumentTypes_entity_1.DocumentTypes)
], MobileUnityDrivers.prototype, "documentType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => MobileUnities_entity_1.MobileUnities, (mobileUnities) => mobileUnities.mobileUnityDrivers, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "mobile_unity_id", referencedColumnName: "id" }]),
    __metadata("design:type", MobileUnities_entity_1.MobileUnities)
], MobileUnityDrivers.prototype, "mobileUnity", void 0);
exports.MobileUnityDrivers = MobileUnityDrivers = __decorate([
    (0, typeorm_1.Index)("idxmobile_unity_drivers_city_id", ["cityId"], {}),
    (0, typeorm_1.Index)("idxmobile_unity_drivers_department_id", ["departmentId"], {}),
    (0, typeorm_1.Index)("idxmobile_unity_drivers_document_type_id", ["documentTypeId"], {}),
    (0, typeorm_1.Index)("mobile_unity_drivers_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("idxmobile_unity_drivers_mobile_unity_id", ["mobileUnityId"], {}),
    (0, typeorm_1.Entity)("mobile_unity_drivers", { schema: "public" })
], MobileUnityDrivers);
//# sourceMappingURL=MobileUnityDrivers.entity.js.map