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
exports.FormStructureCustomer = void 0;
const typeorm_1 = require("typeorm");
let FormStructureCustomer = class FormStructureCustomer {
};
exports.FormStructureCustomer = FormStructureCustomer;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], FormStructureCustomer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "customer" }),
    __metadata("design:type", Number)
], FormStructureCustomer.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.Column)("json", { name: "structure_form" }),
    __metadata("design:type", Object)
], FormStructureCustomer.prototype, "structureForm", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], FormStructureCustomer.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], FormStructureCustomer.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "icon", nullable: true }),
    __metadata("design:type", String)
], FormStructureCustomer.prototype, "icon", void 0);
exports.FormStructureCustomer = FormStructureCustomer = __decorate([
    (0, typeorm_1.Index)("form_structure_customer_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("form_structure_customer", { schema: "public" })
], FormStructureCustomer);
//# sourceMappingURL=FormStructureCustomer.entity.js.map