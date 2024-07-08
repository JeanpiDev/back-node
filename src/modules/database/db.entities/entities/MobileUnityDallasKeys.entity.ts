import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customers } from "./Customers.entity";

@Index("mobile_unity_dallas_keys_pkey", ["id"], { unique: true })
@Index("idxmobile_unity_dallas_keys_customer_id", ["idCustomer"], {})
@Entity("mobile_unity_dallas_keys", { schema: "public" })
export class MobileUnityDallasKeys {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "code_number", length: 45 })
  codeNumber: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 100,
  })
  description: string | null;

  @Column("integer", { name: "status", nullable: true, default: () => "0" })
  status: number | null;

  @Column("integer", { name: "id_customer" })
  idCustomer: number;

  @Column("integer", { name: "id_devices", nullable: true })
  idDevices: number | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Customers, (customers) => customers.mobileUnityDallasKeys)
  @JoinColumn([{ name: "id_customer", referencedColumnName: "id" }])
  idCustomer2: Customers;
}
