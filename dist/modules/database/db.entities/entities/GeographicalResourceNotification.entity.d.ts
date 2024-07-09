import { GeographicalResourcesNotifications } from "./GeographicalResourcesNotifications.entity";
import { MobileUnities } from "./MobileUnities.entity";
export declare class GeographicalResourceNotification {
    unityId: number;
    notificationId: number;
    statusEvent: number | null;
    notification: GeographicalResourcesNotifications;
    unity: MobileUnities;
}
