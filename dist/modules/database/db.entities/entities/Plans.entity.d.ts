import { Customers } from "./Customers.entity";
import { Alerts } from "./Alerts.entity";
import { Users } from "./Users.entity";
export declare class Plans {
    id: number;
    name: string;
    description: string | null;
    usersLimit: number | null;
    centralMonitoringNotifications: number | null;
    centralMonitoringEventIds: string | null;
    maps: number | null;
    geographicalResourcesLimit: number | null;
    generalReportsAccess: number;
    selfMonitoring: number;
    canShareTracking: number;
    routesModuleAccess: number;
    appAccess: number;
    backgroundImage: string | null;
    status: number | null;
    createdAt: Date;
    updatedAt: Date | null;
    geoaddress: string | null;
    customers: Customers[];
    alerts: Alerts[];
    customers2: Customers[];
    users: Users[];
}
