import { Plans } from "./Plans.entity";
export declare class Alerts {
    id: number;
    name: string | null;
    description: string | null;
    status: string | null;
    plans: Plans[];
}
