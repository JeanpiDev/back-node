import { Repository } from 'typeorm';
import { EntitiesService } from '../../database/db.entities/entities.service';
import { Parameters, WebserviceBrand, WebserviceLine, WebserviceLogs, WebserviceTypeMobileUnity } from '../../database/db.entities/db.entities';
export declare class ParametersService extends EntitiesService<Parameters> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<Parameters>);
}
export declare class WebserviceBrandService extends EntitiesService<WebserviceBrand> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<WebserviceBrand>);
}
export declare class WebserviceLineService extends EntitiesService<WebserviceLine> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<WebserviceLine>);
}
export declare class WebserviceLogsService extends EntitiesService<WebserviceLogs> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<WebserviceLogs>);
}
export declare class WebserviceTypeMobileUnityService extends EntitiesService<WebserviceTypeMobileUnity> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<WebserviceTypeMobileUnity>);
}
