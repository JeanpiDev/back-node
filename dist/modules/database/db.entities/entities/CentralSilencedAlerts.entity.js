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
exports.CentralSilencedAlerts = void 0;
const typeorm_1 = require("typeorm");
let CentralSilencedAlerts = class CentralSilencedAlerts {
};
exports.CentralSilencedAlerts = CentralSilencedAlerts;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], CentralSilencedAlerts.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "unity_id" }),
    __metadata("design:type", Number)
], CentralSilencedAlerts.prototype, "unityId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "event_type_id" }),
    __metadata("design:type", Number)
], CentralSilencedAlerts.prototype, "eventTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", nullable: true }),
    __metadata("design:type", Number)
], CentralSilencedAlerts.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "created",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], CentralSilencedAlerts.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated", nullable: true }),
    __metadata("design:type", Date)
], CentralSilencedAlerts.prototype, "updated", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "createdby", nullable: true }),
    __metadata("design:type", Number)
], CentralSilencedAlerts.prototype, "createdby", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "updatedby", nullable: true }),
    __metadata("design:type", Number)
], CentralSilencedAlerts.prototype, "updatedby", void 0);
exports.CentralSilencedAlerts = CentralSilencedAlerts = __decorate([
    (0, typeorm_1.Index)("idxcentral_silenced_alerts_unity_id_event_type_id_status", ["eventTypeId", "status", "unityId"], {}),
    (0, typeorm_1.Index)("central_silenced_alerts_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("central_silenced_alerts", { schema: "public" })
], CentralSilencedAlerts);
//# sourceMappingURL=CentralSilencedAlerts.entity.js.map