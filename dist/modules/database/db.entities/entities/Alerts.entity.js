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
exports.Alerts = void 0;
const typeorm_1 = require("typeorm");
const Plans_entity_1 = require("./Plans.entity");
let Alerts = class Alerts {
};
exports.Alerts = Alerts;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Alerts.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", nullable: true, length: 45 }),
    __metadata("design:type", String)
], Alerts.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "description",
        nullable: true,
        length: 250,
    }),
    __metadata("design:type", String)
], Alerts.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "status", nullable: true, length: 45 }),
    __metadata("design:type", String)
], Alerts.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Plans_entity_1.Plans, (plans) => plans.alerts),
    (0, typeorm_1.JoinTable)({
        name: "plan_alert",
        joinColumns: [{ name: "alert_id", referencedColumnName: "id" }],
        inverseJoinColumns: [{ name: "plan_id", referencedColumnName: "id" }],
        schema: "public",
    }),
    __metadata("design:type", Array)
], Alerts.prototype, "plans", void 0);
exports.Alerts = Alerts = __decorate([
    (0, typeorm_1.Index)("alerts_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("alerts", { schema: "public" })
], Alerts);
//# sourceMappingURL=Alerts.entity.js.map