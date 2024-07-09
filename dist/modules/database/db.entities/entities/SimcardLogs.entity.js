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
exports.SimcardLogs = void 0;
const typeorm_1 = require("typeorm");
const Devices_entity_1 = require("./Devices.entity");
const Simcards_entity_1 = require("./Simcards.entity");
let SimcardLogs = class SimcardLogs {
};
exports.SimcardLogs = SimcardLogs;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], SimcardLogs.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "device_id" }),
    __metadata("design:type", Number)
], SimcardLogs.prototype, "deviceId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "simcard_id" }),
    __metadata("design:type", Number)
], SimcardLogs.prototype, "simcardId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "start_date", nullable: true }),
    __metadata("design:type", Date)
], SimcardLogs.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "end_date", nullable: true }),
    __metadata("design:type", Date)
], SimcardLogs.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "comments",
        nullable: true,
        length: 250,
    }),
    __metadata("design:type", String)
], SimcardLogs.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Devices_entity_1.Devices, (devices) => devices.simcardLogs),
    (0, typeorm_1.JoinColumn)([{ name: "device_id", referencedColumnName: "id" }]),
    __metadata("design:type", Devices_entity_1.Devices)
], SimcardLogs.prototype, "device", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Simcards_entity_1.Simcards, (simcards) => simcards.simcardLogs),
    (0, typeorm_1.JoinColumn)([{ name: "simcard_id", referencedColumnName: "id" }]),
    __metadata("design:type", Simcards_entity_1.Simcards)
], SimcardLogs.prototype, "simcard", void 0);
exports.SimcardLogs = SimcardLogs = __decorate([
    (0, typeorm_1.Index)("idxsimcard_logs_device_id", ["deviceId"], {}),
    (0, typeorm_1.Index)("simcard_logs_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Index)("idxsimcard_logs_simcard_id", ["simcardId"], {}),
    (0, typeorm_1.Entity)("simcard_logs", { schema: "public" })
], SimcardLogs);
//# sourceMappingURL=SimcardLogs.entity.js.map