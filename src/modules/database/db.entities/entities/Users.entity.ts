import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DeviceUser } from "./DeviceUser.entity";
import { Plans } from "./Plans.entity";
import { Customers } from "./Customers.entity";
import { Roles } from "./Roles.entity";

@Index("idxusers_customer_id", ["customerId"], {})
@Index("idxusers_email", ["email"], { unique: true })
@Index("users_pkey", ["id"], { unique: true })
@Index("idxusers_role_id", ["roleId"], {})
@Entity("users", { schema: "public" })
export class Users {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "customer_id", nullable: true })
  customerId: number | null;

  @Column("integer", { name: "role_id" })
  roleId: number;

  @Column("character varying", { name: "name", length: 191 })
  name: string;

  @Column("character varying", { name: "email", length: 191 })
  email: string;

  @Column("character varying", { name: "password", length: 191 })
  password: string;

  @Column("character varying", {
    name: "remember_token",
    nullable: true,
    length: 100,
  })
  rememberToken: string | null;

  @Column("character varying", {
    name: "language",
    nullable: true,
    length: 10,
    default: () => "'es'",
  })
  language: string | null;

  @Column("character varying", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("smallint", {
    name: "email_notifications",
    nullable: true,
    default: () => "1",
  })
  emailNotifications: number | null;

  @Column("smallint", {
    name: "push_notifications",
    nullable: true,
    default: () => "1",
  })
  pushNotifications: number | null;

  @Column("character varying", {
    name: "device_token",
    nullable: true,
    length: 255,
  })
  deviceToken: string | null;

  @Column("character varying", { name: "platform", nullable: true, length: 45 })
  platform: string | null;

  @Column("character varying", {
    name: "app_version",
    nullable: true,
    length: 10,
  })
  appVersion: string | null;

  @Column("smallint", { name: "status", nullable: true, default: () => "0" })
  status: number | null;

  @Column("timestamp without time zone", {
    name: "last_date_connection",
    nullable: true,
  })
  lastDateConnection: Date | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => DeviceUser, (deviceUser) => deviceUser.user)
  deviceUsers: DeviceUser[];

  @ManyToMany(() => Plans, (plans) => plans.users)
  plans: Plans[];

  @ManyToOne(() => Customers, (customers) => customers.users)
  @JoinColumn([{ name: "customer_id", referencedColumnName: "id" }])
  customer: Customers;

  @ManyToOne(() => Roles, (roles) => roles.users)
  @JoinColumn([{ name: "role_id", referencedColumnName: "id" }])
  role: Roles;
}
