import { Customers } from "./Customers.entity";
import { DriversDallas } from "./DriversDallas.entity";
import { MobileUnityDrivers } from "./MobileUnityDrivers.entity";
export declare class DocumentTypes {
    id: number;
    name: string;
    customers: Customers[];
    driversDallas: DriversDallas[];
    mobileUnityDrivers: MobileUnityDrivers[];
}
