import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(
  "idxmobile_unity_event_geographical_resource_notification_geogra",
  ["geographicalResourceNotificationId"],
  {}
)
@Index("mobile_unity_event_geographical_resource_notification_pkey", ["id"], {
  unique: true,
})
@Index(
  "idxmobile_unity_event_geographical_resource_notification_mobile",
  ["mobileUnityEventId"],
  {}
)
@Entity("mobile_unity_event_geographical_resource_notification", {
  schema: "public",
})
export class MobileUnityEventGeographicalResourceNotification {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "geographical_resource_notification_id" })
  geographicalResourceNotificationId: number;

  @Column("integer", { name: "mobile_unity_event_id" })
  mobileUnityEventId: number;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
