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
exports.Notifications = void 0;
const typeorm_1 = require("typeorm");
let Notifications = class Notifications {
};
exports.Notifications = Notifications;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Notifications.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "event_type_id" }),
    __metadata("design:type", Number)
], Notifications.prototype, "eventTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "customer_id" }),
    __metadata("design:type", Number)
], Notifications.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "mobile_unity_id", length: 255 }),
    __metadata("design:type", String)
], Notifications.prototype, "mobileUnityId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "emails", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Notifications.prototype, "emails", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "notification_push" }),
    __metadata("design:type", Number)
], Notifications.prototype, "notificationPush", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "notification_email" }),
    __metadata("design:type", Number)
], Notifications.prototype, "notificationEmail", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status" }),
    __metadata("design:type", Number)
], Notifications.prototype, "status", void 0);
exports.Notifications = Notifications = __decorate([
    (0, typeorm_1.Index)("notifications_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("notifications", { schema: "public" })
], Notifications);
//# sourceMappingURL=Notifications.entity.js.map