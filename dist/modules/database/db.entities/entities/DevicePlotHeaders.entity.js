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
exports.DevicePlotHeaders = void 0;
const typeorm_1 = require("typeorm");
const DevicePlotHeaderTypes_entity_1 = require("./DevicePlotHeaderTypes.entity");
const DevicePlots_entity_1 = require("./DevicePlots.entity");
let DevicePlotHeaders = class DevicePlotHeaders {
};
exports.DevicePlotHeaders = DevicePlotHeaders;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], DevicePlotHeaders.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "device_plot_id" }),
    __metadata("design:type", Number)
], DevicePlotHeaders.prototype, "devicePlotId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "position" }),
    __metadata("design:type", Number)
], DevicePlotHeaders.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", nullable: true, length: 45 }),
    __metadata("design:type", String)
], DevicePlotHeaders.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "description",
        nullable: true,
        length: 400,
    }),
    __metadata("design:type", String)
], DevicePlotHeaders.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "have_types", nullable: true }),
    __metadata("design:type", Number)
], DevicePlotHeaders.prototype, "haveTypes", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], DevicePlotHeaders.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], DevicePlotHeaders.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DevicePlotHeaderTypes_entity_1.DevicePlotHeaderTypes, (devicePlotHeaderTypes) => devicePlotHeaderTypes.devicePlotHeader),
    __metadata("design:type", Array)
], DevicePlotHeaders.prototype, "devicePlotHeaderTypes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DevicePlots_entity_1.DevicePlots, (devicePlots) => devicePlots.devicePlotHeaders),
    (0, typeorm_1.JoinColumn)([{ name: "device_plot_id", referencedColumnName: "id" }]),
    __metadata("design:type", DevicePlots_entity_1.DevicePlots)
], DevicePlotHeaders.prototype, "devicePlot", void 0);
exports.DevicePlotHeaders = DevicePlotHeaders = __decorate([
    (0, typeorm_1.Index)("idxdevice_plot_headers_device_plot_id", ["devicePlotId"], {}),
    (0, typeorm_1.Index)("device_plot_headers_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("device_plot_headers", { schema: "public" })
], DevicePlotHeaders);
//# sourceMappingURL=DevicePlotHeaders.entity.js.map