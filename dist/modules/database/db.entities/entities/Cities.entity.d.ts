import { Departments } from "./Departments.entity";
import { Customers } from "./Customers.entity";
import { DriversDallas } from "./DriversDallas.entity";
import { MobileUnities } from "./MobileUnities.entity";
import { MobileUnityDrivers } from "./MobileUnityDrivers.entity";
export declare class Cities {
    id: number;
    departmentId: number;
    name: string;
    department: Departments;
    customers: Customers[];
    driversDallas: DriversDallas[];
    mobileUnities: MobileUnities[];
    mobileUnityDrivers: MobileUnityDrivers[];
}
