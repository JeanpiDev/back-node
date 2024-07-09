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
exports.Templates = void 0;
const typeorm_1 = require("typeorm");
const Customers_entity_1 = require("./Customers.entity");
let Templates = class Templates {
};
exports.Templates = Templates;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Templates.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", nullable: true, length: 45 }),
    __metadata("design:type", String)
], Templates.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "image", nullable: true, length: 45 }),
    __metadata("design:type", String)
], Templates.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "stylesheet", nullable: true }),
    __metadata("design:type", String)
], Templates.prototype, "stylesheet", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Customers_entity_1.Customers, (customers) => customers.template),
    __metadata("design:type", Array)
], Templates.prototype, "customers", void 0);
exports.Templates = Templates = __decorate([
    (0, typeorm_1.Index)("templates_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("templates", { schema: "public" })
], Templates);
//# sourceMappingURL=Templates.entity.js.map