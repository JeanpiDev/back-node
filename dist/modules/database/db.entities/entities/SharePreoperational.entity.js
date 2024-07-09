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
exports.SharePreoperational = void 0;
const typeorm_1 = require("typeorm");
let SharePreoperational = class SharePreoperational {
};
exports.SharePreoperational = SharePreoperational;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], SharePreoperational.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "unity_id", length: 800 }),
    __metadata("design:type", String)
], SharePreoperational.prototype, "unityId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "customer" }),
    __metadata("design:type", Number)
], SharePreoperational.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "token" }),
    __metadata("design:type", String)
], SharePreoperational.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "url_send", length: 200 }),
    __metadata("design:type", String)
], SharePreoperational.prototype, "urlSend", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "status", length: 10 }),
    __metadata("design:type", String)
], SharePreoperational.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "start_date" }),
    __metadata("design:type", Date)
], SharePreoperational.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "end_date", nullable: true }),
    __metadata("design:type", Date)
], SharePreoperational.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "token_user" }),
    __metadata("design:type", String)
], SharePreoperational.prototype, "tokenUser", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], SharePreoperational.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], SharePreoperational.prototype, "updatedAt", void 0);
exports.SharePreoperational = SharePreoperational = __decorate([
    (0, typeorm_1.Index)("share_preoperational_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("share_preoperational", { schema: "public" })
], SharePreoperational);
//# sourceMappingURL=SharePreoperational.entity.js.map