import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Simcards } from "./Simcards.entity";

@Index("simcard_plan_pkey", ["id"], { unique: true })
@Entity("simcard_plan", { schema: "public" })
export class SimcardPlan {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 45 })
  name: string;

  @Column("integer", { name: "cutting_day" })
  cuttingDay: number;

  @Column("smallint", { name: "status", default: () => "1" })
  status: number;

  @OneToMany(() => Simcards, (simcards) => simcards.simcardPlan)
  simcards: Simcards[];
}
