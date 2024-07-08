import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idxconsultants_city_id", ["cityId"], {})
@Index("idxconsultants_department_id", ["departmentId"], {})
@Index("consultants_pkey", ["id"], { unique: true })
@Entity("consultants", { schema: "public" })
export class Consultants {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "city_id", nullable: true })
  cityId: number | null;

  @Column("integer", { name: "department_id", nullable: true })
  departmentId: number | null;

  @Column("integer", { name: "customer_id", default: () => "1" })
  customerId: number;

  @Column("character varying", { name: "first_name", length: 45 })
  firstName: string;

  @Column("character varying", { name: "last_name", length: 45 })
  lastName: string;

  @Column("character varying", {
    name: "telephone",
    nullable: true,
    length: 45,
  })
  telephone: string | null;

  @Column("character varying", { name: "cellphone", length: 45 })
  cellphone: string;

  @Column("character varying", { name: "email", length: 45 })
  email: string;
}
