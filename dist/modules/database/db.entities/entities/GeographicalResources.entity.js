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
exports.GeographicalResources = void 0;
const typeorm_1 = require("typeorm");
const Customers_entity_1 = require("./Customers.entity");
const GeographicalResourcesNotifications_entity_1 = require("./GeographicalResourcesNotifications.entity");
let GeographicalResources = class GeographicalResources {
};
exports.GeographicalResources = GeographicalResources;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], GeographicalResources.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "customer_id" }),
    __metadata("design:type", Number)
], GeographicalResources.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "type", nullable: true }),
    __metadata("design:type", Number)
], GeographicalResources.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", nullable: true, length: 45 }),
    __metadata("design:type", String)
], GeographicalResources.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "color", nullable: true, length: 45 }),
    __metadata("design:type", String)
], GeographicalResources.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "is_private", nullable: true }),
    __metadata("design:type", Number)
], GeographicalResources.prototype, "isPrivate", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "points", nullable: true }),
    __metadata("design:type", String)
], GeographicalResources.prototype, "points", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "apply_for_address", nullable: true }),
    __metadata("design:type", Number)
], GeographicalResources.prototype, "applyForAddress", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", default: () => "1" }),
    __metadata("design:type", Number)
], GeographicalResources.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("geometry", { name: "points_g", nullable: true }),
    __metadata("design:type", String)
], GeographicalResources.prototype, "pointsG", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Customers_entity_1.Customers, (customers) => customers.geographicalResources, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "customer_id", referencedColumnName: "id" }]),
    __metadata("design:type", Customers_entity_1.Customers)
], GeographicalResources.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => GeographicalResourcesNotifications_entity_1.GeographicalResourcesNotifications, (geographicalResourcesNotifications) => geographicalResourcesNotifications.geographicalResources),
    __metadata("design:type", Array)
], GeographicalResources.prototype, "geographicalResourcesNotifications", void 0);
exports.GeographicalResources = GeographicalResources = __decorate([
    (0, typeorm_1.Index)("idxgeographical_resources_customer_id", ["customerId"], {}),
    (0, typeorm_1.Index)("geographical_resources_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("geographical_resources", { schema: "public" })
], GeographicalResources);
//# sourceMappingURL=GeographicalResources.entity.js.map