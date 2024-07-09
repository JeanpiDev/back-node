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
exports.MobileUnityKeys = void 0;
const typeorm_1 = require("typeorm");
const MobileUnities_entity_1 = require("./MobileUnities.entity");
let MobileUnityKeys = class MobileUnityKeys {
};
exports.MobileUnityKeys = MobileUnityKeys;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], MobileUnityKeys.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "code", length: 45 }),
    __metadata("design:type", String)
], MobileUnityKeys.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", default: () => "1" }),
    __metadata("design:type", Number)
], MobileUnityKeys.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MobileUnities_entity_1.MobileUnities, (mobileUnities) => mobileUnities.key),
    __metadata("design:type", Array)
], MobileUnityKeys.prototype, "mobileUnities", void 0);
exports.MobileUnityKeys = MobileUnityKeys = __decorate([
    (0, typeorm_1.Index)("mobile_unity_keys_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("mobile_unity_keys", { schema: "public" })
], MobileUnityKeys);
//# sourceMappingURL=MobileUnityKeys.entity.js.map