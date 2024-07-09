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
exports.MobileUnityEventGeographicalResourceNotification = void 0;
const typeorm_1 = require("typeorm");
let MobileUnityEventGeographicalResourceNotification = class MobileUnityEventGeographicalResourceNotification {
};
exports.MobileUnityEventGeographicalResourceNotification = MobileUnityEventGeographicalResourceNotification;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], MobileUnityEventGeographicalResourceNotification.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "geographical_resource_notification_id" }),
    __metadata("design:type", Number)
], MobileUnityEventGeographicalResourceNotification.prototype, "geographicalResourceNotificationId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "mobile_unity_event_id" }),
    __metadata("design:type", Number)
], MobileUnityEventGeographicalResourceNotification.prototype, "mobileUnityEventId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], MobileUnityEventGeographicalResourceNotification.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], MobileUnityEventGeographicalResourceNotification.prototype, "updatedAt", void 0);
exports.MobileUnityEventGeographicalResourceNotification = MobileUnityEventGeographicalResourceNotification = __decorate([
    (0, typeorm_1.Index)("idxmobile_unity_event_geographical_resource_notification_geogra", ["geographicalResourceNotificationId"], {}),
    (0, typeorm_1.Index)("mobile_unity_event_geographical_resource_notification_pkey", ["id"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("idxmobile_unity_event_geographical_resource_notification_mobile", ["mobileUnityEventId"], {}),
    (0, typeorm_1.Entity)("mobile_unity_event_geographical_resource_notification", {
        schema: "public",
    })
], MobileUnityEventGeographicalResourceNotification);
//# sourceMappingURL=MobileUnityEventGeographicalResourceNotification.entity.js.map