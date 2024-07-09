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
exports.Novelties = void 0;
const typeorm_1 = require("typeorm");
let Novelties = class Novelties {
};
exports.Novelties = Novelties;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Novelties.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "event_id" }),
    __metadata("design:type", Number)
], Novelties.prototype, "eventId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "role_id", nullable: true }),
    __metadata("design:type", Number)
], Novelties.prototype, "roleId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "novelty_type_id" }),
    __metadata("design:type", Number)
], Novelties.prototype, "noveltyTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "user_id", nullable: true }),
    __metadata("design:type", Number)
], Novelties.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "comments", nullable: true }),
    __metadata("design:type", String)
], Novelties.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "is_closed", default: () => "'0'" }),
    __metadata("design:type", Number)
], Novelties.prototype, "isClosed", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "cutomer_notify", default: () => "'1'" }),
    __metadata("design:type", Number)
], Novelties.prototype, "cutomerNotify", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "silence", default: () => "'0'" }),
    __metadata("design:type", Number)
], Novelties.prototype, "silence", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "internal_notify", default: () => "'0'" }),
    __metadata("design:type", Number)
], Novelties.prototype, "internalNotify", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "responsible",
        nullable: true,
        length: 45,
        default: () => "NULL::character varying",
    }),
    __metadata("design:type", String)
], Novelties.prototype, "responsible", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], Novelties.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Novelties.prototype, "updatedAt", void 0);
exports.Novelties = Novelties = __decorate([
    (0, typeorm_1.Index)("novelties_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("novelties", { schema: "public" })
], Novelties);
//# sourceMappingURL=Novelties.entity.js.map