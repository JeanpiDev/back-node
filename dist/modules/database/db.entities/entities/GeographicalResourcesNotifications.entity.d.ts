import { GeographicalResourceNotification } from "./GeographicalResourceNotification.entity";
import { GeographicalResources } from "./GeographicalResources.entity";
export declare class GeographicalResourcesNotifications {
    id: number;
    geographicalResourcesId: number;
    type: number | null;
    unlimited: number;
    startDate: string | null;
    endDate: string | null;
    applyHour: number;
    outHour: string | null;
    entryHour: string | null;
    periodicity: number;
    emails: string | null;
    distance: number;
    status: number | null;
    pushNotification: number;
    geographicalResourceNotifications: GeographicalResourceNotification[];
    geographicalResources: GeographicalResources;
}
