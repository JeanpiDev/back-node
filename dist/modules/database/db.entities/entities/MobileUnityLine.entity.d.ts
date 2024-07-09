import { Devices } from "./Devices.entity";
import { MobileUnities } from "./MobileUnities.entity";
export declare class MobileUnityLine {
    id: number;
    name: string | null;
    devices: Devices[];
    mobileUnities: MobileUnities[];
}
