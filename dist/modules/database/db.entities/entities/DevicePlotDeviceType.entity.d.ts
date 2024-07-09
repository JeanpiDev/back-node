import { DevicePlots } from "./DevicePlots.entity";
import { DeviceTypes } from "./DeviceTypes.entity";
import { EventTypes } from "./EventTypes.entity";
export declare class DevicePlotDeviceType {
    id: number;
    deviceTypeId: number;
    devicePlotId: number;
    key: string | null;
    name: string | null;
    imeiPosition: number | null;
    devicePlot: DevicePlots;
    deviceType: DeviceTypes;
    eventType: EventTypes;
}
