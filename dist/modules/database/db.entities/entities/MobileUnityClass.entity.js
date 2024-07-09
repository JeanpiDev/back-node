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
exports.MobileUnityClass = void 0;
const typeorm_1 = require("typeorm");
const MobileUnities_entity_1 = require("./MobileUnities.entity");
const MobileUnitySubclass_entity_1 = require("./MobileUnitySubclass.entity");
const MobileUnityType_entity_1 = require("./MobileUnityType.entity");
let MobileUnityClass = class MobileUnityClass {
};
exports.MobileUnityClass = MobileUnityClass;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], MobileUnityClass.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", nullable: true, length: 45 }),
    __metadata("design:type", String)
], MobileUnityClass.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", default: () => "0" }),
    __metadata("design:type", Number)
], MobileUnityClass.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MobileUnities_entity_1.MobileUnities, (mobileUnities) => mobileUnities.class),
    __metadata("design:type", Array)
], MobileUnityClass.prototype, "mobileUnities", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MobileUnitySubclass_entity_1.MobileUnitySubclass, (mobileUnitySubclass) => mobileUnitySubclass.class),
    __metadata("design:type", Array)
], MobileUnityClass.prototype, "mobileUnitySubclasses", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MobileUnityType_entity_1.MobileUnityType, (mobileUnityType) => mobileUnityType.class),
    __metadata("design:type", Array)
], MobileUnityClass.prototype, "mobileUnityTypes", void 0);
exports.MobileUnityClass = MobileUnityClass = __decorate([
    (0, typeorm_1.Index)("mobile_unity_class_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("mobile_unity_class", { schema: "public" })
], MobileUnityClass);
//# sourceMappingURL=MobileUnityClass.entity.js.map