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
exports.UsersTypes = void 0;
const typeorm_1 = require("typeorm");
const Customers_entity_1 = require("./Customers.entity");
const Roles_entity_1 = require("./Roles.entity");
let UsersTypes = class UsersTypes {
};
exports.UsersTypes = UsersTypes;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], UsersTypes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", length: 45 }),
    __metadata("design:type", String)
], UsersTypes.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", nullable: true }),
    __metadata("design:type", Number)
], UsersTypes.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Customers_entity_1.Customers, (customers) => customers.userType),
    __metadata("design:type", Array)
], UsersTypes.prototype, "customers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Roles_entity_1.Roles, (roles) => roles.userType),
    __metadata("design:type", Array)
], UsersTypes.prototype, "roles", void 0);
exports.UsersTypes = UsersTypes = __decorate([
    (0, typeorm_1.Index)("users_types_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("users_types", { schema: "public" })
], UsersTypes);
//# sourceMappingURL=UsersTypes.entity.js.map