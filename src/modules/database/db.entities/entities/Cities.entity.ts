import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Departments } from "./Departments.entity";
import { Customers } from "./Customers.entity";
import { DriversDallas } from "./DriversDallas.entity";
import { MobileUnities } from "./MobileUnities.entity";
import { MobileUnityDrivers } from "./MobileUnityDrivers.entity";

@Index("idxcities_department_id", ["departmentId"], {})
@Index("cities_pkey", ["id"], { unique: true })
@Entity("cities", { schema: "public" })
export class Cities {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "department_id" })
  departmentId: number;

  @Column("character varying", { name: "name", length: 45 })
  name: string;

  @ManyToOne(() => Departments, (departments) => departments.cities)
  @JoinColumn([{ name: "department_id", referencedColumnName: "id" }])
  department: Departments;

  @OneToMany(() => Customers, (customers) => customers.city)
  customers: Customers[];

  @OneToMany(() => DriversDallas, (driversDallas) => driversDallas.city)
  driversDallas: DriversDallas[];

  @OneToMany(() => MobileUnities, (mobileUnities) => mobileUnities.city)
  mobileUnities: MobileUnities[];

  @OneToMany(
    () => MobileUnityDrivers,
    (mobileUnityDrivers) => mobileUnityDrivers.city
  )
  mobileUnityDrivers: MobileUnityDrivers[];
}
