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
exports.MobileUnityEventType = void 0;
const typeorm_1 = require("typeorm");
const EventTypes_entity_1 = require("./EventTypes.entity");
const MobileUnities_entity_1 = require("./MobileUnities.entity");
let MobileUnityEventType = class MobileUnityEventType {
};
exports.MobileUnityEventType = MobileUnityEventType;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], MobileUnityEventType.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "mobile_unity_id" }),
    __metadata("design:type", Number)
], MobileUnityEventType.prototype, "mobileUnityId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "event_type_id", nullable: true }),
    __metadata("design:type", Number)
], MobileUnityEventType.prototype, "eventTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "push_notifications", default: () => "0" }),
    __metadata("design:type", Number)
], MobileUnityEventType.prototype, "pushNotifications", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "type",
        length: 55,
        default: () => "''",
    }),
    __metadata("design:type", String)
], MobileUnityEventType.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], MobileUnityEventType.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], MobileUnityEventType.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => EventTypes_entity_1.EventTypes, (eventTypes) => eventTypes.mobileUnityEventTypes),
    (0, typeorm_1.JoinColumn)([{ name: "event_type_id", referencedColumnName: "id" }]),
    __metadata("design:type", EventTypes_entity_1.EventTypes)
], MobileUnityEventType.prototype, "eventType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => MobileUnities_entity_1.MobileUnities, (mobileUnities) => mobileUnities.mobileUnityEventTypes, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "mobile_unity_id", referencedColumnName: "id" }]),
    __metadata("design:type", MobileUnities_entity_1.MobileUnities)
], MobileUnityEventType.prototype, "mobileUnity", void 0);
exports.MobileUnityEventType = MobileUnityEventType = __decorate([
    (0, typeorm_1.Index)("idxmobile_unity_event_type_event_type_id", ["eventTypeId"], {}),
    (0, typeorm_1.Index)("mobile_unity_event_type_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("idxmobile_unity_event_type_mobile_unity_id", ["mobileUnityId"], {}),
    (0, typeorm_1.Entity)("mobile_unity_event_type", { schema: "public" })
], MobileUnityEventType);
//# sourceMappingURL=MobileUnityEventType.entity.js.map