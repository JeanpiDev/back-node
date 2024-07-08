import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("carreras_calles_geom_idx", ["geom"], {})
@Index("carreras_calles_pkey", ["gid"], { unique: true })
@Entity("carreras_calles", { schema: "public" })
export class CarrerasCalles {
  @PrimaryGeneratedColumn({ type: "integer", name: "gid" })
  gid: number;

  @Column("character varying", { name: "osm_id", nullable: true, length: 254 })
  osmId: string | null;

  @Column("character varying", { name: "name", nullable: true, length: 254 })
  name: string | null;

  @Column("character varying", { name: "highway", nullable: true, length: 254 })
  highway: string | null;

  @Column("character varying", {
    name: "waterway",
    nullable: true,
    length: 254,
  })
  waterway: string | null;

  @Column("character varying", {
    name: "aerialway",
    nullable: true,
    length: 254,
  })
  aerialway: string | null;

  @Column("character varying", { name: "barrier", nullable: true, length: 254 })
  barrier: string | null;

  @Column("character varying", {
    name: "man_made",
    nullable: true,
    length: 254,
  })
  manMade: string | null;

  @Column("character varying", { name: "railway", nullable: true, length: 254 })
  railway: string | null;

  @Column("bigint", { name: "z_order", nullable: true })
  zOrder: string | null;

  @Column("character varying", {
    name: "other_tags",
    nullable: true,
    length: 254,
  })
  otherTags: string | null;

  @Column("geometry", { name: "geom", nullable: true })
  geom: string | null;
}
