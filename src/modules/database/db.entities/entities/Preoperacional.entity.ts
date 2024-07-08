import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("preoperacional_pkey", ["id"], { unique: true })
@Entity("preoperacional", { schema: "public" })
export class Preoperacional {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "customer" })
  customer: number;

  @Column("integer", { name: "unity_id" })
  unityId: number;

  @Column("json", { name: "preoperational_form", nullable: true })
  preoperationalForm: object | null;

  @Column("character varying", { name: "token", length: 20 })
  token: string;

  @Column("timestamp without time zone", { name: "date_sent", nullable: true })
  dateSent: Date | null;

  @Column("timestamp without time zone", {
    name: "result_date",
    nullable: true,
  })
  resultDate: Date | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
