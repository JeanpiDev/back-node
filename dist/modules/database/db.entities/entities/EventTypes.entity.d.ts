import { DevicePlotDeviceType } from "./DevicePlotDeviceType.entity";
import { HabitosConduccion } from "./HabitosConduccion.entity";
import { MobileUnityEventType } from "./MobileUnityEventType.entity";
import { NoveltyTypes } from "./NoveltyTypes.entity";
export declare class EventTypes {
    id: number;
    name: string;
    status: number;
    color: string;
    centralMonitoring: number;
    visibleInApp: number;
    codeWs: number | null;
    devicePlotDeviceTypes: DevicePlotDeviceType[];
    habitosConduccions: HabitosConduccion[];
    mobileUnityEventTypes: MobileUnityEventType[];
    noveltyTypes: NoveltyTypes[];
}
