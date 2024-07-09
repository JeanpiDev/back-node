import { MobileUnities } from "./MobileUnities.entity";
import { Customers } from "./Customers.entity";
export declare class GeographicalEvents {
    id: number;
    tipoNotificacion: string;
    recursoId: number;
    fecha: Date | null;
    relation: string | null;
    activoMovil: MobileUnities;
    customer: Customers;
}
