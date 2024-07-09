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
exports.SimcardPlan = void 0;
const typeorm_1 = require("typeorm");
const Simcards_entity_1 = require("./Simcards.entity");
let SimcardPlan = class SimcardPlan {
};
exports.SimcardPlan = SimcardPlan;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], SimcardPlan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", length: 45 }),
    __metadata("design:type", String)
], SimcardPlan.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "cutting_day" }),
    __metadata("design:type", Number)
], SimcardPlan.prototype, "cuttingDay", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", default: () => "1" }),
    __metadata("design:type", Number)
], SimcardPlan.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Simcards_entity_1.Simcards, (simcards) => simcards.simcardPlan),
    __metadata("design:type", Array)
], SimcardPlan.prototype, "simcards", void 0);
exports.SimcardPlan = SimcardPlan = __decorate([
    (0, typeorm_1.Index)("simcard_plan_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("simcard_plan", { schema: "public" })
], SimcardPlan);
//# sourceMappingURL=SimcardPlan.entity.js.map