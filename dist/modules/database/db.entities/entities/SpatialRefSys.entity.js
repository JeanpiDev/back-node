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
exports.SpatialRefSys = void 0;
const typeorm_1 = require("typeorm");
let SpatialRefSys = class SpatialRefSys {
};
exports.SpatialRefSys = SpatialRefSys;
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "srid" }),
    __metadata("design:type", Number)
], SpatialRefSys.prototype, "srid", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "auth_name",
        nullable: true,
        length: 256,
    }),
    __metadata("design:type", String)
], SpatialRefSys.prototype, "authName", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "auth_srid", nullable: true }),
    __metadata("design:type", Number)
], SpatialRefSys.prototype, "authSrid", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "srtext", nullable: true, length: 2048 }),
    __metadata("design:type", String)
], SpatialRefSys.prototype, "srtext", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "proj4text",
        nullable: true,
        length: 2048,
    }),
    __metadata("design:type", String)
], SpatialRefSys.prototype, "proj4text", void 0);
exports.SpatialRefSys = SpatialRefSys = __decorate([
    (0, typeorm_1.Index)("spatial_ref_sys_pkey", ["srid"], { unique: true }),
    (0, typeorm_1.Entity)("spatial_ref_sys", { schema: "public" })
], SpatialRefSys);
//# sourceMappingURL=SpatialRefSys.entity.js.map