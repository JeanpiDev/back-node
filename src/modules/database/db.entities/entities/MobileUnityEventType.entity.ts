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

@Index("idxmobile_unity_event_type_event_type_id", ["eventTypeId"], {})
@Index("mobile_unity_event_type_pkey", ["id"], { unique: true })
@Index("idxmobile_unity_event_type_mobile_unity_id", ["mobileUnityId"], {})
@Entity("mobile_unity_event_type", { schema: "public" })
export class MobileUnityEventType {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "mobile_unity_id" })
  mobileUnityId: number;

  @Column("integer", { name: "event_type_id", nullable: true })
  eventTypeId: number | null;

  @Column("smallint", { name: "push_notifications", default: () => "0" })
  pushNotifications: number;

  @Column("character varying", {
    name: "type",
    length: 55,
    default: () => "''",
  })
  type: string;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => EventTypes, (eventTypes) => eventTypes.mobileUnityEventTypes)
  @JoinColumn([{ name: "event_type_id", referencedColumnName: "id" }])
  eventType: EventTypes;

  @ManyToOne(
    () => MobileUnities,
    (mobileUnities) => mobileUnities.mobileUnityEventTypes,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "mobile_unity_id", referencedColumnName: "id" }])
  mobileUnity: MobileUnities;
}
