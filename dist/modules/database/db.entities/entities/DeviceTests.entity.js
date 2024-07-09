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
exports.DeviceTests = void 0;
const typeorm_1 = require("typeorm");
const Devices_entity_1 = require("./Devices.entity");
let DeviceTests = class DeviceTests {
};
exports.DeviceTests = DeviceTests;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], DeviceTests.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "device_id" }),
    __metadata("design:type", Number)
], DeviceTests.prototype, "deviceId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "date",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], DeviceTests.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "comments" }),
    __metadata("design:type", String)
], DeviceTests.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], DeviceTests.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], DeviceTests.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Devices_entity_1.Devices, (devices) => devices.deviceTests),
    (0, typeorm_1.JoinColumn)([{ name: "device_id", referencedColumnName: "id" }]),
    __metadata("design:type", Devices_entity_1.Devices)
], DeviceTests.prototype, "device", void 0);
exports.DeviceTests = DeviceTests = __decorate([
    (0, typeorm_1.Index)("idxdevice_tests_device_id", ["deviceId"], {}),
    (0, typeorm_1.Index)("device_tests_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("device_tests", { schema: "public" })
], DeviceTests);
//# sourceMappingURL=DeviceTests.entity.js.map