import { Cities } from "./Cities.entity";
import { Departments } from "./Departments.entity";
import { DocumentTypes } from "./DocumentTypes.entity";
export declare class DriversDallas {
    id: number;
    documentNumber: string;
    idDallas: number | null;
    firstName: string | null;
    lastName: string | null;
    gender: string | null;
    birthdate: string | null;
    address: string | null;
    email: string | null;
    telephone: string | null;
    cellphone: string | null;
    driverLicenseNumber: string | null;
    driverLicenseDueDate: string | null;
    driverLicenseCategory: string | null;
    rh: string | null;
    image: string | null;
    status: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    customerId: number;
    city: Cities;
    department: Departments;
    documentType: DocumentTypes;
}
