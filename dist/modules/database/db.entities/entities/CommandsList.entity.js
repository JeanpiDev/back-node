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
exports.CommandsList = void 0;
const typeorm_1 = require("typeorm");
let CommandsList = class CommandsList {
};
exports.CommandsList = CommandsList;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], CommandsList.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "name", length: 150 }),
    __metadata("design:type", String)
], CommandsList.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "visible_on_app", default: () => "0" }),
    __metadata("design:type", Number)
], CommandsList.prototype, "visibleOnApp", void 0);
exports.CommandsList = CommandsList = __decorate([
    (0, typeorm_1.Index)("commands_list_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("commands_list", { schema: "public" })
], CommandsList);
//# sourceMappingURL=CommandsList.entity.js.map