import { DevicePlotHeaders } from "./DevicePlotHeaders.entity";
export declare class DevicePlotHeaderTypes {
    id: number;
    code: string | null;
    name: string | null;
    color: string;
    centralMonitoring: number;
    createdAt: Date;
    updatedAt: Date | null;
    devicePlotHeader: DevicePlotHeaders;
}
