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
exports.CustomersBlocked = void 0;
const typeorm_1 = require("typeorm");
let CustomersBlocked = class CustomersBlocked {
};
exports.CustomersBlocked = CustomersBlocked;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], CustomersBlocked.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "customer_id" }),
    __metadata("design:type", Number)
], CustomersBlocked.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "comments", length: 45 }),
    __metadata("design:type", String)
], CustomersBlocked.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "user_id" }),
    __metadata("design:type", Number)
], CustomersBlocked.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], CustomersBlocked.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], CustomersBlocked.prototype, "updatedAt", void 0);
exports.CustomersBlocked = CustomersBlocked = __decorate([
    (0, typeorm_1.Index)("idxcustomers_blocked_customer_id", ["customerId"], {}),
    (0, typeorm_1.Index)("customers_blocked_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("idxcustomers_blocked_user_id", ["userId"], {}),
    (0, typeorm_1.Entity)("customers_blocked", { schema: "public" })
], CustomersBlocked);
//# sourceMappingURL=CustomersBlocked.entity.js.map