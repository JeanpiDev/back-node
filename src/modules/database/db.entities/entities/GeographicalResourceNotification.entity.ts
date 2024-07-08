import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { GeographicalResourcesNotifications } from "./GeographicalResourcesNotifications.entity";
import { MobileUnities } from "./MobileUnities.entity";

@Index(
  "idxgeographical_resource_notification_notification_id",
  ["notificationId"],
  {}
)
@Index(
  "geographical_resource_notification_pkey",
  ["notificationId", "unityId"],
  { unique: true }
)
@Index("idxgeographical_resource_notification_unity_id", ["unityId"], {})
@Entity("geographical_resource_notification", { schema: "public" })
export class GeographicalResourceNotification {
  @Column("integer", { primary: true, name: "unity_id" })
  unityId: number;

  @Column("integer", { primary: true, name: "notification_id" })
  notificationId: number;

  @Column("smallint", {
    name: "status_event",
    nullable: true,
    default: () => "0",
  })
  statusEvent: number | null;

  @ManyToOne(
    () => GeographicalResourcesNotifications,
    (geographicalResourcesNotifications) =>
      geographicalResourcesNotifications.geographicalResourceNotifications
  )
  @JoinColumn([{ name: "notification_id", referencedColumnName: "id" }])
  notification: GeographicalResourcesNotifications;

  @ManyToOne(
    () => MobileUnities,
    (mobileUnities) => mobileUnities.geographicalResourceNotifications
  )
  @JoinColumn([{ name: "unity_id", referencedColumnName: "id" }])
  unity: MobileUnities;
}
