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
exports.RoleHasPermissions = void 0;
const typeorm_1 = require("typeorm");
let RoleHasPermissions = class RoleHasPermissions {
};
exports.RoleHasPermissions = RoleHasPermissions;
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "permission_id" }),
    __metadata("design:type", Number)
], RoleHasPermissions.prototype, "permissionId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "role_id" }),
    __metadata("design:type", Number)
], RoleHasPermissions.prototype, "roleId", void 0);
exports.RoleHasPermissions = RoleHasPermissions = __decorate([
    (0, typeorm_1.Index)("role_has_permissions_pkey", ["permissionId", "roleId"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("idxrole_has_permissions_role_id", ["roleId"], {}),
    (0, typeorm_1.Entity)("role_has_permissions", { schema: "public" })
], RoleHasPermissions);
//# sourceMappingURL=RoleHasPermissions.entity.js.map