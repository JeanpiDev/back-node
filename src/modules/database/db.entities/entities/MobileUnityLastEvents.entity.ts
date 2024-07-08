import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("mobile_unity_last_events_pkey", ["id"], { unique: true })
@Index("idxmobile_unity_last_events_imei", ["imei"], {})
@Entity("mobile_unity_last_events", { schema: "public" })
export class MobileUnityLastEvents {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "port", nullable: true, length: 10 })
  port: string | null;

  @Column("character varying", { name: "imei", nullable: true, length: 45 })
  imei: string | null;

  @Column("text", { name: "last_plot", nullable: true })
  lastPlot: string | null;

  @Column("smallint", { name: "ignition_status", nullable: true })
  ignitionStatus: number | null;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp without time zone", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;
}
