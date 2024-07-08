import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cities } from "./Cities.entity";
import { Departments } from "./Departments.entity";
import { DocumentTypes } from "./DocumentTypes.entity";

@Index("drivers_dallas_pkey", ["id"], { unique: true })
@Entity("drivers_dallas", { schema: "public" })
export class DriversDallas {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "document_number", length: 45 })
  documentNumber: string;

  @Column("integer", { name: "id_dallas", nullable: true })
  idDallas: number | null;

  @Column("character varying", {
    name: "first_name",
    nullable: true,
    length: 45,
  })
  firstName: string | null;

  @Column("character varying", {
    name: "last_name",
    nullable: true,
    length: 45,
  })
  lastName: string | null;

  @Column("character varying", { name: "gender", nullable: true, length: 5 })
  gender: string | null;

  @Column("date", { name: "birthdate", nullable: true })
  birthdate: string | null;

  @Column("character varying", { name: "address", nullable: true, length: 45 })
  address: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 45 })
  email: string | null;

  @Column("character varying", {
    name: "telephone",
    nullable: true,
    length: 45,
  })
  telephone: string | null;

  @Column("character varying", {
    name: "cellphone",
    nullable: true,
    length: 45,
  })
  cellphone: string | null;

  @Column("character varying", {
    name: "driver_license_number",
    nullable: true,
    length: 45,
  })
  driverLicenseNumber: string | null;

  @Column("date", { name: "driver_license_due_date", nullable: true })
  driverLicenseDueDate: string | null;

  @Column("character varying", {
    name: "driver_license_category",
    nullable: true,
    length: 45,
  })
  driverLicenseCategory: string | null;

  @Column("character varying", { name: "rh", nullable: true, length: 45 })
  rh: string | null;

  @Column("character varying", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("smallint", { name: "status", nullable: true })
  status: number | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("integer", { name: "customer_id" })
  customerId: number;

  @ManyToOne(() => Cities, (cities) => cities.driversDallas)
  @JoinColumn([{ name: "city_id", referencedColumnName: "id" }])
  city: Cities;

  @ManyToOne(() => Departments, (departments) => departments.driversDallas)
  @JoinColumn([{ name: "department_id", referencedColumnName: "id" }])
  department: Departments;

  @ManyToOne(
    () => DocumentTypes,
    (documentTypes) => documentTypes.driversDallas
  )
  @JoinColumn([{ name: "document_type_id", referencedColumnName: "id" }])
  documentType: DocumentTypes;
}
