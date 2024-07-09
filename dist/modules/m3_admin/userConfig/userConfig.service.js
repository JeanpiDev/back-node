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
exports.RolesService = exports.RoleHasPermissionsService = exports.PermissionsService = exports.ModelHasRolesService = exports.ModelHasPermissionsService = exports.DocumentTypesService = exports.ConsultantsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_service_1 = require("../../database/db.entities/entities.service");
const db_entities_1 = require("../../database/db.entities/db.entities");
let ConsultantsService = class ConsultantsService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.ConsultantsService = ConsultantsService;
exports.ConsultantsService = ConsultantsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.Consultants)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ConsultantsService);
let DocumentTypesService = class DocumentTypesService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.DocumentTypesService = DocumentTypesService;
exports.DocumentTypesService = DocumentTypesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.DocumentTypes)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DocumentTypesService);
let ModelHasPermissionsService = class ModelHasPermissionsService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.ModelHasPermissionsService = ModelHasPermissionsService;
exports.ModelHasPermissionsService = ModelHasPermissionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.ModelHasPermissions)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ModelHasPermissionsService);
let ModelHasRolesService = class ModelHasRolesService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.ModelHasRolesService = ModelHasRolesService;
exports.ModelHasRolesService = ModelHasRolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.ModelHasRoles)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ModelHasRolesService);
let PermissionsService = class PermissionsService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.PermissionsService = PermissionsService;
exports.PermissionsService = PermissionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.Permissions)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PermissionsService);
let RoleHasPermissionsService = class RoleHasPermissionsService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.RoleHasPermissionsService = RoleHasPermissionsService;
exports.RoleHasPermissionsService = RoleHasPermissionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.RoleHasPermissions)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RoleHasPermissionsService);
let RolesService = class RolesService extends entities_service_1.EntitiesService {
    constructor(E_Repository) {
        super(E_Repository);
        this.E_Repository = E_Repository;
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(db_entities_1.Roles)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RolesService);
//# sourceMappingURL=userConfig.service.js.map