import { EventTypes } from "./EventTypes.entity";
import { MobileUnities } from "./MobileUnities.entity";
export declare class HabitosConduccion {
    id: number;
    idEvent: number;
    serverDateHour: Date;
    deviceDateHour: Date;
    direccion: string | null;
    velocity: number | null;
    course: string | null;
    battery: number | null;
    mileage: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    eventType: EventTypes;
    unity: MobileUnities;
}
