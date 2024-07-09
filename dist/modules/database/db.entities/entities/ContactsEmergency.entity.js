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
exports.ContactsEmergency = void 0;
const typeorm_1 = require("typeorm");
const MobileUnities_entity_1 = require("./MobileUnities.entity");
let ContactsEmergency = class ContactsEmergency {
};
exports.ContactsEmergency = ContactsEmergency;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], ContactsEmergency.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "unity_id" }),
    __metadata("design:type", Number)
], ContactsEmergency.prototype, "unityId", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "level", nullable: true }),
    __metadata("design:type", Number)
], ContactsEmergency.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "first_name", length: 45 }),
    __metadata("design:type", String)
], ContactsEmergency.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "last_name", length: 45 }),
    __metadata("design:type", String)
], ContactsEmergency.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "telephone",
        nullable: true,
        length: 45,
    }),
    __metadata("design:type", String)
], ContactsEmergency.prototype, "telephone", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "cellphone", length: 45 }),
    __metadata("design:type", String)
], ContactsEmergency.prototype, "cellphone", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "email", length: 45 }),
    __metadata("design:type", String)
], ContactsEmergency.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "password", nullable: true, length: 45 }),
    __metadata("design:type", String)
], ContactsEmergency.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => MobileUnities_entity_1.MobileUnities, (mobileUnities) => mobileUnities.contactsEmergencies),
    (0, typeorm_1.JoinColumn)([{ name: "unity_id", referencedColumnName: "id" }]),
    __metadata("design:type", MobileUnities_entity_1.MobileUnities)
], ContactsEmergency.prototype, "unity", void 0);
exports.ContactsEmergency = ContactsEmergency = __decorate([
    (0, typeorm_1.Index)("contacts_emergency_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("idxcontacts_emergency_unity_id", ["unityId"], {}),
    (0, typeorm_1.Entity)("contacts_emergency", { schema: "public" })
], ContactsEmergency);
//# sourceMappingURL=ContactsEmergency.entity.js.map