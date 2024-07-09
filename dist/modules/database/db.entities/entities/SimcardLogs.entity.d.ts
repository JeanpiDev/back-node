import { Devices } from "./Devices.entity";
import { Simcards } from "./Simcards.entity";
export declare class SimcardLogs {
    id: number;
    deviceId: number;
    simcardId: number;
    startDate: Date | null;
    endDate: Date | null;
    comments: string | null;
    device: Devices;
    simcard: Simcards;
}
