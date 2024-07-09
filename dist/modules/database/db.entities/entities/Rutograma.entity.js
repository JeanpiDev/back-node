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
exports.Rutograma = void 0;
const typeorm_1 = require("typeorm");
let Rutograma = class Rutograma {
};
exports.Rutograma = Rutograma;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Rutograma.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "customer_id" }),
    __metadata("design:type", Number)
], Rutograma.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "ruta_name",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Rutograma.prototype, "rutaName", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "ruta" }),
    __metadata("design:type", String)
], Rutograma.prototype, "ruta", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "token" }),
    __metadata("design:type", String)
], Rutograma.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], Rutograma.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Rutograma.prototype, "updatedAt", void 0);
exports.Rutograma = Rutograma = __decorate([
    (0, typeorm_1.Index)("rutograma_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("rutograma", { schema: "public" })
], Rutograma);
//# sourceMappingURL=Rutograma.entity.js.map