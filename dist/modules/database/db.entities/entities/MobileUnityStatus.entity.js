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
exports.MobileUnityStatus = void 0;
const typeorm_1 = require("typeorm");
const MobileUnities_entity_1 = require("./MobileUnities.entity");
const MobileUnityStatusHistory_entity_1 = require("./MobileUnityStatusHistory.entity");
let MobileUnityStatus = class MobileUnityStatus {
};
exports.MobileUnityStatus = MobileUnityStatus;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], MobileUnityStatus.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", length: 45 }),
    __metadata("design:type", String)
], MobileUnityStatus.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", nullable: true }),
    __metadata("design:type", Number)
], MobileUnityStatus.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MobileUnities_entity_1.MobileUnities, (mobileUnities) => mobileUnities.status_2),
    __metadata("design:type", Array)
], MobileUnityStatus.prototype, "mobileUnities", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MobileUnityStatusHistory_entity_1.MobileUnityStatusHistory, (mobileUnityStatusHistory) => mobileUnityStatusHistory.status),
    __metadata("design:type", Array)
], MobileUnityStatus.prototype, "mobileUnityStatusHistories", void 0);
exports.MobileUnityStatus = MobileUnityStatus = __decorate([
    (0, typeorm_1.Index)("mobile_unity_status_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("mobile_unity_status", { schema: "public" })
], MobileUnityStatus);
//# sourceMappingURL=MobileUnityStatus.entity.js.map