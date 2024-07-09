import { Customers } from "./Customers.entity";
import { GeographicalResourcesNotifications } from "./GeographicalResourcesNotifications.entity";
export declare class GeographicalResources {
    id: number;
    customerId: number;
    type: number | null;
    name: string | null;
    color: string | null;
    isPrivate: number | null;
    points: string | null;
    applyForAddress: number | null;
    status: number;
    pointsG: string | null;
    customer: Customers;
    geographicalResourcesNotifications: GeographicalResourcesNotifications[];
}
