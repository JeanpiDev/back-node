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
exports.MobileUnityStatusHistory = void 0;
const typeorm_1 = require("typeorm");
const MobileUnities_entity_1 = require("./MobileUnities.entity");
const MobileUnityStatus_entity_1 = require("./MobileUnityStatus.entity");
let MobileUnityStatusHistory = class MobileUnityStatusHistory {
};
exports.MobileUnityStatusHistory = MobileUnityStatusHistory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], MobileUnityStatusHistory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "start_date", nullable: true }),
    __metadata("design:type", Date)
], MobileUnityStatusHistory.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "end_date", nullable: true }),
    __metadata("design:type", Date)
], MobileUnityStatusHistory.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], MobileUnityStatusHistory.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], MobileUnityStatusHistory.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "comment", nullable: true, length: 250 }),
    __metadata("design:type", String)
], MobileUnityStatusHistory.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => MobileUnities_entity_1.MobileUnities, (mobileUnities) => mobileUnities.mobileUnityStatusHistories),
    (0, typeorm_1.JoinColumn)([{ name: "mobile_unity_id", referencedColumnName: "id" }]),
    __metadata("design:type", MobileUnities_entity_1.MobileUnities)
], MobileUnityStatusHistory.prototype, "mobileUnity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => MobileUnityStatus_entity_1.MobileUnityStatus, (mobileUnityStatus) => mobileUnityStatus.mobileUnityStatusHistories),
    (0, typeorm_1.JoinColumn)([{ name: "status_id", referencedColumnName: "id" }]),
    __metadata("design:type", MobileUnityStatus_entity_1.MobileUnityStatus)
], MobileUnityStatusHistory.prototype, "status", void 0);
exports.MobileUnityStatusHistory = MobileUnityStatusHistory = __decorate([
    (0, typeorm_1.Index)("mobile_unity_status_history_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("mobile_unity_status_history", { schema: "public" })
], MobileUnityStatusHistory);
//# sourceMappingURL=MobileUnityStatusHistory.entity.js.map