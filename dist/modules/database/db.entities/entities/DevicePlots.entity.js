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
exports.DevicePlots = void 0;
const typeorm_1 = require("typeorm");
const DevicePlotDeviceType_entity_1 = require("./DevicePlotDeviceType.entity");
const DevicePlotHeaders_entity_1 = require("./DevicePlotHeaders.entity");
const Brands_entity_1 = require("./Brands.entity");
let DevicePlots = class DevicePlots {
};
exports.DevicePlots = DevicePlots;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], DevicePlots.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", nullable: true, length: 500 }),
    __metadata("design:type", String)
], DevicePlots.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "type", nullable: true }),
    __metadata("design:type", Number)
], DevicePlots.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "created_at",
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], DevicePlots.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], DevicePlots.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DevicePlotDeviceType_entity_1.DevicePlotDeviceType, (devicePlotDeviceType) => devicePlotDeviceType.devicePlot),
    __metadata("design:type", Array)
], DevicePlots.prototype, "devicePlotDeviceTypes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DevicePlotHeaders_entity_1.DevicePlotHeaders, (devicePlotHeaders) => devicePlotHeaders.devicePlot),
    __metadata("design:type", Array)
], DevicePlots.prototype, "devicePlotHeaders", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Brands_entity_1.Brands, (brands) => brands.devicePlots),
    (0, typeorm_1.JoinColumn)([{ name: "brand_id", referencedColumnName: "id" }]),
    __metadata("design:type", Brands_entity_1.Brands)
], DevicePlots.prototype, "brand", void 0);
exports.DevicePlots = DevicePlots = __decorate([
    (0, typeorm_1.Index)("device_plots_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("device_plots", { schema: "public" })
], DevicePlots);
//# sourceMappingURL=DevicePlots.entity.js.map