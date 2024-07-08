import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("notifications_pkey", ["id"], { unique: true })
@Entity("notifications", { schema: "public" })
export class Notifications {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "event_type_id" })
  eventTypeId: number;

  @Column("integer", { name: "customer_id" })
  customerId: number;

  @Column("character varying", { name: "mobile_unity_id", length: 255 })
  mobileUnityId: string;

  @Column("character varying", { name: "emails", nullable: true, length: 255 })
  emails: string | null;

  @Column("smallint", { name: "notification_push" })
  notificationPush: number;

  @Column("smallint", { name: "notification_email" })
  notificationEmail: number;

  @Column("smallint", { name: "status" })
  status: number;
}
