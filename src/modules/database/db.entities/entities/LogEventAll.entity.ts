import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("log_event_all_pkey", ["id"], { unique: true })
@Entity("log_event_all", { schema: "public" })
export class LogEventAll {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "imei", length: 45 })
  imei: string;

  @Column("character varying", { name: "plot", length: 500 })
  plot: string;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;
}
