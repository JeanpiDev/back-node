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
exports.ShareTracking = void 0;
const typeorm_1 = require("typeorm");
let ShareTracking = class ShareTracking {
};
exports.ShareTracking = ShareTracking;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], ShareTracking.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "start_date", nullable: true }),
    __metadata("design:type", Date)
], ShareTracking.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "end_date", nullable: true }),
    __metadata("design:type", Date)
], ShareTracking.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "url_share",
        nullable: true,
        length: 200,
    }),
    __metadata("design:type", String)
], ShareTracking.prototype, "urlShare", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "mobile_unity_id", nullable: true }),
    __metadata("design:type", Number)
], ShareTracking.prototype, "mobileUnityId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "token", nullable: true, length: 45 }),
    __metadata("design:type", String)
], ShareTracking.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "emails", nullable: true, length: 255 }),
    __metadata("design:type", String)
], ShareTracking.prototype, "emails", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "token_user", length: 500 }),
    __metadata("design:type", String)
], ShareTracking.prototype, "tokenUser", void 0);
exports.ShareTracking = ShareTracking = __decorate([
    (0, typeorm_1.Entity)("share_tracking", { schema: "public" })
], ShareTracking);
//# sourceMappingURL=ShareTracking.entity.js.map