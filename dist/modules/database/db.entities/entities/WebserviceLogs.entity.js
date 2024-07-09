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
exports.WebserviceLogs = void 0;
const typeorm_1 = require("typeorm");
let WebserviceLogs = class WebserviceLogs {
};
exports.WebserviceLogs = WebserviceLogs;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], WebserviceLogs.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "device_id", nullable: true }),
    __metadata("design:type", Number)
], WebserviceLogs.prototype, "deviceId", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "plot" }),
    __metadata("design:type", String)
], WebserviceLogs.prototype, "plot", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "xml_tosend" }),
    __metadata("design:type", String)
], WebserviceLogs.prototype, "xmlTosend", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "response_ws", length: 500 }),
    __metadata("design:type", String)
], WebserviceLogs.prototype, "responseWs", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], WebserviceLogs.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "updated_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], WebserviceLogs.prototype, "updatedAt", void 0);
exports.WebserviceLogs = WebserviceLogs = __decorate([
    (0, typeorm_1.Index)("webservice_logs_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("webservice_logs", { schema: "public" })
], WebserviceLogs);
//# sourceMappingURL=WebserviceLogs.entity.js.map