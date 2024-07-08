import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("scheduled_reports_pkey", ["id"], { unique: true })
@Entity("scheduled_reports", { schema: "public" })
export class ScheduledReports {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "customer_id", nullable: true })
  customerId: number | null;

  @Column("character varying", {
    name: "type_report",
    nullable: true,
    length: 255,
  })
  typeReport: string | null;

  @Column("character varying", { name: "emails", nullable: true, length: 255 })
  emails: string | null;

  @Column("character varying", {
    name: "mobile_unities_ids",
    nullable: true,
    length: 255,
  })
  mobileUnitiesIds: string | null;

  @Column("character varying", {
    name: "event_type_id",
    nullable: true,
    length: 255,
  })
  eventTypeId: string | null;

  @Column("character varying", {
    name: "geofences_ids",
    nullable: true,
    length: 255,
  })
  geofencesIds: string | null;

  @Column("smallint", { name: "to_see_how", nullable: true })
  toSeeHow: number | null;

  @Column("integer", { name: "limited_velocity", nullable: true })
  limitedVelocity: number | null;

  @Column("smallint", { name: "periodicity", nullable: true })
  periodicity: number | null;

  @Column("interval", { name: "hour_send", nullable: true })
  hourSend: any | null;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("boolean", { name: "status", nullable: true })
  status: boolean | null;

  @Column("timestamp without time zone", { name: "last_send", nullable: true })
  lastSend: Date | null;

  @Column("character varying", {
    name: "send_date",
    nullable: true,
    length: 255,
  })
  sendDate: string | null;
}
