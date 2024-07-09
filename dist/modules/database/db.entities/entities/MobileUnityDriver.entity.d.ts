import { MobileUnityDrivers } from "./MobileUnityDrivers.entity";
import { MobileUnities } from "./MobileUnities.entity";
export declare class MobileUnityDriver {
    unityId: number;
    driverId: number;
    startDate: Date | null;
    endDate: Date | null;
    driver: MobileUnityDrivers;
    unity: MobileUnities;
}
