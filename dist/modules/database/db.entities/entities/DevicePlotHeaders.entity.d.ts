import { DevicePlotHeaderTypes } from "./DevicePlotHeaderTypes.entity";
import { DevicePlots } from "./DevicePlots.entity";
export declare class DevicePlotHeaders {
    id: number;
    devicePlotId: number;
    position: number;
    name: string | null;
    description: string | null;
    haveTypes: number | null;
    createdAt: Date;
    updatedAt: Date | null;
    devicePlotHeaderTypes: DevicePlotHeaderTypes[];
    devicePlot: DevicePlots;
}
