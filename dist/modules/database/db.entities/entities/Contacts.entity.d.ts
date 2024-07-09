import { ContactTypes } from "./ContactTypes.entity";
import { Customers } from "./Customers.entity";
export declare class Contacts {
    id: number;
    contactTypeId: number;
    customerId: number;
    firstName: string;
    lastName: string;
    telephone: string | null;
    cellphone: string;
    email: string;
    contactType: ContactTypes;
    customer: Customers;
}
