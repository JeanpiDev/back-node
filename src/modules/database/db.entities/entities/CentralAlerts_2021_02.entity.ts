import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("central_alerts_2021_02_pkey", ["id"], { unique: true })
@Entity("central_alerts_2021_02", { schema: "public" })
export class CentralAlerts_2021_02 {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "unity_id" })
  unityId: number;

  @Column("integer", { name: "event_type_id" })
  eventTypeId: number;

  @Column("integer", { name: "mobile_unity_event_id" })
  mobileUnityEventId: number;

  @Column("text", { name: "data", nullable: true })
  data: string | null;

  @Column("timestamp with time zone", { name: "date_read", nullable: true })
  dateRead: Date | null;

  @Column("timestamp with time zone", { name: "date_novelty", nullable: true })
  dateNovelty: Date | null;

  @Column("timestamp with time zone", { name: "date_close", nullable: true })
  dateClose: Date | null;

  @Column("smallint", { name: "status", nullable: true, default: () => "'1'" })
  status: number | null;

  @Column("timestamp with time zone", { name: "created", nullable: true })
  created: Date | null;

  @Column("timestamp with time zone", { name: "updated", nullable: true })
  updated: Date | null;

  @Column("integer", { name: "createdby", nullable: true })
  createdby: number | null;

  @Column("integer", { name: "updatedby", nullable: true })
  updatedby: number | null;
}
