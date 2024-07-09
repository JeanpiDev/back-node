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
exports.MobileUnityOptionList = void 0;
const typeorm_1 = require("typeorm");
const MobileUnities_entity_1 = require("./MobileUnities.entity");
let MobileUnityOptionList = class MobileUnityOptionList {
};
exports.MobileUnityOptionList = MobileUnityOptionList;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], MobileUnityOptionList.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", nullable: true, length: 45 }),
    __metadata("design:type", String)
], MobileUnityOptionList.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => MobileUnities_entity_1.MobileUnities, (mobileUnities) => mobileUnities.mobileUnityOptionLists),
    (0, typeorm_1.JoinTable)({
        name: "mobile_unity_option",
        joinColumns: [{ name: "option_id", referencedColumnName: "id" }],
        inverseJoinColumns: [{ name: "unity_id", referencedColumnName: "id" }],
        schema: "public",
    }),
    __metadata("design:type", Array)
], MobileUnityOptionList.prototype, "mobileUnities", void 0);
exports.MobileUnityOptionList = MobileUnityOptionList = __decorate([
    (0, typeorm_1.Index)("mobile_unity_option_list_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("mobile_unity_option_list", { schema: "public" })
], MobileUnityOptionList);
//# sourceMappingURL=MobileUnityOptionList.entity.js.map