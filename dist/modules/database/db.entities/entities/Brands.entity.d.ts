import { DevicePlots } from "./DevicePlots.entity";
import { DeviceTypes } from "./DeviceTypes.entity";
export declare class Brands {
    id: number;
    name: string;
    status: number;
    createdAt: Date | null;
    updatedAt: Date | null;
    devicePlots: DevicePlots[];
    deviceTypes: DeviceTypes[];
}
