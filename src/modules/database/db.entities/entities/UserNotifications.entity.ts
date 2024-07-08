import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("user_notifications_pkey", ["id"], { unique: true })
@Entity("user_notifications", { schema: "public" })
export class UserNotifications {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("integer", { name: "customer_id" })
  customerId: number;

  @Column("integer", { name: "user_read_id", nullable: true })
  userReadId: number | null;

  @Column("character varying", {
    name: "type_object",
    nullable: true,
    length: 45,
    default: () => "NULL::character varying",
  })
  typeObject: string | null;

  @Column("character varying", {
    name: "object_id",
    nullable: true,
    length: 200,
    default: () => "NULL::character varying",
  })
  objectId: string | null;

  @Column("character varying", {
    name: "title",
    nullable: true,
    length: 200,
    default: () => "NULL::character varying",
  })
  title: string | null;

  @Column("text", { name: "message", nullable: true })
  message: string | null;

  @Column("smallint", { name: "type_notification", nullable: true })
  typeNotification: number | null;

  @Column("character varying", {
    name: "plot",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  plot: string | null;

  @Column("integer", { name: "status", default: () => "0" })
  status: number;

  @Column("character varying", {
    name: "plates",
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
  })
  plates: string | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
