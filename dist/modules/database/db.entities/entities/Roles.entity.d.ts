import { UsersTypes } from "./UsersTypes.entity";
import { Users } from "./Users.entity";
export declare class Roles {
    id: number;
    name: string;
    guardName: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    userType: UsersTypes;
    users: Users[];
}
