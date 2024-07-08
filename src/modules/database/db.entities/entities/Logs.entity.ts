import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("logs_pkey", ["id"], { unique: true })
@Entity("logs", { schema: "public" })
export class Logs {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "imei",
    nullable: true,
    length: 20,
    default: () => "NULL::character varying",
  })
  imei: string | null;

  @Column("text", { name: "data", nullable: true })
  data: string | null;

  @Column("text", { name: "error", nullable: true })
  error: string | null;

  @Column("smallint", { name: "status", nullable: true })
  status: number | null;

  @Column("timestamp with time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
