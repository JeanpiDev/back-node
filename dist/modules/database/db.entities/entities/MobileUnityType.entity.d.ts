import { MobileUnities } from "./MobileUnities.entity";
import { MobileUnityClass } from "./MobileUnityClass.entity";
export declare class MobileUnityType {
    id: number;
    classId: number;
    image: string;
    name: string | null;
    mobileUnities: MobileUnities[];
    class: MobileUnityClass;
}
