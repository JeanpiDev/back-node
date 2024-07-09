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
exports.MobileUnityDallasKeys = void 0;
const typeorm_1 = require("typeorm");
const Customers_entity_1 = require("./Customers.entity");
let MobileUnityDallasKeys = class MobileUnityDallasKeys {
};
exports.MobileUnityDallasKeys = MobileUnityDallasKeys;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], MobileUnityDallasKeys.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "code_number", length: 45 }),
    __metadata("design:type", String)
], MobileUnityDallasKeys.prototype, "codeNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "description",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], MobileUnityDallasKeys.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "status", nullable: true, default: () => "0" }),
    __metadata("design:type", Number)
], MobileUnityDallasKeys.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "id_customer" }),
    __metadata("design:type", Number)
], MobileUnityDallasKeys.prototype, "idCustomer", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "id_devices", nullable: true }),
    __metadata("design:type", Number)
], MobileUnityDallasKeys.prototype, "idDevices", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], MobileUnityDallasKeys.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], MobileUnityDallasKeys.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Customers_entity_1.Customers, (customers) => customers.mobileUnityDallasKeys),
    (0, typeorm_1.JoinColumn)([{ name: "id_customer", referencedColumnName: "id" }]),
    __metadata("design:type", Customers_entity_1.Customers)
], MobileUnityDallasKeys.prototype, "idCustomer2", void 0);
exports.MobileUnityDallasKeys = MobileUnityDallasKeys = __decorate([
    (0, typeorm_1.Index)("mobile_unity_dallas_keys_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("idxmobile_unity_dallas_keys_customer_id", ["idCustomer"], {}),
    (0, typeorm_1.Entity)("mobile_unity_dallas_keys", { schema: "public" })
], MobileUnityDallasKeys);
//# sourceMappingURL=MobileUnityDallasKeys.entity.js.map