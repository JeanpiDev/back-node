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
exports.MobileUnityTypeService = exports.MobileUnitySubclassService = exports.MobileUnityStatusHistoryService = exports.MobileUnityStatusService = exports.MobileUnityLineService = exports.MobileUnityClassService = exports.MobileUnityBrandsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_service_1 = require("../../database/db.entities/entities.service");
const db_entities_1 = require("../../database/db.entities/db.entities");
let MobileUnityBrandsService = class MobileUnityBrandsService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.MobileUnityBrandsService = MobileUnityBrandsService;
exports.MobileUnityBrandsService = MobileUnityBrandsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.MobileUnityBrands)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MobileUnityBrandsService);
let MobileUnityClassService = class MobileUnityClassService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.MobileUnityClassService = MobileUnityClassService;
exports.MobileUnityClassService = MobileUnityClassService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.MobileUnityClass)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MobileUnityClassService);
let MobileUnityLineService = class MobileUnityLineService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.MobileUnityLineService = MobileUnityLineService;
exports.MobileUnityLineService = MobileUnityLineService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.MobileUnityLine)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MobileUnityLineService);
let MobileUnityStatusService = class MobileUnityStatusService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.MobileUnityStatusService = MobileUnityStatusService;
exports.MobileUnityStatusService = MobileUnityStatusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.MobileUnityStatus)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MobileUnityStatusService);
let MobileUnityStatusHistoryService = class MobileUnityStatusHistoryService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.MobileUnityStatusHistoryService = MobileUnityStatusHistoryService;
exports.MobileUnityStatusHistoryService = MobileUnityStatusHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.MobileUnityStatusHistory)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MobileUnityStatusHistoryService);
let MobileUnitySubclassService = class MobileUnitySubclassService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.MobileUnitySubclassService = MobileUnitySubclassService;
exports.MobileUnitySubclassService = MobileUnitySubclassService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.MobileUnitySubclass)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MobileUnitySubclassService);
let MobileUnityTypeService = class MobileUnityTypeService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.MobileUnityTypeService = MobileUnityTypeService;
exports.MobileUnityTypeService = MobileUnityTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.MobileUnityType)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MobileUnityTypeService);
//# sourceMappingURL=mobileUnitiesConfig.service.js.map