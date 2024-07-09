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
exports.Directions = void 0;
const typeorm_1 = require("typeorm");
let Directions = class Directions {
};
exports.Directions = Directions;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], Directions.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("real", { name: "latitud", precision: 24 }),
    __metadata("design:type", Number)
], Directions.prototype, "latitud", void 0);
__decorate([
    (0, typeorm_1.Column)("real", { name: "longitud", precision: 24 }),
    __metadata("design:type", Number)
], Directions.prototype, "longitud", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "address", length: 255 }),
    __metadata("design:type", String)
], Directions.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)("geometry", { name: "geom", nullable: true }),
    __metadata("design:type", String)
], Directions.prototype, "geom", void 0);
exports.Directions = Directions = __decorate([
    (0, typeorm_1.Index)("idxdirections_id", ["id"], {}),
    (0, typeorm_1.Entity)("directions", { schema: "public" })
], Directions);
//# sourceMappingURL=Directions.entity.js.map