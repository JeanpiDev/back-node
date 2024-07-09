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
exports.WebserviceTypeMobileUnityService = exports.WebserviceLogsService = exports.WebserviceLineService = exports.WebserviceBrandService = exports.ParametersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_service_1 = require("../../database/db.entities/entities.service");
const db_entities_1 = require("../../database/db.entities/db.entities");
let ParametersService = class ParametersService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.ParametersService = ParametersService;
exports.ParametersService = ParametersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.Parameters)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ParametersService);
let WebserviceBrandService = class WebserviceBrandService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.WebserviceBrandService = WebserviceBrandService;
exports.WebserviceBrandService = WebserviceBrandService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.WebserviceBrand)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WebserviceBrandService);
let WebserviceLineService = class WebserviceLineService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.WebserviceLineService = WebserviceLineService;
exports.WebserviceLineService = WebserviceLineService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.WebserviceLine)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WebserviceLineService);
let WebserviceLogsService = class WebserviceLogsService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.WebserviceLogsService = WebserviceLogsService;
exports.WebserviceLogsService = WebserviceLogsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.WebserviceLogs)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WebserviceLogsService);
let WebserviceTypeMobileUnityService = class WebserviceTypeMobileUnityService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.WebserviceTypeMobileUnityService = WebserviceTypeMobileUnityService;
exports.WebserviceTypeMobileUnityService = WebserviceTypeMobileUnityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.WebserviceTypeMobileUnity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WebserviceTypeMobileUnityService);
//# sourceMappingURL=webservices.service.js.map