import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idxdirections_id", ["id"], {})
@Entity("directions", { schema: "public" })
export class Directions {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("real", { name: "latitud", precision: 24 })
  latitud: number;

  @Column("real", { name: "longitud", precision: 24 })
  longitud: number;

  @Column("character varying", { name: "address", length: 255 })
  address: string;

  @Column("geometry", { name: "geom", nullable: true })
  geom: string | null;
}
