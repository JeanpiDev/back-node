import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("parameters_pkey", ["id"], { unique: true })
@Entity("parameters", { schema: "public" })
export class Parameters {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 45 })
  name: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 300,
  })
  description: string | null;

  @Column("character varying", { name: "value", length: 45 })
  value: string;
}
