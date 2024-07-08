import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("rutograma_pkey", ["id"], { unique: true })
@Entity("rutograma", { schema: "public" })
export class Rutograma {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "customer_id" })
  customerId: number;

  @Column("character varying", {
    name: "ruta_name",
    nullable: true,
    length: 100,
  })
  rutaName: string | null;

  @Column("text", { name: "ruta" })
  ruta: string;

  @Column("text", { name: "token" })
  token: string;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
