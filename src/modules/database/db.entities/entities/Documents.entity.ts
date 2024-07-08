import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("documents_pkey", ["id"], { unique: true })
@Entity("documents", { schema: "public" })
export class Documents {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("character varying", {
    name: "original_name",
    nullable: true,
    length: 255,
  })
  originalName: string | null;

  @Column("character varying", {
    name: "filename",
    nullable: true,
    length: 255,
  })
  filename: string | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
