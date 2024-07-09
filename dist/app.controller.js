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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("./modules/database/db.service");
const m8_reports_service_1 = require("./modules/m8_reports/m8_reports.service");
let AppController = class AppController {
    constructor(customersService, usersService, databaseService, dynamicEntityService, reportsService, schedulerService) {
        this.customersService = customersService;
        this.usersService = usersService;
        this.databaseService = databaseService;
        this.dynamicEntityService = dynamicEntityService;
        this.reportsService = reportsService;
        this.schedulerService = schedulerService;
        this.databaseService.verifyConnection(dynamicEntityService.getEntityByName('Customers'));
    }
    async scheduleCronJob() {
        return await this.schedulerService.scheduleCronJob();
    }
    async getentity(entityName) {
        return this.dynamicEntityService.findAllSeparated(entityName);
    }
    async getSearch(entityName, conditions) {
        console.log(conditions);
        return this.dynamicEntityService.search(entityName, conditions);
    }
    async editEntity(entityName, condition, data) {
        return this.dynamicEntityService.edit(entityName, condition, data);
    }
    async insertEntity(entityName, data) {
        return this.dynamicEntityService.insert(entityName, data);
    }
    async removeEntity(entityName, id) {
        return this.dynamicEntityService.remove(entityName, id);
    }
    async getSearchField(entityName, conditions, fields) {
        const fieldsArray = fields.split(',');
        console.log(conditions);
        return this.dynamicEntityService.searchCamp(entityName, conditions, fieldsArray);
    }
    async getSearchFieldRelation(entityName, conditions, fields, relations) {
        const fieldsArray = fields.split(',');
        const relationsArray = relations ? relations.split(',') : [];
        const response = await this.dynamicEntityService.searchCampWithRelations(entityName, conditions, fieldsArray, relationsArray);
        return response;
    }
    async consultaJSON(unityId) {
        return this.reportsService.consultTank(unityId);
    }
    async registerDayBefore(unityId) {
        return this.reportsService.registerDayBefore(unityId);
    }
    async updateDayBefore(id, data) {
        return this.reportsService.updateDayBefore(id, data.resultGal, data.resultKm, data.rendimiento);
    }
    async updateFuelConsumption(id, data) {
        return this.reportsService.updateFuelConsumption(id, data.fuel_quantity, data.price, data.car_mileage, data.created_at, data.ruta);
    }
    async reportHoursWorked(data, entityName) {
        return this.reportsService.reportHoursworked(entityName, data);
    }
    async reportManagerial(data, entityName) {
        return this.reportsService.reportManagerial(entityName, data);
    }
    async getIndex() {
        return 'Welcome to my application!';
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('schedule'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "scheduleCronJob", null);
__decorate([
    (0, common_1.Get)(':entityName'),
    __param(0, (0, common_1.Param)('entityName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getentity", null);
__decorate([
    (0, common_1.Post)('search/:entityName'),
    __param(0, (0, common_1.Param)('entityName')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getSearch", null);
__decorate([
    (0, common_1.Patch)('edit/:entityName/:condition'),
    __param(0, (0, common_1.Param)('entityName')),
    __param(1, (0, common_1.Param)('condition')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "editEntity", null);
__decorate([
    (0, common_1.Post)('insert/:entityName'),
    __param(0, (0, common_1.Param)('entityName')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "insertEntity", null);
__decorate([
    (0, common_1.Patch)('delete/:entityName/:id'),
    __param(0, (0, common_1.Param)('entityName')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "removeEntity", null);
__decorate([
    (0, common_1.Post)('searchField/:entityName'),
    __param(0, (0, common_1.Param)('entityName')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('fields')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getSearchField", null);
__decorate([
    (0, common_1.Post)('searchFieldRelation/:entityName'),
    __param(0, (0, common_1.Param)('entityName')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('fields')),
    __param(3, (0, common_1.Query)('relations')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, String, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getSearchFieldRelation", null);
__decorate([
    (0, common_1.Get)('report/consult-tank'),
    __param(0, (0, common_1.Query)('unity_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "consultaJSON", null);
__decorate([
    (0, common_1.Post)('registerDayBefore/:unityId'),
    __param(0, (0, common_1.Param)('unityId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "registerDayBefore", null);
__decorate([
    (0, common_1.Patch)('update-day-before/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateDayBefore", null);
__decorate([
    (0, common_1.Patch)('update-fuelConsumption/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateFuelConsumption", null);
__decorate([
    (0, common_1.Patch)('report-hours-worked/:entityName'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('entityName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "reportHoursWorked", null);
__decorate([
    (0, common_1.Patch)('report-managerial/:entityName'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('entityName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "reportManagerial", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getIndex", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)('app'),
    __param(5, (0, common_1.Inject)(db_service_1.SchedulerService)),
    __metadata("design:paramtypes", [db_service_1.CustomerService,
        db_service_1.UsersService,
        db_service_1.DatabaseService,
        db_service_1.DynamicEntityService,
        m8_reports_service_1.ReportsService,
        db_service_1.SchedulerService])
], AppController);
//# sourceMappingURL=app.controller.js.map