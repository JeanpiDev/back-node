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
exports.NoveltyTypes = void 0;
const typeorm_1 = require("typeorm");
const EventTypes_entity_1 = require("./EventTypes.entity");
let NoveltyTypes = class NoveltyTypes {
};
exports.NoveltyTypes = NoveltyTypes;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], NoveltyTypes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "event_type_id" }),
    __metadata("design:type", Number)
], NoveltyTypes.prototype, "eventTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", length: 45 }),
    __metadata("design:type", String)
], NoveltyTypes.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "status", default: () => "1" }),
    __metadata("design:type", Number)
], NoveltyTypes.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => EventTypes_entity_1.EventTypes, (eventTypes) => eventTypes.noveltyTypes),
    (0, typeorm_1.JoinColumn)([{ name: "event_type_id", referencedColumnName: "id" }]),
    __metadata("design:type", EventTypes_entity_1.EventTypes)
], NoveltyTypes.prototype, "eventType", void 0);
exports.NoveltyTypes = NoveltyTypes = __decorate([
    (0, typeorm_1.Index)("idxnovelty_types_event_type_id", ["eventTypeId"], {}),
    (0, typeorm_1.Index)("novelty_types_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("novelty_types", { schema: "public" })
], NoveltyTypes);
//# sourceMappingURL=NoveltyTypes.entity.js.map