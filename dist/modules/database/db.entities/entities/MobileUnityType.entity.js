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
exports.MobileUnityType = void 0;
const typeorm_1 = require("typeorm");
const MobileUnities_entity_1 = require("./MobileUnities.entity");
const MobileUnityClass_entity_1 = require("./MobileUnityClass.entity");
let MobileUnityType = class MobileUnityType {
};
exports.MobileUnityType = MobileUnityType;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], MobileUnityType.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "class_id" }),
    __metadata("design:type", Number)
], MobileUnityType.prototype, "classId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "image", length: 45 }),
    __metadata("design:type", String)
], MobileUnityType.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", nullable: true, length: 45 }),
    __metadata("design:type", String)
], MobileUnityType.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MobileUnities_entity_1.MobileUnities, (mobileUnities) => mobileUnities.type),
    __metadata("design:type", Array)
], MobileUnityType.prototype, "mobileUnities", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => MobileUnityClass_entity_1.MobileUnityClass, (mobileUnityClass) => mobileUnityClass.mobileUnityTypes),
    (0, typeorm_1.JoinColumn)([{ name: "class_id", referencedColumnName: "id" }]),
    __metadata("design:type", MobileUnityClass_entity_1.MobileUnityClass)
], MobileUnityType.prototype, "class", void 0);
exports.MobileUnityType = MobileUnityType = __decorate([
    (0, typeorm_1.Index)("idxmobile_unity_type_class_id", ["classId"], {}),
    (0, typeorm_1.Index)("mobile_unity_type_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("mobile_unity_type", { schema: "public" })
], MobileUnityType);
//# sourceMappingURL=MobileUnityType.entity.js.map