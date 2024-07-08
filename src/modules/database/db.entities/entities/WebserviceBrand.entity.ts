import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("webservice_brand_pkey", ["id"], { unique: true })
@Entity("webservice_brand", { schema: "public" })
export class WebserviceBrand {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "code", length: 45 })
  code: string;

  @Column("character varying", { name: "name", length: 62 })
  name: string;
}
