import { Cities } from "./Cities.entity";
import { Customers } from "./Customers.entity";
import { DriversDallas } from "./DriversDallas.entity";
import { MobileUnities } from "./MobileUnities.entity";
import { MobileUnityDrivers } from "./MobileUnityDrivers.entity";
export declare class Departments {
    id: number;
    name: string;
    cities: Cities[];
    customers: Customers[];
    driversDallas: DriversDallas[];
    mobileUnities: MobileUnities[];
    mobileUnityDrivers: MobileUnityDrivers[];
}
