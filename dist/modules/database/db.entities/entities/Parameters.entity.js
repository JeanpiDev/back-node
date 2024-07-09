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
exports.Parameters = void 0;
const typeorm_1 = require("typeorm");
let Parameters = class Parameters {
};
exports.Parameters = Parameters;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Parameters.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", length: 45 }),
    __metadata("design:type", String)
], Parameters.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "description",
        nullable: true,
        length: 300,
    }),
    __metadata("design:type", String)
], Parameters.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "value", length: 45 }),
    __metadata("design:type", String)
], Parameters.prototype, "value", void 0);
exports.Parameters = Parameters = __decorate([
    (0, typeorm_1.Index)("parameters_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("parameters", { schema: "public" })
], Parameters);
//# sourceMappingURL=Parameters.entity.js.map