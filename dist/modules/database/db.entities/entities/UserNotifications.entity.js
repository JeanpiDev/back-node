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
exports.UserNotifications = void 0;
const typeorm_1 = require("typeorm");
let UserNotifications = class UserNotifications {
};
exports.UserNotifications = UserNotifications;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], UserNotifications.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "user_id", nullable: true }),
    __metadata("design:type", Number)
], UserNotifications.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "customer_id" }),
    __metadata("design:type", Number)
], UserNotifications.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "user_read_id", nullable: true }),
    __metadata("design:type", Number)
], UserNotifications.prototype, "userReadId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "type_object",
        nullable: true,
        length: 45,
        default: () => "NULL::character varying",
    }),
    __metadata("design:type", String)
], UserNotifications.prototype, "typeObject", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "object_id",
        nullable: true,
        length: 200,
        default: () => "NULL::character varying",
    }),
    __metadata("design:type", String)
], UserNotifications.prototype, "objectId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "title",
        nullable: true,
        length: 200,
        default: () => "NULL::character varying",
    }),
    __metadata("design:type", String)
], UserNotifications.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "message", nullable: true }),
    __metadata("design:type", String)
], UserNotifications.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "type_notification", nullable: true }),
    __metadata("design:type", Number)
], UserNotifications.prototype, "typeNotification", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "plot",
        nullable: true,
        length: 255,
        default: () => "NULL::character varying",
    }),
    __metadata("design:type", String)
], UserNotifications.prototype, "plot", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "status", default: () => "0" }),
    __metadata("design:type", Number)
], UserNotifications.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "plates",
        nullable: true,
        length: 255,
        default: () => "NULL::character varying",
    }),
    __metadata("design:type", String)
], UserNotifications.prototype, "plates", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], UserNotifications.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], UserNotifications.prototype, "updatedAt", void 0);
exports.UserNotifications = UserNotifications = __decorate([
    (0, typeorm_1.Index)("user_notifications_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("user_notifications", { schema: "public" })
], UserNotifications);
//# sourceMappingURL=UserNotifications.entity.js.map