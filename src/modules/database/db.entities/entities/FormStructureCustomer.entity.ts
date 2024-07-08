import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("form_structure_customer_pkey", ["id"], { unique: true })
@Entity("form_structure_customer", { schema: "public" })
export class FormStructureCustomer {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "customer" })
  customer: number;

  @Column("json", { name: "structure_form" })
  structureForm: object;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("character varying", { name: "icon", nullable: true })
  icon: string | null;
}
