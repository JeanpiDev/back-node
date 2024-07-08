import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("user_scheduled_emails_pkey", ["id"], { unique: true })
@Entity("user_scheduled_emails", { schema: "public" })
export class UserScheduledEmails {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "customer_id" })
  customerId: number;

  @Column("integer", { name: "unity_id" })
  unityId: number;

  @Column("json", { name: "data_send" })
  dataSend: object;

  @Column("character varying", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("integer", { name: "status", nullable: true, default: () => "0" })
  status: number | null;

  @Column("timestamp without time zone", {
    name: "scheduled_start_time",
    nullable: true,
  })
  scheduledStartTime: Date | null;

  @Column("timestamp without time zone", {
    name: "scheduled_end_time",
    nullable: true,
  })
  scheduledEndTime: Date | null;

  @Column("timestamp without time zone", {
    name: "last_sent_time",
    nullable: true,
  })
  lastSentTime: Date | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
