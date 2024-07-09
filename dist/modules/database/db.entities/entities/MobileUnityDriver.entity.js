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
exports.MobileUnityDriver = void 0;
const typeorm_1 = require("typeorm");
const MobileUnityDrivers_entity_1 = require("./MobileUnityDrivers.entity");
const MobileUnities_entity_1 = require("./MobileUnities.entity");
let MobileUnityDriver = class MobileUnityDriver {
};
exports.MobileUnityDriver = MobileUnityDriver;
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "unity_id" }),
    __metadata("design:type", Number)
], MobileUnityDriver.prototype, "unityId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "driver_id" }),
    __metadata("design:type", Number)
], MobileUnityDriver.prototype, "driverId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "start_date", nullable: true }),
    __metadata("design:type", Date)
], MobileUnityDriver.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "end_date", nullable: true }),
    __metadata("design:type", Date)
], MobileUnityDriver.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => MobileUnityDrivers_entity_1.MobileUnityDrivers, (mobileUnityDrivers) => mobileUnityDrivers.mobileUnityDrivers),
    (0, typeorm_1.JoinColumn)([{ name: "driver_id", referencedColumnName: "id" }]),
    __metadata("design:type", MobileUnityDrivers_entity_1.MobileUnityDrivers)
], MobileUnityDriver.prototype, "driver", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => MobileUnities_entity_1.MobileUnities, (mobileUnities) => mobileUnities.mobileUnityDrivers2),
    (0, typeorm_1.JoinColumn)([{ name: "unity_id", referencedColumnName: "id" }]),
    __metadata("design:type", MobileUnities_entity_1.MobileUnities)
], MobileUnityDriver.prototype, "unity", void 0);
exports.MobileUnityDriver = MobileUnityDriver = __decorate([
    (0, typeorm_1.Index)("mobile_unity_driver_pkey", ["driverId", "unityId"], { unique: true }),
    (0, typeorm_1.Index)("idxmobile_unity_driver_driver_id", ["driverId"], {}),
    (0, typeorm_1.Index)("idxmobile_unity_driver_unity_id", ["unityId"], {}),
    (0, typeorm_1.Entity)("mobile_unity_driver", { schema: "public" })
], MobileUnityDriver);
//# sourceMappingURL=MobileUnityDriver.entity.js.map