import { MobileUnities } from "./MobileUnities.entity";
import { MobileUnitySubclass } from "./MobileUnitySubclass.entity";
import { MobileUnityType } from "./MobileUnityType.entity";
export declare class MobileUnityClass {
    id: number;
    name: string | null;
    status: number;
    mobileUnities: MobileUnities[];
    mobileUnitySubclasses: MobileUnitySubclass[];
    mobileUnityTypes: MobileUnityType[];
}
