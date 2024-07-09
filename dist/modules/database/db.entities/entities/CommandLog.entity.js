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
exports.CommandLog = void 0;
const typeorm_1 = require("typeorm");
let CommandLog = class CommandLog {
};
exports.CommandLog = CommandLog;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], CommandLog.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "user_id", nullable: true }),
    __metadata("design:type", Number)
], CommandLog.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "imei", nullable: true, length: 255 }),
    __metadata("design:type", String)
], CommandLog.prototype, "imei", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "command_id", nullable: true }),
    __metadata("design:type", Number)
], CommandLog.prototype, "commandId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "response", nullable: true }),
    __metadata("design:type", String)
], CommandLog.prototype, "response", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "status", nullable: true }),
    __metadata("design:type", Boolean)
], CommandLog.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "command_pending_id" }),
    __metadata("design:type", Number)
], CommandLog.prototype, "commandPendingId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "create_by", nullable: true }),
    __metadata("design:type", Date)
], CommandLog.prototype, "createBy", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "update_by", nullable: true }),
    __metadata("design:type", Date)
], CommandLog.prototype, "updateBy", void 0);
exports.CommandLog = CommandLog = __decorate([
    (0, typeorm_1.Index)("command_log_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("command_log", { schema: "public" })
], CommandLog);
//# sourceMappingURL=CommandLog.entity.js.map