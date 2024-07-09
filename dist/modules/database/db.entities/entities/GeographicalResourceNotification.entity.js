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
exports.GeographicalResourceNotification = void 0;
const typeorm_1 = require("typeorm");
const GeographicalResourcesNotifications_entity_1 = require("./GeographicalResourcesNotifications.entity");
const MobileUnities_entity_1 = require("./MobileUnities.entity");
let GeographicalResourceNotification = class GeographicalResourceNotification {
};
exports.GeographicalResourceNotification = GeographicalResourceNotification;
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "unity_id" }),
    __metadata("design:type", Number)
], GeographicalResourceNotification.prototype, "unityId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "notification_id" }),
    __metadata("design:type", Number)
], GeographicalResourceNotification.prototype, "notificationId", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", {
        name: "status_event",
        nullable: true,
        default: () => "0",
    }),
    __metadata("design:type", Number)
], GeographicalResourceNotification.prototype, "statusEvent", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => GeographicalResourcesNotifications_entity_1.GeographicalResourcesNotifications, (geographicalResourcesNotifications) => geographicalResourcesNotifications.geographicalResourceNotifications),
    (0, typeorm_1.JoinColumn)([{ name: "notification_id", referencedColumnName: "id" }]),
    __metadata("design:type", GeographicalResourcesNotifications_entity_1.GeographicalResourcesNotifications)
], GeographicalResourceNotification.prototype, "notification", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => MobileUnities_entity_1.MobileUnities, (mobileUnities) => mobileUnities.geographicalResourceNotifications),
    (0, typeorm_1.JoinColumn)([{ name: "unity_id", referencedColumnName: "id" }]),
    __metadata("design:type", MobileUnities_entity_1.MobileUnities)
], GeographicalResourceNotification.prototype, "unity", void 0);
exports.GeographicalResourceNotification = GeographicalResourceNotification = __decorate([
    (0, typeorm_1.Index)("idxgeographical_resource_notification_notification_id", ["notificationId"], {}),
    (0, typeorm_1.Index)("geographical_resource_notification_pkey", ["notificationId", "unityId"], { unique: true }),
    (0, typeorm_1.Index)("idxgeographical_resource_notification_unity_id", ["unityId"], {}),
    (0, typeorm_1.Entity)("geographical_resource_notification", { schema: "public" })
], GeographicalResourceNotification);
//# sourceMappingURL=GeographicalResourceNotification.entity.js.map