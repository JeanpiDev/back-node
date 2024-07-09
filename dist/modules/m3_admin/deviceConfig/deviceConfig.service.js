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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimcardsService = exports.SimcardPlanService = exports.SimcardLogsService = exports.PlansService = exports.LogsService = exports.EventTypesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_service_1 = require("../../database/db.entities/entities.service");
const db_entities_1 = require("../../database/db.entities/db.entities");
let EventTypesService = class EventTypesService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.EventTypesService = EventTypesService;
exports.EventTypesService = EventTypesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.EventTypes)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EventTypesService);
let LogsService = class LogsService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.LogsService = LogsService;
exports.LogsService = LogsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.Logs)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LogsService);
let PlansService = class PlansService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.PlansService = PlansService;
exports.PlansService = PlansService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.Plans)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PlansService);
let SimcardLogsService = class SimcardLogsService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.SimcardLogsService = SimcardLogsService;
exports.SimcardLogsService = SimcardLogsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.SimcardLogs)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SimcardLogsService);
let SimcardPlanService = class SimcardPlanService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.SimcardPlanService = SimcardPlanService;
exports.SimcardPlanService = SimcardPlanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.SimcardPlan)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SimcardPlanService);
let SimcardsService = class SimcardsService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.SimcardsService = SimcardsService;
exports.SimcardsService = SimcardsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.Simcards)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SimcardsService);
//# sourceMappingURL=deviceConfig.service.js.map