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
exports.GeographicalResourcesNotifications = void 0;
const typeorm_1 = require("typeorm");
const GeographicalResourceNotification_entity_1 = require("./GeographicalResourceNotification.entity");
const GeographicalResources_entity_1 = require("./GeographicalResources.entity");
let GeographicalResourcesNotifications = class GeographicalResourcesNotifications {
};
exports.GeographicalResourcesNotifications = GeographicalResourcesNotifications;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], GeographicalResourcesNotifications.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "geographical_resources_id" }),
    __metadata("design:type", Number)
], GeographicalResourcesNotifications.prototype, "geographicalResourcesId", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "type", nullable: true }),
    __metadata("design:type", Number)
], GeographicalResourcesNotifications.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "unlimited", default: () => "0" }),
    __metadata("design:type", Number)
], GeographicalResourcesNotifications.prototype, "unlimited", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "start_date", nullable: true }),
    __metadata("design:type", String)
], GeographicalResourcesNotifications.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "end_date", nullable: true }),
    __metadata("design:type", String)
], GeographicalResourcesNotifications.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "apply_hour", default: () => "0" }),
    __metadata("design:type", Number)
], GeographicalResourcesNotifications.prototype, "applyHour", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "out_hour", nullable: true, length: 55 }),
    __metadata("design:type", String)
], GeographicalResourcesNotifications.prototype, "outHour", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "entry_hour",
        nullable: true,
        length: 55,
    }),
    __metadata("design:type", String)
], GeographicalResourcesNotifications.prototype, "entryHour", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "periodicity", default: () => "0" }),
    __metadata("design:type", Number)
], GeographicalResourcesNotifications.prototype, "periodicity", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "emails", nullable: true }),
    __metadata("design:type", String)
], GeographicalResourcesNotifications.prototype, "emails", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", {
        name: "distance",
        precision: 53,
        default: () => "0",
    }),
    __metadata("design:type", Number)
], GeographicalResourcesNotifications.prototype, "distance", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", nullable: true }),
    __metadata("design:type", Number)
], GeographicalResourcesNotifications.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "push_notification", default: () => "1" }),
    __metadata("design:type", Number)
], GeographicalResourcesNotifications.prototype, "pushNotification", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => GeographicalResourceNotification_entity_1.GeographicalResourceNotification, (geographicalResourceNotification) => geographicalResourceNotification.notification),
    __metadata("design:type", Array)
], GeographicalResourcesNotifications.prototype, "geographicalResourceNotifications", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => GeographicalResources_entity_1.GeographicalResources, (geographicalResources) => geographicalResources.geographicalResourcesNotifications),
    (0, typeorm_1.JoinColumn)([
        { name: "geographical_resources_id", referencedColumnName: "id" },
    ]),
    __metadata("design:type", GeographicalResources_entity_1.GeographicalResources)
], GeographicalResourcesNotifications.prototype, "geographicalResources", void 0);
exports.GeographicalResourcesNotifications = GeographicalResourcesNotifications = __decorate([
    (0, typeorm_1.Index)("idxgeographical_resources_notifications_geographical_resources_", ["geographicalResourcesId"], {}),
    (0, typeorm_1.Index)("geographical_resources_notifications_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("geographical_resources_notifications", { schema: "public" })
], GeographicalResourcesNotifications);
//# sourceMappingURL=GeographicalResourcesNotifications.entity.js.map