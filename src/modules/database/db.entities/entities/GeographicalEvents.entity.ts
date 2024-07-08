import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MobileUnities } from "./MobileUnities.entity";
import { Customers } from "./Customers.entity";

@Index("geographical_events_pkey", ["id"], { unique: true })
@Entity("geographical_events", { schema: "public" })
export class GeographicalEvents {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "tipo_notificacion" })
  tipoNotificacion: string;

  @PrimaryGeneratedColumn({ type: "integer", name: "recurso_id" })
  recursoId: number;

  @Column("timestamp without time zone", { name: "fecha", nullable: true })
  fecha: Date | null;

  @Column("character varying", {
    name: "relation",
    nullable: true,
    length: 255,
  })
  relation: string | null;

  @ManyToOne(
    () => MobileUnities,
    (mobileUnities) => mobileUnities.geographicalEvents
  )
  @JoinColumn([{ name: "activo_movil", referencedColumnName: "id" }])
  activoMovil: MobileUnities;

  @ManyToOne(() => Customers, (customers) => customers.geographicalEvents)
  @JoinColumn([{ name: "customer", referencedColumnName: "id" }])
  customer: Customers;
}
