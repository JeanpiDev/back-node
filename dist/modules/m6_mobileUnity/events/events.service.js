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
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../../database/db.service");
const typeorm_1 = require("typeorm");
let EventsService = class EventsService {
    constructor(dynamicEntityService) {
        this.dynamicEntityService = dynamicEntityService;
    }
    async eventTypeName() {
        const field = ['id', 'name'];
        const eventType = await this.dynamicEntityService.searchCampAll('EventTypes', field);
        const eventTypeObject = eventType.reduce((acc, current) => {
            acc[current.id] = current.name;
            return acc;
        }, {});
        return eventTypeObject;
    }
    async queryMobileEvent(request) {
        const entityName = 'MobileUnityEvents';
        const fields = ['eventTypeId', 'unityId', 'id'];
        let result;
        let mobile_unities_ids = request.mobile_unities_ids;
        let event_type_id = request.event_type_id;
        const conditions = {
            deviceDateHour: (0, typeorm_1.Between)(new Date(request.start_date), new Date(request.end_date)),
            unityId: (0, typeorm_1.In)(mobile_unities_ids),
            eventTypeId: event_type_id,
        };
        const order = null;
        const query = await this.dynamicEntityService.searchCamp(entityName, conditions, fields, order);
        if (query.length > 0) {
            result = query.length;
        }
        else {
            result = 0;
        }
        return result;
    }
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DynamicEntityService])
], EventsService);
//# sourceMappingURL=events.service.js.map