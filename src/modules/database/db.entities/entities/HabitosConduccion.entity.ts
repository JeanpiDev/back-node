import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EventTypes } from "./EventTypes.entity";
import { MobileUnities } from "./MobileUnities.entity";

@Index("hb_pkey", ["id"], { unique: true })
@Entity("habitos_conduccion", { schema: "public" })
export class HabitosConduccion {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @PrimaryGeneratedColumn({ type: "integer", name: "id_event" })
  idEvent: number;

  @Column("timestamp without time zone", { name: "server_date_hour" })
  serverDateHour: Date;

  @Column("timestamp without time zone", { name: "device_date_hour" })
  deviceDateHour: Date;

  @Column("character varying", {
    name: "direccion",
    nullable: true,
    length: 500,
    default: () => "NULL::character varying",
  })
  direccion: string | null;

  @Column("double precision", {
    name: "velocity",
    nullable: true,
    precision: 53,
  })
  velocity: number | null;

  @Column("character varying", {
    name: "course",
    nullable: true,
    length: 30,
    default: () => "NULL::character varying",
  })
  course: string | null;

  @Column("integer", { name: "battery", nullable: true })
  battery: number | null;

  @Column("character varying", {
    name: "mileage",
    nullable: true,
    length: 155,
    default: () => "NULL::character varying",
  })
  mileage: string | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => EventTypes, (eventTypes) => eventTypes.habitosConduccions)
  @JoinColumn([{ name: "event_type_id", referencedColumnName: "id" }])
  eventType: EventTypes;

  @ManyToOne(
    () => MobileUnities,
    (mobileUnities) => mobileUnities.habitosConduccions
  )
  @JoinColumn([{ name: "unity_id", referencedColumnName: "id" }])
  unity: MobileUnities;
}
