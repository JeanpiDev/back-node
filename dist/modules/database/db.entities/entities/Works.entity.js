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
exports.Works = void 0;
const typeorm_1 = require("typeorm");
let Works = class Works {
};
exports.Works = Works;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Works.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "type" }),
    __metadata("design:type", Number)
], Works.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "unity_id" }),
    __metadata("design:type", Number)
], Works.prototype, "unityId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "start" }),
    __metadata("design:type", Date)
], Works.prototype, "start", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "end" }),
    __metadata("design:type", Date)
], Works.prototype, "end", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", { name: "km", precision: 53 }),
    __metadata("design:type", Number)
], Works.prototype, "km", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", { name: "speed", precision: 53 }),
    __metadata("design:type", Number)
], Works.prototype, "speed", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "on_id" }),
    __metadata("design:type", Number)
], Works.prototype, "onId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "off_id" }),
    __metadata("design:type", Number)
], Works.prototype, "offId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "data",
        nullable: true,
        length: 500,
        default: () => "NULL::character varying",
    }),
    __metadata("design:type", String)
], Works.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], Works.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Works.prototype, "updatedAt", void 0);
exports.Works = Works = __decorate([
    (0, typeorm_1.Index)("works_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("works", { schema: "public" })
], Works);
//# sourceMappingURL=Works.entity.js.map