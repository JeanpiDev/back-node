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
exports.Preoperacional = void 0;
const typeorm_1 = require("typeorm");
let Preoperacional = class Preoperacional {
};
exports.Preoperacional = Preoperacional;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Preoperacional.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "customer" }),
    __metadata("design:type", Number)
], Preoperacional.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "unity_id" }),
    __metadata("design:type", Number)
], Preoperacional.prototype, "unityId", void 0);
__decorate([
    (0, typeorm_1.Column)("json", { name: "preoperational_form", nullable: true }),
    __metadata("design:type", Object)
], Preoperacional.prototype, "preoperationalForm", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "token", length: 20 }),
    __metadata("design:type", String)
], Preoperacional.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "date_sent", nullable: true }),
    __metadata("design:type", Date)
], Preoperacional.prototype, "dateSent", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "result_date",
        nullable: true,
    }),
    __metadata("design:type", Date)
], Preoperacional.prototype, "resultDate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], Preoperacional.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Preoperacional.prototype, "updatedAt", void 0);
exports.Preoperacional = Preoperacional = __decorate([
    (0, typeorm_1.Index)("preoperacional_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("preoperacional", { schema: "public" })
], Preoperacional);
//# sourceMappingURL=Preoperacional.entity.js.map