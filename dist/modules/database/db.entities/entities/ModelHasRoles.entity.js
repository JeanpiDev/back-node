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
exports.ModelHasRoles = void 0;
const typeorm_1 = require("typeorm");
let ModelHasRoles = class ModelHasRoles {
};
exports.ModelHasRoles = ModelHasRoles;
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "role_id" }),
    __metadata("design:type", Number)
], ModelHasRoles.prototype, "roleId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        primary: true,
        name: "model_type",
        length: 191,
    }),
    __metadata("design:type", String)
], ModelHasRoles.prototype, "modelType", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { primary: true, name: "model_id" }),
    __metadata("design:type", String)
], ModelHasRoles.prototype, "modelId", void 0);
exports.ModelHasRoles = ModelHasRoles = __decorate([
    (0, typeorm_1.Index)("idxmodel_has_roles_model_type_model_id_role_id", ["modelId", "modelType", "roleId"], {}),
    (0, typeorm_1.Index)("model_has_roles_pkey", ["modelId", "modelType", "roleId"], {
        unique: true,
    }),
    (0, typeorm_1.Entity)("model_has_roles", { schema: "public" })
], ModelHasRoles);
//# sourceMappingURL=ModelHasRoles.entity.js.map