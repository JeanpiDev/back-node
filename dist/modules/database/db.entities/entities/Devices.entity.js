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
exports.Devices = void 0;
const typeorm_1 = require("typeorm");
const DeviceTests_entity_1 = require("./DeviceTests.entity");
const DeviceUser_entity_1 = require("./DeviceUser.entity");
const Customers_entity_1 = require("./Customers.entity");
const DeviceTypes_entity_1 = require("./DeviceTypes.entity");
const MobileUnityLine_entity_1 = require("./MobileUnityLine.entity");
const Simcards_entity_1 = require("./Simcards.entity");
const MobileUnities_entity_1 = require("./MobileUnities.entity");
const SimcardLogs_entity_1 = require("./SimcardLogs.entity");
let Devices = class Devices {
};
exports.Devices = Devices;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Devices.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "device_type_id" }),
    __metadata("design:type", Number)
], Devices.prototype, "deviceTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "customer_id" }),
    __metadata("design:type", Number)
], Devices.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "line_id", nullable: true }),
    __metadata("design:type", Number)
], Devices.prototype, "lineId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "simcard_id", nullable: true }),
    __metadata("design:type", Number)
], Devices.prototype, "simcardId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "imei", nullable: true, length: 45 }),
    __metadata("design:type", String)
], Devices.prototype, "imei", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", length: 45 }),
    __metadata("design:type", String)
], Devices.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "engine_report_time_on", nullable: true }),
    __metadata("design:type", Number)
], Devices.prototype, "engineReportTimeOn", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "engine_report_time_off", nullable: true }),
    __metadata("design:type", Number)
], Devices.prototype, "engineReportTimeOff", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "speeding", nullable: true }),
    __metadata("design:type", Number)
], Devices.prototype, "speeding", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", {
        name: "oil_consumption",
        nullable: true,
        default: () => "0",
    }),
    __metadata("design:type", Number)
], Devices.prototype, "oilConsumption", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "firewall", nullable: true, length: 45 }),
    __metadata("design:type", String)
], Devices.prototype, "firewall", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tcp_port", nullable: true, length: 45 }),
    __metadata("design:type", String)
], Devices.prototype, "tcpPort", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", default: () => "1" }),
    __metadata("design:type", Number)
], Devices.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "property", nullable: true }),
    __metadata("design:type", Number)
], Devices.prototype, "property", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "ip_local", nullable: true, length: 50 }),
    __metadata("design:type", String)
], Devices.prototype, "ipLocal", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "port_remote",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], Devices.prototype, "portRemote", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "ip_remote",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], Devices.prototype, "ipRemote", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "last_connect",
        nullable: true,
    }),
    __metadata("design:type", Date)
], Devices.prototype, "lastConnect", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "status_connect", default: () => "false" }),
    __metadata("design:type", Boolean)
], Devices.prototype, "statusConnect", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DeviceTests_entity_1.DeviceTests, (deviceTests) => deviceTests.device),
    __metadata("design:type", Array)
], Devices.prototype, "deviceTests", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DeviceUser_entity_1.DeviceUser, (deviceUser) => deviceUser.device),
    __metadata("design:type", Array)
], Devices.prototype, "deviceUsers", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Customers_entity_1.Customers, (customers) => customers.devices),
    (0, typeorm_1.JoinColumn)([{ name: "customer_id", referencedColumnName: "id" }]),
    __metadata("design:type", Customers_entity_1.Customers)
], Devices.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DeviceTypes_entity_1.DeviceTypes, (deviceTypes) => deviceTypes.devices),
    (0, typeorm_1.JoinColumn)([{ name: "device_type_id", referencedColumnName: "id" }]),
    __metadata("design:type", DeviceTypes_entity_1.DeviceTypes)
], Devices.prototype, "deviceType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => MobileUnityLine_entity_1.MobileUnityLine, (mobileUnityLine) => mobileUnityLine.devices),
    (0, typeorm_1.JoinColumn)([{ name: "line_id", referencedColumnName: "id" }]),
    __metadata("design:type", MobileUnityLine_entity_1.MobileUnityLine)
], Devices.prototype, "line", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Simcards_entity_1.Simcards, (simcards) => simcards.devices),
    (0, typeorm_1.JoinColumn)([{ name: "simcard_id", referencedColumnName: "id" }]),
    __metadata("design:type", Simcards_entity_1.Simcards)
], Devices.prototype, "simcard", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MobileUnities_entity_1.MobileUnities, (mobileUnities) => mobileUnities.device),
    __metadata("design:type", Array)
], Devices.prototype, "mobileUnities", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => SimcardLogs_entity_1.SimcardLogs, (simcardLogs) => simcardLogs.device),
    __metadata("design:type", Array)
], Devices.prototype, "simcardLogs", void 0);
exports.Devices = Devices = __decorate([
    (0, typeorm_1.Index)("idxdevices_customer_id", ["customerId"], {}),
    (0, typeorm_1.Index)("idxdevices_device_type_id", ["deviceTypeId"], {}),
    (0, typeorm_1.Index)("devices_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("idxdevices_imei", ["imei"], {}),
    (0, typeorm_1.Index)("idxdevices_line_id", ["lineId"], {}),
    (0, typeorm_1.Index)("idxdevices_simcard_id", ["simcardId"], {}),
    (0, typeorm_1.Entity)("devices", { schema: "public" })
], Devices);
//# sourceMappingURL=Devices.entity.js.map