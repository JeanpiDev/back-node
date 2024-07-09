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
exports.MobileUnityLastEvents = void 0;
const typeorm_1 = require("typeorm");
let MobileUnityLastEvents = class MobileUnityLastEvents {
};
exports.MobileUnityLastEvents = MobileUnityLastEvents;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], MobileUnityLastEvents.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "port", nullable: true, length: 10 }),
    __metadata("design:type", String)
], MobileUnityLastEvents.prototype, "port", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "imei", nullable: true, length: 45 }),
    __metadata("design:type", String)
], MobileUnityLastEvents.prototype, "imei", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "last_plot", nullable: true }),
    __metadata("design:type", String)
], MobileUnityLastEvents.prototype, "lastPlot", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "ignition_status", nullable: true }),
    __metadata("design:type", Number)
], MobileUnityLastEvents.prototype, "ignitionStatus", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], MobileUnityLastEvents.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "updated_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], MobileUnityLastEvents.prototype, "updatedAt", void 0);
exports.MobileUnityLastEvents = MobileUnityLastEvents = __decorate([
    (0, typeorm_1.Index)("mobile_unity_last_events_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("idxmobile_unity_last_events_imei", ["imei"], {}),
    (0, typeorm_1.Entity)("mobile_unity_last_events", { schema: "public" })
], MobileUnityLastEvents);
//# sourceMappingURL=MobileUnityLastEvents.entity.js.map