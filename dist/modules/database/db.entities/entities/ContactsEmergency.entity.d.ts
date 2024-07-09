import { MobileUnities } from "./MobileUnities.entity";
export declare class ContactsEmergency {
    id: number;
    unityId: number;
    level: number | null;
    firstName: string;
    lastName: string;
    telephone: string | null;
    cellphone: string;
    email: string;
    password: string | null;
    unity: MobileUnities;
}
