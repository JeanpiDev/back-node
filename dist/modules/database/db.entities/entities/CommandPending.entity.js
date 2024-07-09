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
exports.CommandPending = void 0;
const typeorm_1 = require("typeorm");
let CommandPending = class CommandPending {
};
exports.CommandPending = CommandPending;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], CommandPending.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "imei", nullable: true, length: 255 }),
    __metadata("design:type", String)
], CommandPending.prototype, "imei", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "command", nullable: true, length: 255 }),
    __metadata("design:type", String)
], CommandPending.prototype, "command", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "port", nullable: true }),
    __metadata("design:type", Number)
], CommandPending.prototype, "port", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "date", nullable: true }),
    __metadata("design:type", Date)
], CommandPending.prototype, "date", void 0);
exports.CommandPending = CommandPending = __decorate([
    (0, typeorm_1.Index)("command_pending_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("command_pending", { schema: "public" })
], CommandPending);
//# sourceMappingURL=CommandPending.entity.js.map