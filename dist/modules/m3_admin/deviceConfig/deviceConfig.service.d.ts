import { Repository } from 'typeorm';
import { EntitiesService } from '../../database/db.entities/entities.service';
import { EventTypes, Logs, Plans, SimcardLogs, SimcardPlan, Simcards } from '../../database/db.entities/db.entities';
export declare class EventTypesService extends EntitiesService<EventTypes> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<EventTypes>);
}
export declare class LogsService extends EntitiesService<Logs> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<Logs>);
}
export declare class PlansService extends EntitiesService<Plans> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<Plans>);
}
export declare class SimcardLogsService extends EntitiesService<SimcardLogs> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<SimcardLogs>);
}
export declare class SimcardPlanService extends EntitiesService<SimcardPlan> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<SimcardPlan>);
}
export declare class SimcardsService extends EntitiesService<Simcards> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<Simcards>);
}
