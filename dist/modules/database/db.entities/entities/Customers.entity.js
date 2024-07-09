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
exports.Customers = void 0;
const typeorm_1 = require("typeorm");
const Contacts_entity_1 = require("./Contacts.entity");
const Cities_entity_1 = require("./Cities.entity");
const Departments_entity_1 = require("./Departments.entity");
const DocumentTypes_entity_1 = require("./DocumentTypes.entity");
const Plans_entity_1 = require("./Plans.entity");
const Templates_entity_1 = require("./Templates.entity");
const UsersTypes_entity_1 = require("./UsersTypes.entity");
const Devices_entity_1 = require("./Devices.entity");
const GeographicalEvents_entity_1 = require("./GeographicalEvents.entity");
const GeographicalResources_entity_1 = require("./GeographicalResources.entity");
const MobileUnityAlerts_entity_1 = require("./MobileUnityAlerts.entity");
const MobileUnityDallasKeys_entity_1 = require("./MobileUnityDallasKeys.entity");
const MobileUnityGroups_entity_1 = require("./MobileUnityGroups.entity");
const Users_entity_1 = require("./Users.entity");
let Customers = class Customers {
};
exports.Customers = Customers;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Customers.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "department_id" }),
    __metadata("design:type", Number)
], Customers.prototype, "departmentId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "city_id" }),
    __metadata("design:type", Number)
], Customers.prototype, "cityId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "consultant_id", nullable: true }),
    __metadata("design:type", Number)
], Customers.prototype, "consultantId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "plan_id", nullable: true }),
    __metadata("design:type", Number)
], Customers.prototype, "planId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "reseller_id", nullable: true }),
    __metadata("design:type", Number)
], Customers.prototype, "resellerId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "user_type_id" }),
    __metadata("design:type", Number)
], Customers.prototype, "userTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "template_id", nullable: true }),
    __metadata("design:type", Number)
], Customers.prototype, "templateId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "document_type_id" }),
    __metadata("design:type", Number)
], Customers.prototype, "documentTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "document_number", length: 45 }),
    __metadata("design:type", String)
], Customers.prototype, "documentNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "first_name",
        nullable: true,
        length: 120,
    }),
    __metadata("design:type", String)
], Customers.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "last_name",
        nullable: true,
        length: 45,
    }),
    __metadata("design:type", String)
], Customers.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "full_name", length: 255 }),
    __metadata("design:type", String)
], Customers.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "telephone",
        nullable: true,
        length: 45,
    }),
    __metadata("design:type", String)
], Customers.prototype, "telephone", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "cellphone",
        nullable: true,
        length: 45,
    }),
    __metadata("design:type", String)
], Customers.prototype, "cellphone", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "address", nullable: true, length: 200 }),
    __metadata("design:type", String)
], Customers.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "email", length: 45 }),
    __metadata("design:type", String)
], Customers.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "birthdate", nullable: true }),
    __metadata("design:type", String)
], Customers.prototype, "birthdate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "contract_number",
        nullable: true,
        length: 45,
    }),
    __metadata("design:type", String)
], Customers.prototype, "contractNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "contract_start_date", nullable: true }),
    __metadata("design:type", String)
], Customers.prototype, "contractStartDate", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "contract_end_date", nullable: true }),
    __metadata("design:type", String)
], Customers.prototype, "contractEndDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "contract_file",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], Customers.prototype, "contractFile", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "slug", nullable: true, length: 45 }),
    __metadata("design:type", String)
], Customers.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "subdomain",
        nullable: true,
        length: 45,
    }),
    __metadata("design:type", String)
], Customers.prototype, "subdomain", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "image", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Customers.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "background_image",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], Customers.prototype, "backgroundImage", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "image_logo",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], Customers.prototype, "imageLogo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "color", nullable: true, length: 45 }),
    __metadata("design:type", String)
], Customers.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", nullable: true }),
    __metadata("design:type", Number)
], Customers.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], Customers.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Customers.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Contacts_entity_1.Contacts, (contacts) => contacts.customer),
    __metadata("design:type", Array)
], Customers.prototype, "contacts", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Cities_entity_1.Cities, (cities) => cities.customers),
    (0, typeorm_1.JoinColumn)([{ name: "city_id", referencedColumnName: "id" }]),
    __metadata("design:type", Cities_entity_1.Cities)
], Customers.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Departments_entity_1.Departments, (departments) => departments.customers),
    (0, typeorm_1.JoinColumn)([{ name: "department_id", referencedColumnName: "id" }]),
    __metadata("design:type", Departments_entity_1.Departments)
], Customers.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DocumentTypes_entity_1.DocumentTypes, (documentTypes) => documentTypes.customers),
    (0, typeorm_1.JoinColumn)([{ name: "document_type_id", referencedColumnName: "id" }]),
    __metadata("design:type", DocumentTypes_entity_1.DocumentTypes)
], Customers.prototype, "documentType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Plans_entity_1.Plans, (plans) => plans.customers),
    (0, typeorm_1.JoinColumn)([{ name: "plan_id", referencedColumnName: "id" }]),
    __metadata("design:type", Plans_entity_1.Plans)
], Customers.prototype, "plan", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Customers, (customers) => customers.customers),
    (0, typeorm_1.JoinColumn)([{ name: "reseller_id", referencedColumnName: "id" }]),
    __metadata("design:type", Customers)
], Customers.prototype, "reseller", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Customers, (customers) => customers.reseller),
    __metadata("design:type", Array)
], Customers.prototype, "customers", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Templates_entity_1.Templates, (templates) => templates.customers),
    (0, typeorm_1.JoinColumn)([{ name: "template_id", referencedColumnName: "id" }]),
    __metadata("design:type", Templates_entity_1.Templates)
], Customers.prototype, "template", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UsersTypes_entity_1.UsersTypes, (usersTypes) => usersTypes.customers),
    (0, typeorm_1.JoinColumn)([{ name: "user_type_id", referencedColumnName: "id" }]),
    __metadata("design:type", UsersTypes_entity_1.UsersTypes)
], Customers.prototype, "userType", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Devices_entity_1.Devices, (devices) => devices.customer),
    __metadata("design:type", Array)
], Customers.prototype, "devices", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => GeographicalEvents_entity_1.GeographicalEvents, (geographicalEvents) => geographicalEvents.customer),
    __metadata("design:type", Array)
], Customers.prototype, "geographicalEvents", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => GeographicalResources_entity_1.GeographicalResources, (geographicalResources) => geographicalResources.customer),
    __metadata("design:type", Array)
], Customers.prototype, "geographicalResources", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MobileUnityAlerts_entity_1.MobileUnityAlerts, (mobileUnityAlerts) => mobileUnityAlerts.customer),
    __metadata("design:type", Array)
], Customers.prototype, "mobileUnityAlerts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MobileUnityDallasKeys_entity_1.MobileUnityDallasKeys, (mobileUnityDallasKeys) => mobileUnityDallasKeys.idCustomer2),
    __metadata("design:type", Array)
], Customers.prototype, "mobileUnityDallasKeys", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MobileUnityGroups_entity_1.MobileUnityGroups, (mobileUnityGroups) => mobileUnityGroups.customer),
    __metadata("design:type", Array)
], Customers.prototype, "mobileUnityGroups", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Plans_entity_1.Plans, (plans) => plans.customers2),
    (0, typeorm_1.JoinTable)({
        name: "plan_customer",
        joinColumns: [{ name: "customer_id", referencedColumnName: "id" }],
        inverseJoinColumns: [{ name: "plan_id", referencedColumnName: "id" }],
        schema: "public",
    }),
    __metadata("design:type", Array)
], Customers.prototype, "plans", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Users_entity_1.Users, (users) => users.customer),
    __metadata("design:type", Array)
], Customers.prototype, "users", void 0);
exports.Customers = Customers = __decorate([
    (0, typeorm_1.Index)("idxcustomers_city_id", ["cityId"], {}),
    (0, typeorm_1.Index)("idxcustomers_consultant_id", ["consultantId"], {}),
    (0, typeorm_1.Index)("idxcustomers_department_id", ["departmentId"], {}),
    (0, typeorm_1.Index)("idxcustomers_document_type_id", ["documentTypeId"], {}),
    (0, typeorm_1.Index)("customers_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("idxcustomers_plan_id", ["planId"], {}),
    (0, typeorm_1.Index)("idxcustomers_reseller_id", ["resellerId"], {}),
    (0, typeorm_1.Index)("idxcustomers_template_id", ["templateId"], {}),
    (0, typeorm_1.Index)("idxcustomers_user_type_id", ["userTypeId"], {}),
    (0, typeorm_1.Entity)("customers", { schema: "public" })
], Customers);
//# sourceMappingURL=Customers.entity.js.map