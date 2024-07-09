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
exports.DynamicEntityService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const entityMap_1 = require("./entityMap");
const registry_service_1 = require("./registry.service");
let DynamicEntityService = class DynamicEntityService {
    constructor(moduleRef, registry) {
        this.moduleRef = moduleRef;
        this.registry = registry;
        this.registry.registerConstructor(this.constructor);
    }
    async getEntityByName(entityName) {
        const entity = entityMap_1.entityMap[entityName];
        if (!entity) {
            throw new Error(`Entity ${entityName} not found`);
        }
        return entity;
    }
    async getRepositoryByName(entityName) {
        const entity = await this.getEntityByName(entityName);
        return this.moduleRef.get(`${entity.name}Repository`, { strict: false });
    }
    async findAllSeparated(entityName) {
        this.repository = await this.getRepositoryByName(entityName);
        const usuarios = await this.repository.find();
        return this.separarHeadersYBody(usuarios);
    }
    async separarHeadersYBody(usuarios) {
        if (usuarios.length === 0) {
            return { headers: [], body: [] };
        }
        const headers = Object.keys(usuarios[0]);
        const body = usuarios;
        return { headers, body };
    }
    async findAll(entityName) {
        this.repository = await this.getRepositoryByName(entityName);
        return this.repository.find();
    }
    async findOneP(entityName, id) {
        this.repository = await this.getRepositoryByName(entityName);
        return this.repository.findOne(id);
    }
    async create(entityName, entityData) {
        this.repository = await this.getRepositoryByName(entityName);
        const entity = this.repository.create(entityData);
        return this.repository.save(entity);
    }
    async search(entityName, conditions, order) {
        this.repository = await this.getRepositoryByName(entityName);
        if (!order) {
            order = { id: 'DESC' };
        }
        const options = {
            where: conditions,
            order: order
        };
        return this.repository.find(options);
    }
    async searchCamp(entityName, conditions, fields, order) {
        if (!order) {
            order = { id: 'DESC' };
        }
        this.repository = await this.getRepositoryByName(entityName);
        const options = {
            where: conditions,
            select: fields,
            order: order
        };
        return this.repository.find(options);
    }
    async searchCampAll(entityName, fields, order) {
        if (!order) {
            order = { id: 'DESC' };
        }
        this.repository = await this.getRepositoryByName(entityName);
        const options = {
            select: fields,
            order: order
        };
        return this.repository.find(options);
    }
    async searchCampWithRelations(entityName, conditions, fields, relations) {
        this.repository = await this.getRepositoryByName(entityName);
        const options = {
            where: conditions,
            select: fields,
            relations: relations
        };
        return this.repository.find(options);
    }
    async searchCampWithJoin(entityName, conditions, fields, join) {
        this.repository = await this.getRepositoryByName(entityName);
        const query = await this.repository.createQueryBuilder(entityName.toLowerCase());
        query.select(fields);
        query.innerJoin(join.table, join.table, join.condition);
        const info = await query.getRawMany();
        return info;
    }
    async searchCampWithRelationsWC(entityName, fields, relations) {
        this.repository = await this.getRepositoryByName(entityName);
        const options = {
            relations: relations,
            select: fields,
        };
        return this.repository.find(options);
    }
    async edit(entityName, conditions, data) {
        this.repository = await this.getRepositoryByName(entityName);
        const response = await this.repository.update(conditions, data);
        return response;
    }
    async insert(entityName, data) {
        this.repository = await this.getRepositoryByName(entityName);
        const newEntity = this.repository.create(data);
        return this.repository.save(newEntity);
    }
    async remove(entityName, id) {
        this.repository = await this.getRepositoryByName(entityName);
        const deleteResult = await this.repository.delete(id);
        return deleteResult.affected > 0;
    }
    async formatTime(totalMiliseconds) {
        const hours = Math.floor(totalMiliseconds / 3600000);
        const minutes = Math.floor((totalMiliseconds % 3600000) / 60000);
        return `${hours}H y ${minutes}M`;
    }
};
exports.DynamicEntityService = DynamicEntityService;
exports.DynamicEntityService = DynamicEntityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.ModuleRef,
        registry_service_1.Registry])
], DynamicEntityService);
//# sourceMappingURL=dynamicentity.service.js.map