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
exports.ModelHasPermissions = void 0;
const typeorm_1 = require("typeorm");
let ModelHasPermissions = class ModelHasPermissions {
};
exports.ModelHasPermissions = ModelHasPermissions;
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "permission_id" }),
    __metadata("design:type", Number)
], ModelHasPermissions.prototype, "permissionId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "model_type",
        length: 191,
    }),
    __metadata("design:type", String)
], ModelHasPermissions.prototype, "modelType", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { primary: true, name: "model_id" }),
    __metadata("design:type", String)
], ModelHasPermissions.prototype, "modelId", void 0);
exports.ModelHasPermissions = ModelHasPermissions = __decorate([
    (0, typeorm_1.Index)("model_has_permissions_pkey", ["modelId", "modelType", "permissionId"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("idxmodel_has_permissions_model_type_model_id", ["modelId", "modelType"], {}),
    (0, typeorm_1.Entity)("model_has_permissions", { schema: "public" })
], ModelHasPermissions);
//# sourceMappingURL=ModelHasPermissions.entity.js.map