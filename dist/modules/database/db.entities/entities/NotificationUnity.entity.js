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
exports.NotificationUnity = void 0;
const typeorm_1 = require("typeorm");
let NotificationUnity = class NotificationUnity {
};
exports.NotificationUnity = NotificationUnity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], NotificationUnity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "notification_id" }),
    __metadata("design:type", Number)
], NotificationUnity.prototype, "notificationId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "unity_id" }),
    __metadata("design:type", Number)
], NotificationUnity.prototype, "unityId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "hour", length: 55 }),
    __metadata("design:type", String)
], NotificationUnity.prototype, "hour", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "plot" }),
    __metadata("design:type", String)
], NotificationUnity.prototype, "plot", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "lat", length: 255 }),
    __metadata("design:type", String)
], NotificationUnity.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "lon", length: 255 }),
    __metadata("design:type", String)
], NotificationUnity.prototype, "lon", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "type" }),
    __metadata("design:type", Number)
], NotificationUnity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], NotificationUnity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], NotificationUnity.prototype, "updatedAt", void 0);
exports.NotificationUnity = NotificationUnity = __decorate([
    (0, typeorm_1.Index)("notification_unity_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("notification_unity", { schema: "public" })
], NotificationUnity);
//# sourceMappingURL=NotificationUnity.entity.js.map