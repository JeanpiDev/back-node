import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("command_log_pkey", ["id"], { unique: true })
@Entity("command_log", { schema: "public" })
export class CommandLog {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("character varying", { name: "imei", nullable: true, length: 255 })
  imei: string | null;

  @Column("integer", { name: "command_id", nullable: true })
  commandId: number | null;

  @Column("character varying", { name: "response", nullable: true })
  response: string | null;

  @Column("boolean", { name: "status", nullable: true })
  status: boolean | null;

  @PrimaryGeneratedColumn({ type: "integer", name: "command_pending_id" })
  commandPendingId: number;

  @Column("timestamp without time zone", { name: "create_by", nullable: true })
  createBy: Date | null;

  @Column("timestamp without time zone", { name: "update_by", nullable: true })
  updateBy: Date | null;
}
