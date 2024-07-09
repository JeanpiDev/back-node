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
exports.CentralAlerts_2021_02 = void 0;
const typeorm_1 = require("typeorm");
let CentralAlerts_2021_02 = class CentralAlerts_2021_02 {
};
exports.CentralAlerts_2021_02 = CentralAlerts_2021_02;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], CentralAlerts_2021_02.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "unity_id" }),
    __metadata("design:type", Number)
], CentralAlerts_2021_02.prototype, "unityId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "event_type_id" }),
    __metadata("design:type", Number)
], CentralAlerts_2021_02.prototype, "eventTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "mobile_unity_event_id" }),
    __metadata("design:type", Number)
], CentralAlerts_2021_02.prototype, "mobileUnityEventId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "data", nullable: true }),
    __metadata("design:type", String)
], CentralAlerts_2021_02.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "date_read", nullable: true }),
    __metadata("design:type", Date)
], CentralAlerts_2021_02.prototype, "dateRead", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "date_novelty", nullable: true }),
    __metadata("design:type", Date)
], CentralAlerts_2021_02.prototype, "dateNovelty", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "date_close", nullable: true }),
    __metadata("design:type", Date)
], CentralAlerts_2021_02.prototype, "dateClose", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", nullable: true, default: () => "'1'" }),
    __metadata("design:type", Number)
], CentralAlerts_2021_02.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "created", nullable: true }),
    __metadata("design:type", Date)
], CentralAlerts_2021_02.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "updated", nullable: true }),
    __metadata("design:type", Date)
], CentralAlerts_2021_02.prototype, "updated", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "createdby", nullable: true }),
    __metadata("design:type", Number)
], CentralAlerts_2021_02.prototype, "createdby", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "updatedby", nullable: true }),
    __metadata("design:type", Number)
], CentralAlerts_2021_02.prototype, "updatedby", void 0);
exports.CentralAlerts_2021_02 = CentralAlerts_2021_02 = __decorate([
    (0, typeorm_1.Index)("central_alerts_2021_02_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("central_alerts_2021_02", { schema: "public" })
], CentralAlerts_2021_02);
//# sourceMappingURL=CentralAlerts_2021_02.entity.js.map