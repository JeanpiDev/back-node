import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("municipios_geom_idx", ["geom"], {})
@Index("municipios_pkey", ["gid"], { unique: true })
@Entity("municipios", { schema: "public" })
export class Municipios {
  @PrimaryGeneratedColumn({ type: "integer", name: "gid" })
  gid: number;

  @Column("character varying", {
    name: "dpto_ccdgo",
    nullable: true,
    length: 2,
  })
  dptoCcdgo: string | null;

  @Column("character varying", {
    name: "mpio_ccdgo",
    nullable: true,
    length: 3,
  })
  mpioCcdgo: string | null;

  @Column("character varying", {
    name: "mpio_cdpmp",
    nullable: true,
    length: 5,
  })
  mpioCdpmp: string | null;

  @Column("character varying", {
    name: "nombre_dpt",
    nullable: true,
    length: 250,
  })
  nombreDpt: string | null;

  @Column("character varying", {
    name: "nombre_mpi",
    nullable: true,
    length: 250,
  })
  nombreMpi: string | null;

  @Column("character varying", {
    name: "mpio_crslc",
    nullable: true,
    length: 100,
  })
  mpioCrslc: string | null;

  @Column("numeric", { name: "mpio_narea", nullable: true })
  mpioNarea: string | null;

  @Column("character varying", {
    name: "mpio_csmbl",
    nullable: true,
    length: 3,
  })
  mpioCsmbl: string | null;

  @Column("integer", { name: "mpio_vgnc", nullable: true })
  mpioVgnc: number | null;

  @Column("character varying", {
    name: "mpio_tipo",
    nullable: true,
    length: 50,
  })
  mpioTipo: string | null;

  @Column("numeric", { name: "shape_leng", nullable: true })
  shapeLeng: string | null;

  @Column("numeric", { name: "shape_area", nullable: true })
  shapeArea: string | null;

  @Column("geometry", { name: "geom", nullable: true })
  geom: string | null;
}
