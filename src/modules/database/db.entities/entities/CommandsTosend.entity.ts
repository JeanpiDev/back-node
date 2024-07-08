import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("commands_tosend_pkey", ["id"], { unique: true })
@Entity("commands_tosend", { schema: "public" })
export class CommandsTosend {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "command_id" })
  commandId: number;

  @Column("integer", { name: "client_id" })
  clientId: number;

  @Column("integer", { name: "user_id" })
  userId: number;

  @Column("character varying", { name: "imei", nullable: true, length: 50 })
  imei: string | null;

  @Column("smallint", { name: "sended", default: () => "0" })
  sended: number;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
