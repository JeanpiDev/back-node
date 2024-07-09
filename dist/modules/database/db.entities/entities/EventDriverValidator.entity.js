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
exports.EventDriverValidator = void 0;
const typeorm_1 = require("typeorm");
let EventDriverValidator = class EventDriverValidator {
};
exports.EventDriverValidator = EventDriverValidator;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], EventDriverValidator.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "unity_id", nullable: true }),
    __metadata("design:type", Number)
], EventDriverValidator.prototype, "unityId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "id_driver", nullable: true }),
    __metadata("design:type", Number)
], EventDriverValidator.prototype, "idDriver", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "on", nullable: true }),
    __metadata("design:type", Boolean)
], EventDriverValidator.prototype, "on", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "off", nullable: true }),
    __metadata("design:type", Boolean)
], EventDriverValidator.prototype, "off", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], EventDriverValidator.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], EventDriverValidator.prototype, "updatedAt", void 0);
exports.EventDriverValidator = EventDriverValidator = __decorate([
    (0, typeorm_1.Index)("event_driver_validator_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("idx_unity_id_validator", ["unityId"], {}),
    (0, typeorm_1.Entity)("event_driver_validator", { schema: "public" })
], EventDriverValidator);
//# sourceMappingURL=EventDriverValidator.entity.js.map