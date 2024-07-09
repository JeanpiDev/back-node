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
exports.DriversDallas = void 0;
const typeorm_1 = require("typeorm");
const Cities_entity_1 = require("./Cities.entity");
const Departments_entity_1 = require("./Departments.entity");
const DocumentTypes_entity_1 = require("./DocumentTypes.entity");
let DriversDallas = class DriversDallas {
};
exports.DriversDallas = DriversDallas;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], DriversDallas.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "document_number", length: 45 }),
    __metadata("design:type", String)
], DriversDallas.prototype, "documentNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "id_dallas", nullable: true }),
    __metadata("design:type", Number)
], DriversDallas.prototype, "idDallas", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "first_name",
        nullable: true,
        length: 45,
    }),
    __metadata("design:type", String)
], DriversDallas.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "last_name",
        nullable: true,
        length: 45,
    }),
    __metadata("design:type", String)
], DriversDallas.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "gender", nullable: true, length: 5 }),
    __metadata("design:type", String)
], DriversDallas.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "birthdate", nullable: true }),
    __metadata("design:type", String)
], DriversDallas.prototype, "birthdate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "address", nullable: true, length: 45 }),
    __metadata("design:type", String)
], DriversDallas.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "email", nullable: true, length: 45 }),
    __metadata("design:type", String)
], DriversDallas.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "telephone",
        nullable: true,
        length: 45,
    }),
    __metadata("design:type", String)
], DriversDallas.prototype, "telephone", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "cellphone",
        nullable: true,
        length: 45,
    }),
    __metadata("design:type", String)
], DriversDallas.prototype, "cellphone", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "driver_license_number",
        nullable: true,
        length: 45,
    }),
    __metadata("design:type", String)
], DriversDallas.prototype, "driverLicenseNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "driver_license_due_date", nullable: true }),
    __metadata("design:type", String)
], DriversDallas.prototype, "driverLicenseDueDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "driver_license_category",
        nullable: true,
        length: 45,
    }),
    __metadata("design:type", String)
], DriversDallas.prototype, "driverLicenseCategory", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "rh", nullable: true, length: 45 }),
    __metadata("design:type", String)
], DriversDallas.prototype, "rh", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "image", nullable: true, length: 255 }),
    __metadata("design:type", String)
], DriversDallas.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", nullable: true }),
    __metadata("design:type", Number)
], DriversDallas.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], DriversDallas.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], DriversDallas.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "customer_id" }),
    __metadata("design:type", Number)
], DriversDallas.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Cities_entity_1.Cities, (cities) => cities.driversDallas),
    (0, typeorm_1.JoinColumn)([{ name: "city_id", referencedColumnName: "id" }]),
    __metadata("design:type", Cities_entity_1.Cities)
], DriversDallas.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Departments_entity_1.Departments, (departments) => departments.driversDallas),
    (0, typeorm_1.JoinColumn)([{ name: "department_id", referencedColumnName: "id" }]),
    __metadata("design:type", Departments_entity_1.Departments)
], DriversDallas.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DocumentTypes_entity_1.DocumentTypes, (documentTypes) => documentTypes.driversDallas),
    (0, typeorm_1.JoinColumn)([{ name: "document_type_id", referencedColumnName: "id" }]),
    __metadata("design:type", DocumentTypes_entity_1.DocumentTypes)
], DriversDallas.prototype, "documentType", void 0);
exports.DriversDallas = DriversDallas = __decorate([
    (0, typeorm_1.Index)("drivers_dallas_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("drivers_dallas", { schema: "public" })
], DriversDallas);
//# sourceMappingURL=DriversDallas.entity.js.map