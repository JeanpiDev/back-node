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
exports.UserScheduledEmails = void 0;
const typeorm_1 = require("typeorm");
let UserScheduledEmails = class UserScheduledEmails {
};
exports.UserScheduledEmails = UserScheduledEmails;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], UserScheduledEmails.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "customer_id" }),
    __metadata("design:type", Number)
], UserScheduledEmails.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "unity_id" }),
    __metadata("design:type", Number)
], UserScheduledEmails.prototype, "unityId", void 0);
__decorate([
    (0, typeorm_1.Column)("json", { name: "data_send" }),
    __metadata("design:type", Object)
], UserScheduledEmails.prototype, "dataSend", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "email", nullable: true, length: 255 }),
    __metadata("design:type", String)
], UserScheduledEmails.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "status", nullable: true, default: () => "0" }),
    __metadata("design:type", Number)
], UserScheduledEmails.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "scheduled_start_time",
        nullable: true,
    }),
    __metadata("design:type", Date)
], UserScheduledEmails.prototype, "scheduledStartTime", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "scheduled_end_time",
        nullable: true,
    }),
    __metadata("design:type", Date)
], UserScheduledEmails.prototype, "scheduledEndTime", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "last_sent_time",
        nullable: true,
    }),
    __metadata("design:type", Date)
], UserScheduledEmails.prototype, "lastSentTime", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "created_at", nullable: true }),
    __metadata("design:type", Date)
], UserScheduledEmails.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], UserScheduledEmails.prototype, "updatedAt", void 0);
exports.UserScheduledEmails = UserScheduledEmails = __decorate([
    (0, typeorm_1.Index)("user_scheduled_emails_pkey", ["id"], { unique: true }),
    (0, typeorm_1.Entity)("user_scheduled_emails", { schema: "public" })
], UserScheduledEmails);
//# sourceMappingURL=UserScheduledEmails.entity.js.map