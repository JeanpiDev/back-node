import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Devices } from "./Devices.entity";
import { Simcards } from "./Simcards.entity";

@Index("idxsimcard_logs_device_id", ["deviceId"], {})
@Index("simcard_logs_pkey", ["id"], { unique: true })
@Index("idxsimcard_logs_simcard_id", ["simcardId"], {})
@Entity("simcard_logs", { schema: "public" })
export class SimcardLogs {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "device_id" })
  deviceId: number;

  @Column("integer", { name: "simcard_id" })
  simcardId: number;

  @Column("timestamp without time zone", { name: "start_date", nullable: true })
  startDate: Date | null;

  @Column("timestamp without time zone", { name: "end_date", nullable: true })
  endDate: Date | null;

  @Column("character varying", {
    name: "comments",
    nullable: true,
    length: 250,
  })
  comments: string | null;

  @ManyToOne(() => Devices, (devices) => devices.simcardLogs)
  @JoinColumn([{ name: "device_id", referencedColumnName: "id" }])
  device: Devices;

  @ManyToOne(() => Simcards, (simcards) => simcards.simcardLogs)
  @JoinColumn([{ name: "simcard_id", referencedColumnName: "id" }])
  simcard: Simcards;
}
