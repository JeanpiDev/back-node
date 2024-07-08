import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("command_pending_pkey", ["id"], { unique: true })
@Entity("command_pending", { schema: "public" })
export class CommandPending {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "imei", nullable: true, length: 255 })
  imei: string | null;

  @Column("character varying", { name: "command", nullable: true, length: 255 })
  command: string | null;

  @Column("integer", { name: "port", nullable: true })
  port: number | null;

  @Column("timestamp without time zone", { name: "date", nullable: true })
  date: Date | null;
}
