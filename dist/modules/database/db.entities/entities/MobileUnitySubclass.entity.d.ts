import { MobileUnities } from "./MobileUnities.entity";
import { MobileUnityClass } from "./MobileUnityClass.entity";
export declare class MobileUnitySubclass {
    id: number;
    classId: number;
    name: string;
    mobileUnities: MobileUnities[];
    class: MobileUnityClass;
}
