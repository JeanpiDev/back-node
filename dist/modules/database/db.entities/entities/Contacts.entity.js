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
exports.Contacts = void 0;
const typeorm_1 = require("typeorm");
const ContactTypes_entity_1 = require("./ContactTypes.entity");
const Customers_entity_1 = require("./Customers.entity");
let Contacts = class Contacts {
};
exports.Contacts = Contacts;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Contacts.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "contact_type_id" }),
    __metadata("design:type", Number)
], Contacts.prototype, "contactTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "customer_id" }),
    __metadata("design:type", Number)
], Contacts.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "first_name", length: 45 }),
    __metadata("design:type", String)
], Contacts.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "last_name", length: 45 }),
    __metadata("design:type", String)
], Contacts.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "telephone",
        nullable: true,
        length: 45,
    }),
    __metadata("design:type", String)
], Contacts.prototype, "telephone", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "cellphone", length: 45 }),
    __metadata("design:type", String)
], Contacts.prototype, "cellphone", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "email", length: 45 }),
    __metadata("design:type", String)
], Contacts.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ContactTypes_entity_1.ContactTypes, (contactTypes) => contactTypes.contacts),
    (0, typeorm_1.JoinColumn)([{ name: "contact_type_id", referencedColumnName: "id" }]),
    __metadata("design:type", ContactTypes_entity_1.ContactTypes)
], Contacts.prototype, "contactType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Customers_entity_1.Customers, (customers) => customers.contacts),
    (0, typeorm_1.JoinColumn)([{ name: "customer_id", referencedColumnName: "id" }]),
    __metadata("design:type", Customers_entity_1.Customers)
], Contacts.prototype, "customer", void 0);
exports.Contacts = Contacts = __decorate([
    (0, typeorm_1.Index)("idxcontacts_contact_type_id", ["contactTypeId"], {}),
    (0, typeorm_1.Index)("idxcontacts_customer_id", ["customerId"], {}),
    (0, typeorm_1.Index)("contacts_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("contacts", { schema: "public" })
], Contacts);
//# sourceMappingURL=Contacts.entity.js.map