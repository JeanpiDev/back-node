import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customers } from "./Customers.entity";
import { DriversDallas } from "./DriversDallas.entity";
import { MobileUnityDrivers } from "./MobileUnityDrivers.entity";

@Index("document_types_pkey", ["id"], { unique: true })
@Entity("document_types", { schema: "public" })
export class DocumentTypes {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 45 })
  name: string;

  @OneToMany(() => Customers, (customers) => customers.documentType)
  customers: Customers[];

  @OneToMany(() => DriversDallas, (driversDallas) => driversDallas.documentType)
  driversDallas: DriversDallas[];

  @OneToMany(
    () => MobileUnityDrivers,
    (mobileUnityDrivers) => mobileUnityDrivers.documentType
  )
  mobileUnityDrivers: MobileUnityDrivers[];
}
