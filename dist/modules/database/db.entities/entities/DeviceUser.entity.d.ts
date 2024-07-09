import { Devices } from "./Devices.entity";
import { Users } from "./Users.entity";
export declare class DeviceUser {
    id: number;
    deviceId: number;
    userId: number;
    createdAt: Date | null;
    updatedAt: Date;
    device: Devices;
    user: Users;
}
