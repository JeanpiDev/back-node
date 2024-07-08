import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contacts } from "./Contacts.entity";
import { Cities } from "./Cities.entity";
import { Departments } from "./Departments.entity";
import { DocumentTypes } from "./DocumentTypes.entity";
import { Plans } from "./Plans.entity";
import { Templates } from "./Templates.entity";
import { UsersTypes } from "./UsersTypes.entity";
import { Devices } from "./Devices.entity";
import { GeographicalEvents } from "./GeographicalEvents.entity";
import { GeographicalResources } from "./GeographicalResources.entity";
import { MobileUnityAlerts } from "./MobileUnityAlerts.entity";
import { MobileUnityDallasKeys } from "./MobileUnityDallasKeys.entity";
import { MobileUnityGroups } from "./MobileUnityGroups.entity";
import { Users } from "./Users.entity";

@Index("idxcustomers_city_id", ["cityId"], {})
@Index("idxcustomers_consultant_id", ["consultantId"], {})
@Index("idxcustomers_department_id", ["departmentId"], {})
@Index("idxcustomers_document_type_id", ["documentTypeId"], {})
@Index("customers_pkey", ["id"], { unique: true })
@Index("idxcustomers_plan_id", ["planId"], {})
@Index("idxcustomers_reseller_id", ["resellerId"], {})
@Index("idxcustomers_template_id", ["templateId"], {})
@Index("idxcustomers_user_type_id", ["userTypeId"], {})
@Entity("customers", { schema: "public" })
export class Customers {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "department_id" })
  departmentId: number;

  @Column("integer", { name: "city_id" })
  cityId: number;

  @Column("integer", { name: "consultant_id", nullable: true })
  consultantId: number | null;

  @Column("integer", { name: "plan_id", nullable: true })
  planId: number | null;

  @Column("integer", { name: "reseller_id", nullable: true })
  resellerId: number | null;

  @Column("integer", { name: "user_type_id" })
  userTypeId: number;

  @Column("integer", { name: "template_id", nullable: true })
  templateId: number | null;

  @Column("integer", { name: "document_type_id" })
  documentTypeId: number;

  @Column("character varying", { name: "document_number", length: 45 })
  documentNumber: string;

  @Column("character varying", {
    name: "first_name",
    nullable: true,
    length: 120,
  })
  firstName: string | null;

  @Column("character varying", {
    name: "last_name",
    nullable: true,
    length: 45,
  })
  lastName: string | null;

  @Column("character varying", { name: "full_name", length: 255 })
  fullName: string;

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

  @Column("character varying", { name: "address", nullable: true, length: 200 })
  address: string | null;

  @Column("character varying", { name: "email", length: 45 })
  email: string;

  @Column("date", { name: "birthdate", nullable: true })
  birthdate: string | null;

  @Column("character varying", {
    name: "contract_number",
    nullable: true,
    length: 45,
  })
  contractNumber: string | null;

  @Column("date", { name: "contract_start_date", nullable: true })
  contractStartDate: string | null;

  @Column("date", { name: "contract_end_date", nullable: true })
  contractEndDate: string | null;

  @Column("character varying", {
    name: "contract_file",
    nullable: true,
    length: 255,
  })
  contractFile: string | null;

  @Column("character varying", { name: "slug", nullable: true, length: 45 })
  slug: string | null;

  @Column("character varying", {
    name: "subdomain",
    nullable: true,
    length: 45,
  })
  subdomain: string | null;

  @Column("character varying", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("character varying", {
    name: "background_image",
    nullable: true,
    length: 255,
  })
  backgroundImage: string | null;

  @Column("character varying", {
    name: "image_logo",
    nullable: true,
    length: 255,
  })
  imageLogo: string | null;

  @Column("character varying", { name: "color", nullable: true, length: 45 })
  color: string | null;

  @Column("smallint", { name: "status", nullable: true })
  status: number | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => Contacts, (contacts) => contacts.customer)
  contacts: Contacts[];

  @ManyToOne(() => Cities, (cities) => cities.customers)
  @JoinColumn([{ name: "city_id", referencedColumnName: "id" }])
  city: Cities;

  @ManyToOne(() => Departments, (departments) => departments.customers)
  @JoinColumn([{ name: "department_id", referencedColumnName: "id" }])
  department: Departments;

  @ManyToOne(() => DocumentTypes, (documentTypes) => documentTypes.customers)
  @JoinColumn([{ name: "document_type_id", referencedColumnName: "id" }])
  documentType: DocumentTypes;

  @ManyToOne(() => Plans, (plans) => plans.customers)
  @JoinColumn([{ name: "plan_id", referencedColumnName: "id" }])
  plan: Plans;

  @ManyToOne(() => Customers, (customers) => customers.customers)
  @JoinColumn([{ name: "reseller_id", referencedColumnName: "id" }])
  reseller: Customers;

  @OneToMany(() => Customers, (customers) => customers.reseller)
  customers: Customers[];

  @ManyToOne(() => Templates, (templates) => templates.customers)
  @JoinColumn([{ name: "template_id", referencedColumnName: "id" }])
  template: Templates;

  @ManyToOne(() => UsersTypes, (usersTypes) => usersTypes.customers)
  @JoinColumn([{ name: "user_type_id", referencedColumnName: "id" }])
  userType: UsersTypes;

  @OneToMany(() => Devices, (devices) => devices.customer)
  devices: Devices[];

  @OneToMany(
    () => GeographicalEvents,
    (geographicalEvents) => geographicalEvents.customer
  )
  geographicalEvents: GeographicalEvents[];

  @OneToMany(
    () => GeographicalResources,
    (geographicalResources) => geographicalResources.customer
  )
  geographicalResources: GeographicalResources[];

  @OneToMany(
    () => MobileUnityAlerts,
    (mobileUnityAlerts) => mobileUnityAlerts.customer
  )
  mobileUnityAlerts: MobileUnityAlerts[];

  @OneToMany(
    () => MobileUnityDallasKeys,
    (mobileUnityDallasKeys) => mobileUnityDallasKeys.idCustomer2
  )
  mobileUnityDallasKeys: MobileUnityDallasKeys[];

  @OneToMany(
    () => MobileUnityGroups,
    (mobileUnityGroups) => mobileUnityGroups.customer
  )
  mobileUnityGroups: MobileUnityGroups[];

  @ManyToMany(() => Plans, (plans) => plans.customers2)
  @JoinTable({
    name: "plan_customer",
    joinColumns: [{ name: "customer_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "plan_id", referencedColumnName: "id" }],
    schema: "public",
  })
  plans: Plans[];

  @OneToMany(() => Users, (users) => users.customer)
  users: Users[];
}
