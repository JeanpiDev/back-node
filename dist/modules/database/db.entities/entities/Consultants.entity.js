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
exports.Consultants = void 0;
const typeorm_1 = require("typeorm");
let Consultants = class Consultants {
};
exports.Consultants = Consultants;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Consultants.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "city_id", nullable: true }),
    __metadata("design:type", Number)
], Consultants.prototype, "cityId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "department_id", nullable: true }),
    __metadata("design:type", Number)
], Consultants.prototype, "departmentId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "customer_id", default: () => "1" }),
    __metadata("design:type", Number)
], Consultants.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "first_name", length: 45 }),
    __metadata("design:type", String)
], Consultants.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "last_name", length: 45 }),
    __metadata("design:type", String)
], Consultants.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "telephone",
        nullable: true,
        length: 45,
    }),
    __metadata("design:type", String)
], Consultants.prototype, "telephone", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "cellphone", length: 45 }),
    __metadata("design:type", String)
], Consultants.prototype, "cellphone", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "email", length: 45 }),
    __metadata("design:type", String)
], Consultants.prototype, "email", void 0);
exports.Consultants = Consultants = __decorate([
    (0, typeorm_1.Index)("idxconsultants_city_id", ["cityId"], {}),
    (0, typeorm_1.Index)("idxconsultants_department_id", ["departmentId"], {}),
    (0, typeorm_1.Index)("consultants_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("consultants", { schema: "public" })
], Consultants);
//# sourceMappingURL=Consultants.entity.js.map