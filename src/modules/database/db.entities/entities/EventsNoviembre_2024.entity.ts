import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("events_noviembre_2024_pkey", ["deviceDateHour", "id"], { unique: true })
@Index("events_noviembre_2024_device_date_hour_idx", ["deviceDateHour"], {})
@Index("events_noviembre_2024_event_type_id_idx", ["eventTypeId"], {})
@Index("events_noviembre_2024_id_driver_idx", ["idDriver"], {})
@Index("events_noviembre_2024_unity_id_idx", ["unityId"], {})
@Entity("events_noviembre_2024", { schema: "public" })
export class EventsNoviembre_2024 {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "device_plot_header_type_id", nullable: true })
  devicePlotHeaderTypeId: number | null;

  @Column("integer", { name: "unity_id" })
  unityId: number;

  @Column("integer", { name: "event_type_id", nullable: true })
  eventTypeId: number | null;

  @Column("character varying", {
    name: "event",
    nullable: true,
    length: 120,
    default: () => "NULL::character varying",
  })
  event: string | null;

  @Column("character varying", {
    name: "event_type",
    nullable: true,
    length: 120,
    default: () => "NULL::character varying",
  })
  eventType: string | null;

  @Column("character varying", {
    name: "location",
    nullable: true,
    length: 45,
    default: () => "NULL::character varying",
  })
  location: string | null;

  @Column("character varying", {
    name: "address",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  address: string | null;

  @Column("double precision", {
    name: "velocity",
    nullable: true,
    precision: 53,
  })
  velocity: number | null;

  @Column("timestamp without time zone", {
    name: "server_date_hour",
    nullable: true,
  })
  serverDateHour: Date | null;

  @Column("timestamp without time zone", {
    primary: true,
    name: "device_date_hour",
  })
  deviceDateHour: Date;

  @Column("character varying", {
    name: "plot",
    nullable: true,
    length: 500,
    default: () => "NULL::character varying",
  })
  plot: string | null;

  @Column("smallint", {
    name: "reported",
    nullable: true,
    default: () => "'0'",
  })
  reported: number | null;

  @Column("smallint", { name: "notified", default: () => "'0'" })
  notified: number;

  @Column("smallint", { name: "push_notified", default: () => "'0'" })
  pushNotified: number;

  @Column("character varying", {
    name: "mileage",
    nullable: true,
    length: 155,
    default: () => "NULL::character varying",
  })
  mileage: string | null;

  @Column("smallint", { name: "status", default: () => "'1'" })
  status: number;

  @Column("integer", { name: "battery", nullable: true, default: () => "100" })
  battery: number | null;

  @Column("smallint", { name: "degree", default: () => "'0'" })
  degree: number;

  @Column("integer", { name: "geofences_id", nullable: true })
  geofencesId: number | null;

  @Column("timestamp with time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp with time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("smallint", { name: "fix", nullable: true, default: () => "'1'" })
  fix: number | null;

  @Column("smallint", {
    name: "hourwork",
    nullable: true,
    default: () => "'0'",
  })
  hourwork: number | null;

  @Column("numeric", { name: "temperature", nullable: true })
  temperature: string | null;

  @Column("integer", { name: "id_driver", nullable: true })
  idDriver: number | null;
}
