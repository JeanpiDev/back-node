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
exports.CarrerasCalles = void 0;
const typeorm_1 = require("typeorm");
let CarrerasCalles = class CarrerasCalles {
};
exports.CarrerasCalles = CarrerasCalles;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "gid" }),
    __metadata("design:type", Number)
], CarrerasCalles.prototype, "gid", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "osm_id", nullable: true, length: 254 }),
    __metadata("design:type", String)
], CarrerasCalles.prototype, "osmId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", nullable: true, length: 254 }),
    __metadata("design:type", String)
], CarrerasCalles.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "highway", nullable: true, length: 254 }),
    __metadata("design:type", String)
], CarrerasCalles.prototype, "highway", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "waterway",
        nullable: true,
        length: 254,
    }),
    __metadata("design:type", String)
], CarrerasCalles.prototype, "waterway", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "aerialway",
        nullable: true,
        length: 254,
    }),
    __metadata("design:type", String)
], CarrerasCalles.prototype, "aerialway", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "barrier", nullable: true, length: 254 }),
    __metadata("design:type", String)
], CarrerasCalles.prototype, "barrier", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "man_made",
        nullable: true,
        length: 254,
    }),
    __metadata("design:type", String)
], CarrerasCalles.prototype, "manMade", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "railway", nullable: true, length: 254 }),
    __metadata("design:type", String)
], CarrerasCalles.prototype, "railway", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "z_order", nullable: true }),
    __metadata("design:type", String)
], CarrerasCalles.prototype, "zOrder", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "other_tags",
        nullable: true,
        length: 254,
    }),
    __metadata("design:type", String)
], CarrerasCalles.prototype, "otherTags", void 0);
__decorate([
    (0, typeorm_1.Column)("geometry", { name: "geom", nullable: true }),
    __metadata("design:type", String)
], CarrerasCalles.prototype, "geom", void 0);
exports.CarrerasCalles = CarrerasCalles = __decorate([
    (0, typeorm_1.Index)("carreras_calles_geom_idx", ["geom"], {}),
    (0, typeorm_1.Index)("carreras_calles_pkey", ["gid"], { unique: true }),
    (0, typeorm_1.Entity)("carreras_calles", { schema: "public" })
], CarrerasCalles);
//# sourceMappingURL=CarrerasCalles.entity.js.map