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
exports.MobileUnityAlerts = void 0;
const typeorm_1 = require("typeorm");
const MobileUnities_entity_1 = require("./MobileUnities.entity");
const Customers_entity_1 = require("./Customers.entity");
let MobileUnityAlerts = class MobileUnityAlerts {
};
exports.MobileUnityAlerts = MobileUnityAlerts;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], MobileUnityAlerts.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "customer_id" }),
    __metadata("design:type", Number)
], MobileUnityAlerts.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", length: 45 }),
    __metadata("design:type", String)
], MobileUnityAlerts.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "emails", nullable: true, length: 45 }),
    __metadata("design:type", String)
], MobileUnityAlerts.prototype, "emails", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "push_notification" }),
    __metadata("design:type", Number)
], MobileUnityAlerts.prototype, "pushNotification", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", default: () => "1" }),
    __metadata("design:type", Number)
], MobileUnityAlerts.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => MobileUnities_entity_1.MobileUnities, (mobileUnities) => mobileUnities.mobileUnityAlerts),
    (0, typeorm_1.JoinTable)({
        name: "mobile_unity_alert",
        joinColumns: [
            { name: "mobile_unity_alert_id", referencedColumnName: "id" },
        ],
        inverseJoinColumns: [{ name: "unity_id", referencedColumnName: "id" }],
        schema: "public",
    }),
    __metadata("design:type", Array)
], MobileUnityAlerts.prototype, "mobileUnities", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Customers_entity_1.Customers, (customers) => customers.mobileUnityAlerts),
    (0, typeorm_1.JoinColumn)([{ name: "customer_id", referencedColumnName: "id" }]),
    __metadata("design:type", Customers_entity_1.Customers)
], MobileUnityAlerts.prototype, "customer", void 0);
exports.MobileUnityAlerts = MobileUnityAlerts = __decorate([
    (0, typeorm_1.Index)("idxmobile_unity_alerts_customer_id", ["customerId"], {}),
    (0, typeorm_1.Index)("mobile_unity_alerts_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("mobile_unity_alerts", { schema: "public" })
], MobileUnityAlerts);
//# sourceMappingURL=MobileUnityAlerts.entity.js.map