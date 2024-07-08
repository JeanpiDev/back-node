import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customers } from "./Customers.entity";
import { Alerts } from "./Alerts.entity";
import { Users } from "./Users.entity";

@Index("plans_pkey", ["id"], { unique: true })
@Entity("plans", { schema: "public" })
export class Plans {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 45 })
  name: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("integer", { name: "users_limit", nullable: true })
  usersLimit: number | null;

  @Column("smallint", {
    name: "central_monitoring_notifications",
    nullable: true,
  })
  centralMonitoringNotifications: number | null;

  @Column("character varying", {
    name: "central_monitoring_event_ids",
    nullable: true,
    length: 255,
  })
  centralMonitoringEventIds: string | null;

  @Column("smallint", { name: "maps", nullable: true })
  maps: number | null;

  @Column("integer", { name: "geographical_resources_limit", nullable: true })
  geographicalResourcesLimit: number | null;

  @Column("smallint", { name: "general_reports_access", default: () => "0" })
  generalReportsAccess: number;

  @Column("smallint", { name: "self_monitoring", default: () => "0" })
  selfMonitoring: number;

  @Column("smallint", { name: "can_share_tracking", default: () => "0" })
  canShareTracking: number;

  @Column("smallint", { name: "routes_module_access", default: () => "0" })
  routesModuleAccess: number;

  @Column("smallint", { name: "app_access", default: () => "0" })
  appAccess: number;

  @Column("character varying", {
    name: "background_image",
    nullable: true,
    length: 45,
  })
  backgroundImage: string | null;

  @Column("smallint", { name: "status", nullable: true })
  status: number | null;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("character varying", {
    name: "geoaddress",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  geoaddress: string | null;

  @OneToMany(() => Customers, (customers) => customers.plan)
  customers: Customers[];

  @ManyToMany(() => Alerts, (alerts) => alerts.plans)
  alerts: Alerts[];

  @ManyToMany(() => Customers, (customers) => customers.plans)
  customers2: Customers[];

  @ManyToMany(() => Users, (users) => users.plans)
  @JoinTable({
    name: "plans_user",
    joinColumns: [{ name: "plan_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "user_id", referencedColumnName: "id" }],
    schema: "public",
  })
  users: Users[];
}
