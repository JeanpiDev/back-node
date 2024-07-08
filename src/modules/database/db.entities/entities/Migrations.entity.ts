import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("migrations_pkey", ["id"], { unique: true })
@Entity("migrations", { schema: "public" })
export class Migrations {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "migration", length: 191 })
  migration: string;

  @Column("integer", { name: "batch" })
  batch: number;
}
