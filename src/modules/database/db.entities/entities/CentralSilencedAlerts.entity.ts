import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(
  "idxcentral_silenced_alerts_unity_id_event_type_id_status",
  ["eventTypeId", "status", "unityId"],
  {}
)
@Index("central_silenced_alerts_pkey", ["id"], { unique: true })
@Entity("central_silenced_alerts", { schema: "public" })
export class CentralSilencedAlerts {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "unity_id" })
  unityId: number;

  @Column("integer", { name: "event_type_id" })
  eventTypeId: number;

  @Column("smallint", { name: "status", nullable: true })
  status: number | null;

  @Column("timestamp without time zone", {
    name: "created",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  created: Date | null;

  @Column("timestamp without time zone", { name: "updated", nullable: true })
  updated: Date | null;

  @Column("integer", { name: "createdby", nullable: true })
  createdby: number | null;

  @Column("integer", { name: "updatedby", nullable: true })
  updatedby: number | null;
}
