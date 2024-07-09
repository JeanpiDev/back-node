import { DevicePlotDeviceType } from "./DevicePlotDeviceType.entity";
import { Brands } from "./Brands.entity";
import { Variables } from "./Variables.entity";
import { Devices } from "./Devices.entity";
export declare class DeviceTypes {
    id: number;
    code: string;
    status: number | null;
    devicePlotDeviceTypes: DevicePlotDeviceType[];
    brand: Brands;
    variables: Variables[];
    devices: Devices[];
}
