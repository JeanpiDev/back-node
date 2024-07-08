import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("notification_unity_pkey", ["id"], { unique: true })
@Entity("notification_unity", { schema: "public" })
export class NotificationUnity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "notification_id" })
  notificationId: number;

  @Column("integer", { name: "unity_id" })
  unityId: number;

  @Column("character varying", { name: "hour", length: 55 })
  hour: string;

  @Column("text", { name: "plot" })
  plot: string;

  @Column("character varying", { name: "lat", length: 255 })
  lat: string;

  @Column("character varying", { name: "lon", length: 255 })
  lon: string;

  @Column("smallint", { name: "type" })
  type: number;

  @Column("timestamp with time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp with time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
