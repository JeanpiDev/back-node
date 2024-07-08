import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MobileUnities } from "./MobileUnities.entity";

@Index("contacts_emergency_pkey", ["id"], { unique: true })
@Index("idxcontacts_emergency_unity_id", ["unityId"], {})
@Entity("contacts_emergency", { schema: "public" })
export class ContactsEmergency {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "unity_id" })
  unityId: number;

  @Column("smallint", { name: "level", nullable: true })
  level: number | null;

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

  @Column("character varying", { name: "password", nullable: true, length: 45 })
  password: string | null;

  @ManyToOne(
    () => MobileUnities,
    (mobileUnities) => mobileUnities.contactsEmergencies
  )
  @JoinColumn([{ name: "unity_id", referencedColumnName: "id" }])
  unity: MobileUnities;
}
