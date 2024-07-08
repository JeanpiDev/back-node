import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("webservice_type_mobile_unity_pkey", ["id"], { unique: true })
@Entity("webservice_type_mobile_unity", { schema: "public" })
export class WebserviceTypeMobileUnity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "code", length: 45 })
  code: string;

  @Column("character varying", { name: "name", length: 100 })
  name: string;
}
