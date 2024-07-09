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
exports.DevicePlotHeaderTypes = void 0;
const typeorm_1 = require("typeorm");
const DevicePlotHeaders_entity_1 = require("./DevicePlotHeaders.entity");
let DevicePlotHeaderTypes = class DevicePlotHeaderTypes {
};
exports.DevicePlotHeaderTypes = DevicePlotHeaderTypes;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], DevicePlotHeaderTypes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "code", nullable: true, length: 5 }),
    __metadata("design:type", String)
], DevicePlotHeaderTypes.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", nullable: true, length: 255 }),
    __metadata("design:type", String)
], DevicePlotHeaderTypes.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "color", length: 155 }),
    __metadata("design:type", String)
], DevicePlotHeaderTypes.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "central_monitoring" }),
    __metadata("design:type", Number)
], DevicePlotHeaderTypes.prototype, "centralMonitoring", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], DevicePlotHeaderTypes.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], DevicePlotHeaderTypes.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DevicePlotHeaders_entity_1.DevicePlotHeaders, (devicePlotHeaders) => devicePlotHeaders.devicePlotHeaderTypes),
    (0, typeorm_1.JoinColumn)([{ name: "device_plot_header_id", referencedColumnName: "id" }]),
    __metadata("design:type", DevicePlotHeaders_entity_1.DevicePlotHeaders)
], DevicePlotHeaderTypes.prototype, "devicePlotHeader", void 0);
exports.DevicePlotHeaderTypes = DevicePlotHeaderTypes = __decorate([
    (0, typeorm_1.Index)("device_plot_header_types_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("device_plot_header_types", { schema: "public" })
], DevicePlotHeaderTypes);
//# sourceMappingURL=DevicePlotHeaderTypes.entity.js.map