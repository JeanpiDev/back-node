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
exports.GeographicalEvents = void 0;
const typeorm_1 = require("typeorm");
const MobileUnities_entity_1 = require("./MobileUnities.entity");
const Customers_entity_1 = require("./Customers.entity");
let GeographicalEvents = class GeographicalEvents {
};
exports.GeographicalEvents = GeographicalEvents;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], GeographicalEvents.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "tipo_notificacion" }),
    __metadata("design:type", String)
], GeographicalEvents.prototype, "tipoNotificacion", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "recurso_id" }),
    __metadata("design:type", Number)
], GeographicalEvents.prototype, "recursoId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "fecha", nullable: true }),
    __metadata("design:type", Date)
], GeographicalEvents.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "relation",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], GeographicalEvents.prototype, "relation", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => MobileUnities_entity_1.MobileUnities, (mobileUnities) => mobileUnities.geographicalEvents),
    (0, typeorm_1.JoinColumn)([{ name: "activo_movil", referencedColumnName: "id" }]),
    __metadata("design:type", MobileUnities_entity_1.MobileUnities)
], GeographicalEvents.prototype, "activoMovil", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Customers_entity_1.Customers, (customers) => customers.geographicalEvents),
    (0, typeorm_1.JoinColumn)([{ name: "customer", referencedColumnName: "id" }]),
    __metadata("design:type", Customers_entity_1.Customers)
], GeographicalEvents.prototype, "customer", void 0);
exports.GeographicalEvents = GeographicalEvents = __decorate([
    (0, typeorm_1.Index)("geographical_events_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("geographical_events", { schema: "public" })
], GeographicalEvents);
//# sourceMappingURL=GeographicalEvents.entity.js.map