import { MobileUnities } from "./MobileUnities.entity";
import { Customers } from "./Customers.entity";
export declare class MobileUnityGroups {
    id: number;
    customerId: number;
    name: string;
    status: number;
    mobileUnities: MobileUnities[];
    customer: Customers;
}
