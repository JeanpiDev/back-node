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
exports.Municipios = void 0;
const typeorm_1 = require("typeorm");
let Municipios = class Municipios {
};
exports.Municipios = Municipios;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "gid" }),
    __metadata("design:type", Number)
], Municipios.prototype, "gid", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "dpto_ccdgo",
        nullable: true,
        length: 2,
    }),
    __metadata("design:type", String)
], Municipios.prototype, "dptoCcdgo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "mpio_ccdgo",
        nullable: true,
        length: 3,
    }),
    __metadata("design:type", String)
], Municipios.prototype, "mpioCcdgo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "mpio_cdpmp",
        nullable: true,
        length: 5,
    }),
    __metadata("design:type", String)
], Municipios.prototype, "mpioCdpmp", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "nombre_dpt",
        nullable: true,
        length: 250,
    }),
    __metadata("design:type", String)
], Municipios.prototype, "nombreDpt", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "nombre_mpi",
        nullable: true,
        length: 250,
    }),
    __metadata("design:type", String)
], Municipios.prototype, "nombreMpi", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "mpio_crslc",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Municipios.prototype, "mpioCrslc", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "mpio_narea", nullable: true }),
    __metadata("design:type", String)
], Municipios.prototype, "mpioNarea", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "mpio_csmbl",
        nullable: true,
        length: 3,
    }),
    __metadata("design:type", String)
], Municipios.prototype, "mpioCsmbl", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "mpio_vgnc", nullable: true }),
    __metadata("design:type", Number)
], Municipios.prototype, "mpioVgnc", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "mpio_tipo",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], Municipios.prototype, "mpioTipo", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "shape_leng", nullable: true }),
    __metadata("design:type", String)
], Municipios.prototype, "shapeLeng", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "shape_area", nullable: true }),
    __metadata("design:type", String)
], Municipios.prototype, "shapeArea", void 0);
__decorate([
    (0, typeorm_1.Column)("geometry", { name: "geom", nullable: true }),
    __metadata("design:type", String)
], Municipios.prototype, "geom", void 0);
exports.Municipios = Municipios = __decorate([
    (0, typeorm_1.Index)("municipios_geom_idx", ["geom"], {}),
    (0, typeorm_1.Index)("municipios_pkey", ["gid"], { unique: true }),
    (0, typeorm_1.Entity)("municipios", { schema: "public" })
], Municipios);
//# sourceMappingURL=Municipios.entity.js.map