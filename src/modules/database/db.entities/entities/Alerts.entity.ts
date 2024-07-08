import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Plans } from "./Plans.entity";

@Index("alerts_pkey", ["id"], { unique: true })
@Entity("alerts", { schema: "public" })
export class Alerts {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 250,
  })
  description: string | null;

  @Column("character varying", { name: "status", nullable: true, length: 45 })
  status: string | null;

  @ManyToMany(() => Plans, (plans) => plans.alerts)
  @JoinTable({
    name: "plan_alert",
    joinColumns: [{ name: "alert_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "plan_id", referencedColumnName: "id" }],
    schema: "public",
  })
  plans: Plans[];
}
