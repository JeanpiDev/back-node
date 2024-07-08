/* eslint-disable prettier/prettier */
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("works_pkey", ["id"], { unique: true })
@Entity("works", { schema: "public" })
export class Works {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("smallint", { name: "type" })
  type: number;

  @Column("integer", { name: "unity_id" })
  unityId: number;

  @Column("timestamp without time zone", { name: "start" })
  start: Date;

  @Column("timestamp without time zone", { name: "end" })
  end: Date;

  @Column("double precision", { name: "km", precision: 53 })
  km: number;

  @Column("double precision", { name: "speed", precision: 53 })
  speed: number;

  @Column("integer", { name: "on_id" })
  onId: number;

  @Column("integer", { name: "off_id" })
  offId: number;

  @Column("character varying", {
    name: "data",
    nullable: true,
    length: 500,
    default: () => "NULL::character varying",
  })
  data: string | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
