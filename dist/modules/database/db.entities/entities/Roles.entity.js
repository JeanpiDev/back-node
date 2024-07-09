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
exports.Roles = void 0;
const typeorm_1 = require("typeorm");
const UsersTypes_entity_1 = require("./UsersTypes.entity");
const Users_entity_1 = require("./Users.entity");
let Roles = class Roles {
};
exports.Roles = Roles;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Roles.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", length: 191 }),
    __metadata("design:type", String)
], Roles.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "guard_name", length: 191 }),
    __metadata("design:type", String)
], Roles.prototype, "guardName", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], Roles.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Roles.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UsersTypes_entity_1.UsersTypes, (usersTypes) => usersTypes.roles),
    (0, typeorm_1.JoinColumn)([{ name: "user_type_id", referencedColumnName: "id" }]),
    __metadata("design:type", UsersTypes_entity_1.UsersTypes)
], Roles.prototype, "userType", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Users_entity_1.Users, (users) => users.role),
    __metadata("design:type", Array)
], Roles.prototype, "users", void 0);
exports.Roles = Roles = __decorate([
    (0, typeorm_1.Index)("roles_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("roles", { schema: "public" })
], Roles);
//# sourceMappingURL=Roles.entity.js.map