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
exports.WebserviceTypeMobileUnity = void 0;
const typeorm_1 = require("typeorm");
let WebserviceTypeMobileUnity = class WebserviceTypeMobileUnity {
};
exports.WebserviceTypeMobileUnity = WebserviceTypeMobileUnity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], WebserviceTypeMobileUnity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "code", length: 45 }),
    __metadata("design:type", String)
], WebserviceTypeMobileUnity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", length: 100 }),
    __metadata("design:type", String)
], WebserviceTypeMobileUnity.prototype, "name", void 0);
exports.WebserviceTypeMobileUnity = WebserviceTypeMobileUnity = __decorate([
    (0, typeorm_1.Index)("webservice_type_mobile_unity_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("webservice_type_mobile_unity", { schema: "public" })
], WebserviceTypeMobileUnity);
//# sourceMappingURL=WebserviceTypeMobileUnity.entity.js.map