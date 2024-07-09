import { Simcards } from "./Simcards.entity";
export declare class SimcardPlan {
    id: number;
    name: string;
    cuttingDay: number;
    status: number;
    simcards: Simcards[];
}
