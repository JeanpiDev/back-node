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

@Index("idxmobile_unity_alerts_customer_id", ["customerId"], {})
@Index("mobile_unity_alerts_pkey", ["id"], { unique: true })
@Entity("mobile_unity_alerts", { schema: "public" })
export class MobileUnityAlerts {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "customer_id" })
  customerId: number;

  @Column("character varying", { name: "name", length: 45 })
  name: string;

  @Column("character varying", { name: "emails", nullable: true, length: 45 })
  emails: string | null;

  @Column("smallint", { name: "push_notification" })
  pushNotification: number;

  @Column("smallint", { name: "status", default: () => "1" })
  status: number;

  @ManyToMany(
    () => MobileUnities,
    (mobileUnities) => mobileUnities.mobileUnityAlerts
  )
  @JoinTable({
    name: "mobile_unity_alert",
    joinColumns: [
      { name: "mobile_unity_alert_id", referencedColumnName: "id" },
    ],
    inverseJoinColumns: [{ name: "unity_id", referencedColumnName: "id" }],
    schema: "public",
  })
  mobileUnities: MobileUnities[];

  @ManyToOne(() => Customers, (customers) => customers.mobileUnityAlerts)
  @JoinColumn([{ name: "customer_id", referencedColumnName: "id" }])
  customer: Customers;
}
