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
exports.Simcards = void 0;
const typeorm_1 = require("typeorm");
const Devices_entity_1 = require("./Devices.entity");
const SimcardLogs_entity_1 = require("./SimcardLogs.entity");
const SimcardPlan_entity_1 = require("./SimcardPlan.entity");
let Simcards = class Simcards {
};
exports.Simcards = Simcards;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Simcards.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "simcard_plan_id" }),
    __metadata("design:type", Number)
], Simcards.prototype, "simcardPlanId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", {
        name: "customer_id",
        nullable: true,
        default: () => "1",
    }),
    __metadata("design:type", Number)
], Simcards.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "imei", nullable: true, length: 45 }),
    __metadata("design:type", String)
], Simcards.prototype, "imei", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "line_number", length: 45 }),
    __metadata("design:type", String)
], Simcards.prototype, "lineNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", default: () => "1" }),
    __metadata("design:type", Number)
], Simcards.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], Simcards.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Simcards.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Devices_entity_1.Devices, (devices) => devices.simcard),
    __metadata("design:type", Array)
], Simcards.prototype, "devices", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => SimcardLogs_entity_1.SimcardLogs, (simcardLogs) => simcardLogs.simcard),
    __metadata("design:type", Array)
], Simcards.prototype, "simcardLogs", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => SimcardPlan_entity_1.SimcardPlan, (simcardPlan) => simcardPlan.simcards),
    (0, typeorm_1.JoinColumn)([{ name: "simcard_plan_id", referencedColumnName: "id" }]),
    __metadata("design:type", SimcardPlan_entity_1.SimcardPlan)
], Simcards.prototype, "simcardPlan", void 0);
exports.Simcards = Simcards = __decorate([
    (0, typeorm_1.Index)("simcards_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("idxsimcards_simcard_plan_id", ["simcardPlanId"], {}),
    (0, typeorm_1.Entity)("simcards", { schema: "public" })
], Simcards);
//# sourceMappingURL=Simcards.entity.js.map