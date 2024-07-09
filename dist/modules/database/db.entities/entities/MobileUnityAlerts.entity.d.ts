import { MobileUnities } from "./MobileUnities.entity";
import { Customers } from "./Customers.entity";
export declare class MobileUnityAlerts {
    id: number;
    customerId: number;
    name: string;
    emails: string | null;
    pushNotification: number;
    status: number;
    mobileUnities: MobileUnities[];
    customer: Customers;
}
