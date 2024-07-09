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
exports.MobileUnities = void 0;
const typeorm_1 = require("typeorm");
const ContactsEmergency_entity_1 = require("./ContactsEmergency.entity");
const GeographicalEvents_entity_1 = require("./GeographicalEvents.entity");
const GeographicalResourceNotification_entity_1 = require("./GeographicalResourceNotification.entity");
const HabitosConduccion_entity_1 = require("./HabitosConduccion.entity");
const MobileUnityBrands_entity_1 = require("./MobileUnityBrands.entity");
const Cities_entity_1 = require("./Cities.entity");
const MobileUnityClass_entity_1 = require("./MobileUnityClass.entity");
const Departments_entity_1 = require("./Departments.entity");
const Devices_entity_1 = require("./Devices.entity");
const MobileUnityKeys_entity_1 = require("./MobileUnityKeys.entity");
const MobileUnityLine_entity_1 = require("./MobileUnityLine.entity");
const MobileUnityStatus_entity_1 = require("./MobileUnityStatus.entity");
const MobileUnitySubclass_entity_1 = require("./MobileUnitySubclass.entity");
const MobileUnityType_entity_1 = require("./MobileUnityType.entity");
const MobileUnityAlerts_entity_1 = require("./MobileUnityAlerts.entity");
const MobileUnityDriver_entity_1 = require("./MobileUnityDriver.entity");
const MobileUnityDrivers_entity_1 = require("./MobileUnityDrivers.entity");
const MobileUnityEventType_entity_1 = require("./MobileUnityEventType.entity");
const MobileUnityGroups_entity_1 = require("./MobileUnityGroups.entity");
const MobileUnityOptionList_entity_1 = require("./MobileUnityOptionList.entity");
const MobileUnityStatusHistory_entity_1 = require("./MobileUnityStatusHistory.entity");
const Variables_entity_1 = require("./Variables.entity");
let MobileUnities = class MobileUnities {
};
exports.MobileUnities = MobileUnities;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "brand_id", nullable: true }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "brandId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "city_id", nullable: true }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "cityId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "department_id", nullable: true }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "departmentId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "device_id" }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "deviceId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "class_id" }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "classId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "subclass_id", nullable: true }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "subclassId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "status_id", nullable: true }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "statusId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "type_id", nullable: true }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "typeId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "line_id", nullable: true }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "lineId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "key_id", nullable: true }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "keyId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", nullable: true, length: 45 }),
    __metadata("design:type", String)
], MobileUnities.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "runt", nullable: true, length: 45 }),
    __metadata("design:type", String)
], MobileUnities.prototype, "runt", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "plate", nullable: true, length: 45 }),
    __metadata("design:type", String)
], MobileUnities.prototype, "plate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "brand", nullable: true, length: 255 }),
    __metadata("design:type", String)
], MobileUnities.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "chassis", nullable: true, length: 255 }),
    __metadata("design:type", String)
], MobileUnities.prototype, "chassis", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "plate_installation", default: () => "0" }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "plateInstallation", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "engine", nullable: true, length: 255 }),
    __metadata("design:type", String)
], MobileUnities.prototype, "engine", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "image", nullable: true, length: 255 }),
    __metadata("design:type", String)
], MobileUnities.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "model", nullable: true }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "miles_approx", nullable: true }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "milesApprox", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "type_approx",
        length: 11,
        default: () => "'kms'",
    }),
    __metadata("design:type", String)
], MobileUnities.prototype, "typeApprox", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "miles_x_gallon", nullable: true }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "milesXGallon", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", {
        name: "gallons_x_hour_engine_on",
        nullable: true,
        precision: 53,
    }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "gallonsXHourEngineOn", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "color", nullable: true, length: 45 }),
    __metadata("design:type", String)
], MobileUnities.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "oil_change", nullable: true }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "oilChange", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "tech_mech_revition_due_date", nullable: true }),
    __metadata("design:type", String)
], MobileUnities.prototype, "techMechRevitionDueDate", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "soat_due_date", nullable: true }),
    __metadata("design:type", String)
], MobileUnities.prototype, "soatDueDate", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "taxes_due_date", nullable: true }),
    __metadata("design:type", String)
], MobileUnities.prototype, "taxesDueDate", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "installation_record_number", nullable: true }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "installationRecordNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "installation_date", nullable: true }),
    __metadata("design:type", String)
], MobileUnities.prototype, "installationDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "installation_record_image",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], MobileUnities.prototype, "installationRecordImage", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "installation_department_id", nullable: true }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "installationDepartmentId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "installation_city_id", nullable: true }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "installationCityId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "api_url", nullable: true, length: 255 }),
    __metadata("design:type", String)
], MobileUnities.prototype, "apiUrl", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "api_user",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], MobileUnities.prototype, "apiUser", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "api_password",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], MobileUnities.prototype, "apiPassword", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "series", nullable: true, length: 255 }),
    __metadata("design:type", String)
], MobileUnities.prototype, "series", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "unity_type", nullable: true }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "unityType", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", default: () => "1" }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "last_report",
        nullable: true,
    }),
    __metadata("design:type", Date)
], MobileUnities.prototype, "lastReport", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "hour_maintenance", nullable: true }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "hourMaintenance", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "id_unidad_ws",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], MobileUnities.prototype, "idUnidadWs", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], MobileUnities.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], MobileUnities.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "endreport", nullable: true }),
    __metadata("design:type", String)
], MobileUnities.prototype, "endreport", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", {
        name: "statuswebservice",
        nullable: true,
        default: () => "1",
    }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "statuswebservice", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "logwebservice",
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], MobileUnities.prototype, "logwebservice", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "control_t", nullable: true, default: () => "0" }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "controlT", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "temp_min", nullable: true }),
    __metadata("design:type", String)
], MobileUnities.prototype, "tempMin", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "temp_max", nullable: true }),
    __metadata("design:type", String)
], MobileUnities.prototype, "tempMax", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", {
        name: "tank_capacity",
        nullable: true,
        default: () => "0",
    }),
    __metadata("design:type", Number)
], MobileUnities.prototype, "tankCapacity", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ContactsEmergency_entity_1.ContactsEmergency, (contactsEmergency) => contactsEmergency.unity),
    __metadata("design:type", Array)
], MobileUnities.prototype, "contactsEmergencies", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => GeographicalEvents_entity_1.GeographicalEvents, (geographicalEvents) => geographicalEvents.activoMovil),
    __metadata("design:type", Array)
], MobileUnities.prototype, "geographicalEvents", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => GeographicalResourceNotification_entity_1.GeographicalResourceNotification, (geographicalResourceNotification) => geographicalResourceNotification.unity),
    __metadata("design:type", Array)
], MobileUnities.prototype, "geographicalResourceNotifications", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => HabitosConduccion_entity_1.HabitosConduccion, (habitosConduccion) => habitosConduccion.unity),
    __metadata("design:type", Array)
], MobileUnities.prototype, "habitosConduccions", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => MobileUnityBrands_entity_1.MobileUnityBrands, (mobileUnityBrands) => mobileUnityBrands.mobileUnities),
    (0, typeorm_1.JoinColumn)([{ name: "brand_id", referencedColumnName: "id" }]),
    __metadata("design:type", MobileUnityBrands_entity_1.MobileUnityBrands)
], MobileUnities.prototype, "brand_2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Cities_entity_1.Cities, (cities) => cities.mobileUnities),
    (0, typeorm_1.JoinColumn)([{ name: "city_id", referencedColumnName: "id" }]),
    __metadata("design:type", Cities_entity_1.Cities)
], MobileUnities.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => MobileUnityClass_entity_1.MobileUnityClass, (mobileUnityClass) => mobileUnityClass.mobileUnities),
    (0, typeorm_1.JoinColumn)([{ name: "class_id", referencedColumnName: "id" }]),
    __metadata("design:type", MobileUnityClass_entity_1.MobileUnityClass)
], MobileUnities.prototype, "class", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Departments_entity_1.Departments, (departments) => departments.mobileUnities),
    (0, typeorm_1.JoinColumn)([{ name: "department_id", referencedColumnName: "id" }]),
    __metadata("design:type", Departments_entity_1.Departments)
], MobileUnities.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Devices_entity_1.Devices, (devices) => devices.mobileUnities),
    (0, typeorm_1.JoinColumn)([{ name: "device_id", referencedColumnName: "id" }]),
    __metadata("design:type", Devices_entity_1.Devices)
], MobileUnities.prototype, "device", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => MobileUnityKeys_entity_1.MobileUnityKeys, (mobileUnityKeys) => mobileUnityKeys.mobileUnities),
    (0, typeorm_1.JoinColumn)([{ name: "key_id", referencedColumnName: "id" }]),
    __metadata("design:type", MobileUnityKeys_entity_1.MobileUnityKeys)
], MobileUnities.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => MobileUnityLine_entity_1.MobileUnityLine, (mobileUnityLine) => mobileUnityLine.mobileUnities),
    (0, typeorm_1.JoinColumn)([{ name: "line_id", referencedColumnName: "id" }]),
    __metadata("design:type", MobileUnityLine_entity_1.MobileUnityLine)
], MobileUnities.prototype, "line", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => MobileUnityStatus_entity_1.MobileUnityStatus, (mobileUnityStatus) => mobileUnityStatus.mobileUnities),
    (0, typeorm_1.JoinColumn)([{ name: "status_id", referencedColumnName: "id" }]),
    __metadata("design:type", MobileUnityStatus_entity_1.MobileUnityStatus)
], MobileUnities.prototype, "status_2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => MobileUnitySubclass_entity_1.MobileUnitySubclass, (mobileUnitySubclass) => mobileUnitySubclass.mobileUnities),
    (0, typeorm_1.JoinColumn)([{ name: "subclass_id", referencedColumnName: "id" }]),
    __metadata("design:type", MobileUnitySubclass_entity_1.MobileUnitySubclass)
], MobileUnities.prototype, "subclass", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => MobileUnityType_entity_1.MobileUnityType, (mobileUnityType) => mobileUnityType.mobileUnities),
    (0, typeorm_1.JoinColumn)([{ name: "type_id", referencedColumnName: "id" }]),
    __metadata("design:type", MobileUnityType_entity_1.MobileUnityType)
], MobileUnities.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => MobileUnityAlerts_entity_1.MobileUnityAlerts, (mobileUnityAlerts) => mobileUnityAlerts.mobileUnities),
    __metadata("design:type", Array)
], MobileUnities.prototype, "mobileUnityAlerts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MobileUnityDriver_entity_1.MobileUnityDriver, (mobileUnityDriver) => mobileUnityDriver.unity),
    __metadata("design:type", Array)
], MobileUnities.prototype, "mobileUnityDrivers2", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MobileUnityDrivers_entity_1.MobileUnityDrivers, (mobileUnityDrivers) => mobileUnityDrivers.mobileUnity),
    __metadata("design:type", Array)
], MobileUnities.prototype, "mobileUnityDrivers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MobileUnityEventType_entity_1.MobileUnityEventType, (mobileUnityEventType) => mobileUnityEventType.mobileUnity),
    __metadata("design:type", Array)
], MobileUnities.prototype, "mobileUnityEventTypes", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => MobileUnityGroups_entity_1.MobileUnityGroups, (mobileUnityGroups) => mobileUnityGroups.mobileUnities),
    __metadata("design:type", Array)
], MobileUnities.prototype, "mobileUnityGroups", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => MobileUnityOptionList_entity_1.MobileUnityOptionList, (mobileUnityOptionList) => mobileUnityOptionList.mobileUnities),
    __metadata("design:type", Array)
], MobileUnities.prototype, "mobileUnityOptionLists", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MobileUnityStatusHistory_entity_1.MobileUnityStatusHistory, (mobileUnityStatusHistory) => mobileUnityStatusHistory.mobileUnity),
    __metadata("design:type", Array)
], MobileUnities.prototype, "mobileUnityStatusHistories", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Variables_entity_1.Variables, (variables) => variables.mobileUnities),
    (0, typeorm_1.JoinTable)({
        name: "notifications_variables",
        joinColumns: [{ name: "unity_id", referencedColumnName: "id" }],
        inverseJoinColumns: [{ name: "variable_id", referencedColumnName: "id" }],
        schema: "public",
    }),
    __metadata("design:type", Array)
], MobileUnities.prototype, "variables", void 0);
exports.MobileUnities = MobileUnities = __decorate([
    (0, typeorm_1.Index)("idxmobile_unities_brand_id", ["brandId"], {}),
    (0, typeorm_1.Index)("idxmobile_unities_city_id", ["cityId"], {}),
    (0, typeorm_1.Index)("idxmobile_unities_class_id", ["classId"], {}),
    (0, typeorm_1.Index)("idxmobile_unities_department_id", ["departmentId"], {}),
    (0, typeorm_1.Index)("idxmobile_unities_device_id", ["deviceId"], {}),
    (0, typeorm_1.Index)("mobile_unities_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("idxmobile_unities_key_id", ["keyId"], {}),
    (0, typeorm_1.Index)("idxmobile_unities_line_id", ["lineId"], {}),
    (0, typeorm_1.Index)("idxmobile_unities_status_id", ["statusId"], {}),
    (0, typeorm_1.Index)("idxmobile_unities_subclass_id", ["subclassId"], {}),
    (0, typeorm_1.Index)("idxmobile_unities_type_id", ["typeId"], {}),
    (0, typeorm_1.Entity)("mobile_unities", { schema: "public" })
], MobileUnities);
//# sourceMappingURL=MobileUnities.entity.js.map