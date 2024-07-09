import { Repository } from 'typeorm';
import { EntitiesService } from '../../database/db.entities/entities.service';
import { MobileUnityBrands, MobileUnityClass, MobileUnityLine, MobileUnityStatus, MobileUnityStatusHistory, MobileUnitySubclass, MobileUnityType } from '../../database/db.entities/db.entities';
export declare class MobileUnityBrandsService extends EntitiesService<MobileUnityBrands> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<MobileUnityBrands>);
}
export declare class MobileUnityClassService extends EntitiesService<MobileUnityClass> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<MobileUnityClass>);
}
export declare class MobileUnityLineService extends EntitiesService<MobileUnityLine> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<MobileUnityLine>);
}
export declare class MobileUnityStatusService extends EntitiesService<MobileUnityStatus> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<MobileUnityStatus>);
}
export declare class MobileUnityStatusHistoryService extends EntitiesService<MobileUnityStatusHistory> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<MobileUnityStatusHistory>);
}
export declare class MobileUnitySubclassService extends EntitiesService<MobileUnitySubclass> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<MobileUnitySubclass>);
}
export declare class MobileUnityTypeService extends EntitiesService<MobileUnityType> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<MobileUnityType>);
}
