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
exports.Users = void 0;
const typeorm_1 = require("typeorm");
const DeviceUser_entity_1 = require("./DeviceUser.entity");
const Plans_entity_1 = require("./Plans.entity");
const Customers_entity_1 = require("./Customers.entity");
const Roles_entity_1 = require("./Roles.entity");
let Users = class Users {
};
exports.Users = Users;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "customer_id", nullable: true }),
    __metadata("design:type", Number)
], Users.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "role_id" }),
    __metadata("design:type", Number)
], Users.prototype, "roleId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", length: 191 }),
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "email", length: 191 }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "password", length: 191 }),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "remember_token",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Users.prototype, "rememberToken", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "language",
        nullable: true,
        length: 10,
        default: () => "'es'",
    }),
    __metadata("design:type", String)
], Users.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "image", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Users.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", {
        name: "email_notifications",
        nullable: true,
        default: () => "1",
    }),
    __metadata("design:type", Number)
], Users.prototype, "emailNotifications", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", {
        name: "push_notifications",
        nullable: true,
        default: () => "1",
    }),
    __metadata("design:type", Number)
], Users.prototype, "pushNotifications", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "device_token",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], Users.prototype, "deviceToken", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "platform", nullable: true, length: 45 }),
    __metadata("design:type", String)
], Users.prototype, "platform", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "app_version",
        nullable: true,
        length: 10,
    }),
    __metadata("design:type", String)
], Users.prototype, "appVersion", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", nullable: true, default: () => "0" }),
    __metadata("design:type", Number)
], Users.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "last_date_connection",
        nullable: true,
    }),
    __metadata("design:type", Date)
], Users.prototype, "lastDateConnection", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], Users.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Users.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DeviceUser_entity_1.DeviceUser, (deviceUser) => deviceUser.user),
    __metadata("design:type", Array)
], Users.prototype, "deviceUsers", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Plans_entity_1.Plans, (plans) => plans.users),
    __metadata("design:type", Array)
], Users.prototype, "plans", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Customers_entity_1.Customers, (customers) => customers.users),
    (0, typeorm_1.JoinColumn)([{ name: "customer_id", referencedColumnName: "id" }]),
    __metadata("design:type", Customers_entity_1.Customers)
], Users.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Roles_entity_1.Roles, (roles) => roles.users),
    (0, typeorm_1.JoinColumn)([{ name: "role_id", referencedColumnName: "id" }]),
    __metadata("design:type", Roles_entity_1.Roles)
], Users.prototype, "role", void 0);
exports.Users = Users = __decorate([
    (0, typeorm_1.Index)("idxusers_customer_id", ["customerId"], {}),
    (0, typeorm_1.Index)("idxusers_email", ["email"], { unique: true }),
    (0, typeorm_1.Index)("users_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("idxusers_role_id", ["roleId"], {}),
    (0, typeorm_1.Entity)("users", { schema: "public" })
], Users);
//# sourceMappingURL=Users.entity.js.map