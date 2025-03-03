import { Contacts } from "./Contacts.entity";
import { Cities } from "./Cities.entity";
import { Departments } from "./Departments.entity";
import { DocumentTypes } from "./DocumentTypes.entity";
import { Plans } from "./Plans.entity";
import { Templates } from "./Templates.entity";
import { UsersTypes } from "./UsersTypes.entity";
import { Devices } from "./Devices.entity";
import { GeographicalEvents } from "./GeographicalEvents.entity";
import { GeographicalResources } from "./GeographicalResources.entity";
import { MobileUnityAlerts } from "./MobileUnityAlerts.entity";
import { MobileUnityDallasKeys } from "./MobileUnityDallasKeys.entity";
import { MobileUnityGroups } from "./MobileUnityGroups.entity";
import { Users } from "./Users.entity";
export declare class Customers {
    id: number;
    departmentId: number;
    cityId: number;
    consultantId: number | null;
    planId: number | null;
    resellerId: number | null;
    userTypeId: number;
    templateId: number | null;
    documentTypeId: number;
    documentNumber: string;
    firstName: string | null;
    lastName: string | null;
    fullName: string;
    telephone: string | null;
    cellphone: string | null;
    address: string | null;
    email: string;
    birthdate: string | null;
    contractNumber: string | null;
    contractStartDate: string | null;
    contractEndDate: string | null;
    contractFile: string | null;
    slug: string | null;
    subdomain: string | null;
    image: string | null;
    backgroundImage: string | null;
    imageLogo: string | null;
    color: string | null;
    status: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    contacts: Contacts[];
    city: Cities;
    department: Departments;
    documentType: DocumentTypes;
    plan: Plans;
    reseller: Customers;
    customers: Customers[];
    template: Templates;
    userType: UsersTypes;
    devices: Devices[];
    geographicalEvents: GeographicalEvents[];
    geographicalResources: GeographicalResources[];
    mobileUnityAlerts: MobileUnityAlerts[];
    mobileUnityDallasKeys: MobileUnityDallasKeys[];
    mobileUnityGroups: MobileUnityGroups[];
    plans: Plans[];
    users: Users[];
}
