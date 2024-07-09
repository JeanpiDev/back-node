import { EventTypes } from "./EventTypes.entity";
import { MobileUnities } from "./MobileUnities.entity";
export declare class MobileUnityEventType {
    id: number;
    mobileUnityId: number;
    eventTypeId: number | null;
    pushNotifications: number;
    type: string;
    createdAt: Date;
    updatedAt: Date | null;
    eventType: EventTypes;
    mobileUnity: MobileUnities;
}
