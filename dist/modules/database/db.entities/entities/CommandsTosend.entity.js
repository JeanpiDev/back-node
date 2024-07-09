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
exports.CommandsTosend = void 0;
const typeorm_1 = require("typeorm");
let CommandsTosend = class CommandsTosend {
};
exports.CommandsTosend = CommandsTosend;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], CommandsTosend.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "command_id" }),
    __metadata("design:type", Number)
], CommandsTosend.prototype, "commandId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "client_id" }),
    __metadata("design:type", Number)
], CommandsTosend.prototype, "clientId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "user_id" }),
    __metadata("design:type", Number)
], CommandsTosend.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "imei", nullable: true, length: 50 }),
    __metadata("design:type", String)
], CommandsTosend.prototype, "imei", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "sended", default: () => "0" }),
    __metadata("design:type", Number)
], CommandsTosend.prototype, "sended", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], CommandsTosend.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], CommandsTosend.prototype, "updatedAt", void 0);
exports.CommandsTosend = CommandsTosend = __decorate([
    (0, typeorm_1.Index)("commands_tosend_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("commands_tosend", { schema: "public" })
], CommandsTosend);
//# sourceMappingURL=CommandsTosend.entity.js.map