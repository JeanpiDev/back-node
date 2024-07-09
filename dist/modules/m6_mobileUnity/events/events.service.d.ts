import { DynamicEntityService } from '../../database/db.service';
export declare class EventsService {
    private readonly dynamicEntityService;
    constructor(dynamicEntityService: DynamicEntityService);
    eventTypeName(): Promise<any>;
    queryMobileEvent(request: any): Promise<any[]>;
}
