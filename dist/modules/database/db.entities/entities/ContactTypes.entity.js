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
exports.ContactTypes = void 0;
const typeorm_1 = require("typeorm");
const Contacts_entity_1 = require("./Contacts.entity");
let ContactTypes = class ContactTypes {
};
exports.ContactTypes = ContactTypes;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'id' }),
    __metadata("design:type", Number)
], ContactTypes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'name', length: 45 }),
    __metadata("design:type", String)
], ContactTypes.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Contacts_entity_1.Contacts, (contacts) => contacts.contactType),
    __metadata("design:type", Array)
], ContactTypes.prototype, "contacts", void 0);
exports.ContactTypes = ContactTypes = __decorate([
    (0, typeorm_1.Index)('contact_types_pkey', ['id'], { unique: true }),
    (0, typeorm_1.Entity)('contact_types', { schema: 'public' })
], ContactTypes);
//# sourceMappingURL=ContactTypes.entity.js.map