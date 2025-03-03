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
exports.UserEmailTemplates = void 0;
const typeorm_1 = require("typeorm");
let UserEmailTemplates = class UserEmailTemplates {
};
exports.UserEmailTemplates = UserEmailTemplates;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], UserEmailTemplates.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "customer_id" }),
    __metadata("design:type", Number)
], UserEmailTemplates.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "laravel_template_name", length: 500 }),
    __metadata("design:type", String)
], UserEmailTemplates.prototype, "laravelTemplateName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "user_template_name", length: 100 }),
    __metadata("design:type", String)
], UserEmailTemplates.prototype, "userTemplateName", void 0);
__decorate([
    (0, typeorm_1.Column)("json", { name: "json_template" }),
    __metadata("design:type", Object)
], UserEmailTemplates.prototype, "jsonTemplate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], UserEmailTemplates.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], UserEmailTemplates.prototype, "updatedAt", void 0);
exports.UserEmailTemplates = UserEmailTemplates = __decorate([
    (0, typeorm_1.Index)("user_email_templates_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("user_email_templates", { schema: "public" })
], UserEmailTemplates);
//# sourceMappingURL=UserEmailTemplates.entity.js.map