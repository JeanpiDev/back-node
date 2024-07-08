import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("commands_list_pkey", ["id"], { unique: true })
@Entity("commands_list", { schema: "public" })
export class CommandsList {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 150 })
  name: string;

  @Column("smallint", { name: "visible_on_app", default: () => "0" })
  visibleOnApp: number;
}
