import { DevicePlotDeviceType } from "./DevicePlotDeviceType.entity";
import { DevicePlotHeaders } from "./DevicePlotHeaders.entity";
import { Brands } from "./Brands.entity";
export declare class DevicePlots {
    id: number;
    name: string | null;
    type: number | null;
    createdAt: Date;
    updatedAt: Date | null;
    devicePlotDeviceTypes: DevicePlotDeviceType[];
    devicePlotHeaders: DevicePlotHeaders[];
    brand: Brands;
}
