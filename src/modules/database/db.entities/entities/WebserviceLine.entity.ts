import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("webservice_line_pkey", ["id"], { unique: true })
@Entity("webservice_line", { schema: "public" })
export class WebserviceLine {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "code", length: 45 })
  code: string;

  @Column("character varying", { name: "name", length: 45 })
  name: string;
}
