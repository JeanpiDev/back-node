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
exports.WebserviceLine = void 0;
const typeorm_1 = require("typeorm");
let WebserviceLine = class WebserviceLine {
};
exports.WebserviceLine = WebserviceLine;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], WebserviceLine.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "code", length: 45 }),
    __metadata("design:type", String)
], WebserviceLine.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", length: 45 }),
    __metadata("design:type", String)
], WebserviceLine.prototype, "name", void 0);
exports.WebserviceLine = WebserviceLine = __decorate([
    (0, typeorm_1.Index)("webservice_line_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("webservice_line", { schema: "public" })
], WebserviceLine);
//# sourceMappingURL=WebserviceLine.entity.js.map