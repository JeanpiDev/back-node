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
exports.Logs = void 0;
const typeorm_1 = require("typeorm");
let Logs = class Logs {
};
exports.Logs = Logs;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Logs.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "imei",
        nullable: true,
        length: 20,
        default: () => "NULL::character varying",
    }),
    __metadata("design:type", String)
], Logs.prototype, "imei", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "data", nullable: true }),
    __metadata("design:type", String)
], Logs.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "error", nullable: true }),
    __metadata("design:type", String)
], Logs.prototype, "error", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", nullable: true }),
    __metadata("design:type", Number)
], Logs.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], Logs.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Logs.prototype, "updatedAt", void 0);
exports.Logs = Logs = __decorate([
    (0, typeorm_1.Index)("logs_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("logs", { schema: "public" })
], Logs);
//# sourceMappingURL=Logs.entity.js.map