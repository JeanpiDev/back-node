import { MobileUnities } from "./MobileUnities.entity";
import { MobileUnityStatus } from "./MobileUnityStatus.entity";
export declare class MobileUnityStatusHistory {
    id: number;
    startDate: Date | null;
    endDate: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    comment: string | null;
    mobileUnity: MobileUnities;
    status: MobileUnityStatus;
}
