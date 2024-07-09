import { DeviceUser } from "./DeviceUser.entity";
import { Plans } from "./Plans.entity";
import { Customers } from "./Customers.entity";
import { Roles } from "./Roles.entity";
export declare class Users {
    id: number;
    customerId: number | null;
    roleId: number;
    name: string;
    email: string;
    password: string;
    rememberToken: string | null;
    language: string | null;
    image: string | null;
    emailNotifications: number | null;
    pushNotifications: number | null;
    deviceToken: string | null;
    platform: string | null;
    appVersion: string | null;
    status: number | null;
    lastDateConnection: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deviceUsers: DeviceUser[];
    plans: Plans[];
    customer: Customers;
    role: Roles;
}
