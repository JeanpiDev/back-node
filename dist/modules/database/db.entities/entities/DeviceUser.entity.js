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
exports.DeviceUser = void 0;
const typeorm_1 = require("typeorm");
const Devices_entity_1 = require("./Devices.entity");
const Users_entity_1 = require("./Users.entity");
let DeviceUser = class DeviceUser {
};
exports.DeviceUser = DeviceUser;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], DeviceUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "device_id" }),
    __metadata("design:type", Number)
], DeviceUser.prototype, "deviceId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "user_id" }),
    __metadata("design:type", Number)
], DeviceUser.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "created_at",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], DeviceUser.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "updated_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], DeviceUser.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Devices_entity_1.Devices, (devices) => devices.deviceUsers, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "device_id", referencedColumnName: "id" }]),
    __metadata("design:type", Devices_entity_1.Devices)
], DeviceUser.prototype, "device", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_entity_1.Users, (users) => users.deviceUsers, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "user_id", referencedColumnName: "id" }]),
    __metadata("design:type", Users_entity_1.Users)
], DeviceUser.prototype, "user", void 0);
exports.DeviceUser = DeviceUser = __decorate([
    (0, typeorm_1.Index)("idxdevice_user_device_id", ["deviceId"], {}),
    (0, typeorm_1.Index)("device_user_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("idxdevice_user_user_id", ["userId"], {}),
    (0, typeorm_1.Entity)("device_user", { schema: "public" })
], DeviceUser);
//# sourceMappingURL=DeviceUser.entity.js.map