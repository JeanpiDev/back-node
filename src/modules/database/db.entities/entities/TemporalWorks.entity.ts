import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("temporal_works_pkey", ["id"], { unique: true })
@Entity("temporal_works", { schema: "public" })
export class TemporalWorks {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "unity_id", nullable: true })
  unityId: number | null;

  @Column("integer", { name: "event_type", nullable: true })
  eventType: number | null;

  @Column("character varying", { name: "addres", nullable: true, length: 255 })
  addres: string | null;

  @Column("double precision", {
    name: "mileage",
    nullable: true,
    precision: 53,
  })
  mileage: number | null;

  @Column("timestamp without time zone", {
    name: "device_date_hour",
    nullable: true,
  })
  deviceDateHour: Date | null;

  @Column("integer", { name: "id_mobile_unities", nullable: true })
  idMobileUnities: number | null;

  @Column("double precision", {
    name: "velocity",
    nullable: true,
    precision: 53,
  })
  velocity: number | null;
}
