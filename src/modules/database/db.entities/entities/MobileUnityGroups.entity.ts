import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MobileUnities } from "./MobileUnities.entity";
import { Customers } from "./Customers.entity";

@Index("idxmobile_unity_groups_customer_id", ["customerId"], {})
@Index("mobile_unity_groups_pkey", ["id"], { unique: true })
@Entity("mobile_unity_groups", { schema: "public" })
export class MobileUnityGroups {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "customer_id" })
  customerId: number;

  @Column("character varying", { name: "name", length: 45 })
  name: string;

  @Column("smallint", { name: "status", default: () => "1" })
  status: number;

  @ManyToMany(
    () => MobileUnities,
    (mobileUnities) => mobileUnities.mobileUnityGroups
  )
  @JoinTable({
    name: "mobile_unity_group",
    joinColumns: [{ name: "group_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "unity_id", referencedColumnName: "id" }],
    schema: "public",
  })
  mobileUnities: MobileUnities[];

  @ManyToOne(() => Customers, (customers) => customers.mobileUnityGroups)
  @JoinColumn([{ name: "customer_id", referencedColumnName: "id" }])
  customer: Customers;
}
