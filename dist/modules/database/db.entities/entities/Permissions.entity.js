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
exports.Permissions = void 0;
const typeorm_1 = require("typeorm");
let Permissions = class Permissions {
};
exports.Permissions = Permissions;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Permissions.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", length: 191 }),
    __metadata("design:type", String)
], Permissions.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "guard_name", length: 191 }),
    __metadata("design:type", String)
], Permissions.prototype, "guardName", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "position" }),
    __metadata("design:type", Number)
], Permissions.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], Permissions.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Permissions.prototype, "updatedAt", void 0);
exports.Permissions = Permissions = __decorate([
    (0, typeorm_1.Index)("permissions_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("permissions", { schema: "public" })
], Permissions);
//# sourceMappingURL=Permissions.entity.js.map