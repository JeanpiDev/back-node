import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Devices } from "./Devices.entity";
import { SimcardLogs } from "./SimcardLogs.entity";
import { SimcardPlan } from "./SimcardPlan.entity";

@Index("simcards_pkey", ["id"], { unique: true })
@Index("idxsimcards_simcard_plan_id", ["simcardPlanId"], {})
@Entity("simcards", { schema: "public" })
export class Simcards {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "simcard_plan_id" })
  simcardPlanId: number;

  @Column("integer", {
    name: "customer_id",
    nullable: true,
    default: () => "1",
  })
  customerId: number | null;

  @Column("character varying", { name: "imei", nullable: true, length: 45 })
  imei: string | null;

  @Column("character varying", { name: "line_number", length: 45 })
  lineNumber: string;

  @Column("smallint", { name: "status", default: () => "1" })
  status: number;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => Devices, (devices) => devices.simcard)
  devices: Devices[];

  @OneToMany(() => SimcardLogs, (simcardLogs) => simcardLogs.simcard)
  simcardLogs: SimcardLogs[];

  @ManyToOne(() => SimcardPlan, (simcardPlan) => simcardPlan.simcards)
  @JoinColumn([{ name: "simcard_plan_id", referencedColumnName: "id" }])
  simcardPlan: SimcardPlan;
}
