import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { GeographicalResourceNotification } from "./GeographicalResourceNotification.entity";
import { GeographicalResources } from "./GeographicalResources.entity";

@Index(
  "idxgeographical_resources_notifications_geographical_resources_",
  ["geographicalResourcesId"],
  {}
)
@Index("geographical_resources_notifications_pkey", ["id"], { unique: true })
@Entity("geographical_resources_notifications", { schema: "public" })
export class GeographicalResourcesNotifications {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "geographical_resources_id" })
  geographicalResourcesId: number;

  @Column("smallint", { name: "type", nullable: true })
  type: number | null;

  @Column("smallint", { name: "unlimited", default: () => "0" })
  unlimited: number;

  @Column("date", { name: "start_date", nullable: true })
  startDate: string | null;

  @Column("date", { name: "end_date", nullable: true })
  endDate: string | null;

  @Column("smallint", { name: "apply_hour", default: () => "0" })
  applyHour: number;

  @Column("character varying", { name: "out_hour", nullable: true, length: 55 })
  outHour: string | null;

  @Column("character varying", {
    name: "entry_hour",
    nullable: true,
    length: 55,
  })
  entryHour: string | null;

  @Column("integer", { name: "periodicity", default: () => "0" })
  periodicity: number;

  @Column("text", { name: "emails", nullable: true })
  emails: string | null;

  @Column("double precision", {
    name: "distance",
    precision: 53,
    default: () => "0",
  })
  distance: number;

  @Column("smallint", { name: "status", nullable: true })
  status: number | null;

  @Column("smallint", { name: "push_notification", default: () => "1" })
  pushNotification: number;

  @OneToMany(
    () => GeographicalResourceNotification,
    (geographicalResourceNotification) =>
      geographicalResourceNotification.notification
  )
  geographicalResourceNotifications: GeographicalResourceNotification[];

  @ManyToOne(
    () => GeographicalResources,
    (geographicalResources) =>
      geographicalResources.geographicalResourcesNotifications
  )
  @JoinColumn([
    { name: "geographical_resources_id", referencedColumnName: "id" },
  ])
  geographicalResources: GeographicalResources;
}
