import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cities } from "./Cities.entity";
import { Customers } from "./Customers.entity";
import { DriversDallas } from "./DriversDallas.entity";
import { MobileUnities } from "./MobileUnities.entity";
import { MobileUnityDrivers } from "./MobileUnityDrivers.entity";

@Index("departments_pkey", ["id"], { unique: true })
@Entity("departments", { schema: "public" })
export class Departments {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 45 })
  name: string;

  @OneToMany(() => Cities, (cities) => cities.department)
  cities: Cities[];

  @OneToMany(() => Customers, (customers) => customers.department)
  customers: Customers[];

  @OneToMany(() => DriversDallas, (driversDallas) => driversDallas.department)
  driversDallas: DriversDallas[];

  @OneToMany(() => MobileUnities, (mobileUnities) => mobileUnities.department)
  mobileUnities: MobileUnities[];

  @OneToMany(
    () => MobileUnityDrivers,
    (mobileUnityDrivers) => mobileUnityDrivers.department
  )
  mobileUnityDrivers: MobileUnityDrivers[];
}
