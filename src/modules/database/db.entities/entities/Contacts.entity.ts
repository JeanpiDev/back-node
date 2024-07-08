import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ContactTypes } from "./ContactTypes.entity";
import { Customers } from "./Customers.entity";

@Index("idxcontacts_contact_type_id", ["contactTypeId"], {})
@Index("idxcontacts_customer_id", ["customerId"], {})
@Index("contacts_pkey", ["id"], { unique: true })
@Entity("contacts", { schema: "public" })
export class Contacts {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "contact_type_id" })
  contactTypeId: number;

  @Column("integer", { name: "customer_id" })
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

  @ManyToOne(() => ContactTypes, (contactTypes) => contactTypes.contacts)
  @JoinColumn([{ name: "contact_type_id", referencedColumnName: "id" }])
  contactType: ContactTypes;

  @ManyToOne(() => Customers, (customers) => customers.contacts)
  @JoinColumn([{ name: "customer_id", referencedColumnName: "id" }])
  customer: Customers;
}
