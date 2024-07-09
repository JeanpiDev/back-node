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
exports.Plans = void 0;
const typeorm_1 = require("typeorm");
const Customers_entity_1 = require("./Customers.entity");
const Alerts_entity_1 = require("./Alerts.entity");
const Users_entity_1 = require("./Users.entity");
let Plans = class Plans {
};
exports.Plans = Plans;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Plans.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", length: 45 }),
    __metadata("design:type", String)
], Plans.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "description", nullable: true }),
    __metadata("design:type", String)
], Plans.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "users_limit", nullable: true }),
    __metadata("design:type", Number)
], Plans.prototype, "usersLimit", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", {
        name: "central_monitoring_notifications",
        nullable: true,
    }),
    __metadata("design:type", Number)
], Plans.prototype, "centralMonitoringNotifications", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "central_monitoring_event_ids",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], Plans.prototype, "centralMonitoringEventIds", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "maps", nullable: true }),
    __metadata("design:type", Number)
], Plans.prototype, "maps", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "geographical_resources_limit", nullable: true }),
    __metadata("design:type", Number)
], Plans.prototype, "geographicalResourcesLimit", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "general_reports_access", default: () => "0" }),
    __metadata("design:type", Number)
], Plans.prototype, "generalReportsAccess", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "self_monitoring", default: () => "0" }),
    __metadata("design:type", Number)
], Plans.prototype, "selfMonitoring", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "can_share_tracking", default: () => "0" }),
    __metadata("design:type", Number)
], Plans.prototype, "canShareTracking", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "routes_module_access", default: () => "0" }),
    __metadata("design:type", Number)
], Plans.prototype, "routesModuleAccess", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "app_access", default: () => "0" }),
    __metadata("design:type", Number)
], Plans.prototype, "appAccess", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "background_image",
        nullable: true,
        length: 45,
    }),
    __metadata("design:type", String)
], Plans.prototype, "backgroundImage", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", nullable: true }),
    __metadata("design:type", Number)
], Plans.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Plans.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Plans.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "geoaddress",
        nullable: true,
        length: 1,
        default: () => "'0'",
    }),
    __metadata("design:type", String)
], Plans.prototype, "geoaddress", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Customers_entity_1.Customers, (customers) => customers.plan),
    __metadata("design:type", Array)
], Plans.prototype, "customers", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Alerts_entity_1.Alerts, (alerts) => alerts.plans),
    __metadata("design:type", Array)
], Plans.prototype, "alerts", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Customers_entity_1.Customers, (customers) => customers.plans),
    __metadata("design:type", Array)
], Plans.prototype, "customers2", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Users_entity_1.Users, (users) => users.plans),
    (0, typeorm_1.JoinTable)({
        name: "plans_user",
        joinColumns: [{ name: "plan_id", referencedColumnName: "id" }],
        inverseJoinColumns: [{ name: "user_id", referencedColumnName: "id" }],
        schema: "public",
    }),
    __metadata("design:type", Array)
], Plans.prototype, "users", void 0);
exports.Plans = Plans = __decorate([
    (0, typeorm_1.Index)("plans_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("plans", { schema: "public" })
], Plans);
//# sourceMappingURL=Plans.entity.js.map