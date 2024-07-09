import { MobileUnities } from "./MobileUnities.entity";
import { MobileUnityStatusHistory } from "./MobileUnityStatusHistory.entity";
export declare class MobileUnityStatus {
    id: number;
    name: string;
    status: number | null;
    mobileUnities: MobileUnities[];
    mobileUnityStatusHistories: MobileUnityStatusHistory[];
}
