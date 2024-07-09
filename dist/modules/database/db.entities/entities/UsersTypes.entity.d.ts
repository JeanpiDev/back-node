import { Customers } from "./Customers.entity";
import { Roles } from "./Roles.entity";
export declare class UsersTypes {
    id: number;
    name: string;
    status: number | null;
    customers: Customers[];
    roles: Roles[];
}
