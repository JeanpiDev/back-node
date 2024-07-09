import { Devices } from "./Devices.entity";
import { SimcardLogs } from "./SimcardLogs.entity";
import { SimcardPlan } from "./SimcardPlan.entity";
export declare class Simcards {
    id: number;
    simcardPlanId: number;
    customerId: number | null;
    imei: string | null;
    lineNumber: string;
    status: number;
    createdAt: Date | null;
    updatedAt: Date | null;
    devices: Devices[];
    simcardLogs: SimcardLogs[];
    simcardPlan: SimcardPlan;
}
