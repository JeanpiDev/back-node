import { MobileUnitiesService, EventsService } from '../database/db.service';
export declare class MobileUnitiesController {
    private readonly mobileUnitiesService;
    private readonly eventsService;
    constructor(mobileUnitiesService: MobileUnitiesService, eventsService: EventsService);
}
