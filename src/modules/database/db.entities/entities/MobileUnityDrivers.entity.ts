import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MobileUnityDriver } from "./MobileUnityDriver.entity";
import { Cities } from "./Cities.entity";
import { Departments } from "./Departments.entity";
import { DocumentTypes } from "./DocumentTypes.entity";
import { MobileUnities } from "./MobileUnities.entity";

@Index("idxmobile_unity_drivers_city_id", ["cityId"], {})
@Index("idxmobile_unity_drivers_department_id", ["departmentId"], {})
@Index("idxmobile_unity_drivers_document_type_id", ["documentTypeId"], {})
@Index("mobile_unity_drivers_pkey", ["id"], { unique: true })
@Index("idxmobile_unity_drivers_mobile_unity_id", ["mobileUnityId"], {})
@Entity("mobile_unity_drivers", { schema: "public" })
export class MobileUnityDrivers {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "department_id" })
  departmentId: number;

  @Column("integer", { name: "city_id" })
  cityId: number;

  @Column("integer", { name: "mobile_unity_id", nullable: true })
  mobileUnityId: number | null;

  @Column("integer", { name: "document_type_id" })
  documentTypeId: number;

  @Column("character varying", { name: "document_number", length: 45 })
  documentNumber: string;

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

  @Column("character varying", { name: "gender", nullable: true, length: 1 })
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

  @OneToMany(
    () => MobileUnityDriver,
    (mobileUnityDriver) => mobileUnityDriver.driver
  )
  mobileUnityDrivers: MobileUnityDriver[];

  @ManyToOne(() => Cities, (cities) => cities.mobileUnityDrivers)
  @JoinColumn([{ name: "city_id", referencedColumnName: "id" }])
  city: Cities;

  @ManyToOne(() => Departments, (departments) => departments.mobileUnityDrivers)
  @JoinColumn([{ name: "department_id", referencedColumnName: "id" }])
  department: Departments;

  @ManyToOne(
    () => DocumentTypes,
    (documentTypes) => documentTypes.mobileUnityDrivers
  )
  @JoinColumn([{ name: "document_type_id", referencedColumnName: "id" }])
  documentType: DocumentTypes;

  @ManyToOne(
    () => MobileUnities,
    (mobileUnities) => mobileUnities.mobileUnityDrivers,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "mobile_unity_id", referencedColumnName: "id" }])
  mobileUnity: MobileUnities;
}
