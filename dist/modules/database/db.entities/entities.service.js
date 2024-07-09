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
exports.EntitiesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let EntitiesService = class EntitiesService {
    constructor(rep) {
        this.rep = rep;
        this.repository = rep;
    }
    async findAllSeparated() {
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
    async findAll() {
        return await this.repository.find();
    }
    async create(customer) {
        return await this.repository.save(customer);
    }
    async search(conditions) {
        const options = { where: conditions };
        return this.repository.find(options);
    }
    async edit(conditions, data) {
        await this.repository.update(conditions, data);
        const options = { where: conditions };
        return this.repository.findOne(options) ?? null;
    }
    async insert(data) {
        const newEntity = this.repository.create(data);
        return this.repository.save(newEntity);
    }
    async remove(id) {
        const deleteResult = await this.repository.delete(id);
        return deleteResult.affected > 0;
    }
};
exports.EntitiesService = EntitiesService;
exports.EntitiesService = EntitiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Object)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EntitiesService);
//# sourceMappingURL=entities.service.js.map