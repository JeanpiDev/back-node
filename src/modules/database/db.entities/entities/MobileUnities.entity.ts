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
import { ContactsEmergency } from "./ContactsEmergency.entity";
import { GeographicalEvents } from "./GeographicalEvents.entity";
import { GeographicalResourceNotification } from "./GeographicalResourceNotification.entity";
import { HabitosConduccion } from "./HabitosConduccion.entity";
import { MobileUnityBrands } from "./MobileUnityBrands.entity";
import { Cities } from "./Cities.entity";
import { MobileUnityClass } from "./MobileUnityClass.entity";
import { Departments } from "./Departments.entity";
import { Devices } from "./Devices.entity";
import { MobileUnityKeys } from "./MobileUnityKeys.entity";
import { MobileUnityLine } from "./MobileUnityLine.entity";
import { MobileUnityStatus } from "./MobileUnityStatus.entity";
import { MobileUnitySubclass } from "./MobileUnitySubclass.entity";
import { MobileUnityType } from "./MobileUnityType.entity";
import { MobileUnityAlerts } from "./MobileUnityAlerts.entity";
import { MobileUnityDriver } from "./MobileUnityDriver.entity";
import { MobileUnityDrivers } from "./MobileUnityDrivers.entity";
import { MobileUnityEventType } from "./MobileUnityEventType.entity";
import { MobileUnityGroups } from "./MobileUnityGroups.entity";
import { MobileUnityOptionList } from "./MobileUnityOptionList.entity";
import { MobileUnityStatusHistory } from "./MobileUnityStatusHistory.entity";
import { Variables } from "./Variables.entity";

@Index("idxmobile_unities_brand_id", ["brandId"], {})
@Index("idxmobile_unities_city_id", ["cityId"], {})
@Index("idxmobile_unities_class_id", ["classId"], {})
@Index("idxmobile_unities_department_id", ["departmentId"], {})
@Index("idxmobile_unities_device_id", ["deviceId"], {})
@Index("mobile_unities_pkey", ["id"], { unique: true })
@Index("idxmobile_unities_key_id", ["keyId"], {})
@Index("idxmobile_unities_line_id", ["lineId"], {})
@Index("idxmobile_unities_status_id", ["statusId"], {})
@Index("idxmobile_unities_subclass_id", ["subclassId"], {})
@Index("idxmobile_unities_type_id", ["typeId"], {})
@Entity("mobile_unities", { schema: "public" })
export class MobileUnities {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "brand_id", nullable: true })
  brandId: number | null;

  @Column("integer", { name: "city_id", nullable: true })
  cityId: number | null;

  @Column("integer", { name: "department_id", nullable: true })
  departmentId: number | null;

  @Column("integer", { name: "device_id" })
  deviceId: number;

  @Column("integer", { name: "class_id" })
  classId: number;

  @Column("integer", { name: "subclass_id", nullable: true })
  subclassId: number | null;

  @Column("integer", { name: "status_id", nullable: true })
  statusId: number | null;

  @Column("integer", { name: "type_id", nullable: true })
  typeId: number | null;

  @Column("integer", { name: "line_id", nullable: true })
  lineId: number | null;

  @Column("integer", { name: "key_id", nullable: true })
  keyId: number | null;

  @Column("character varying", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @Column("character varying", { name: "runt", nullable: true, length: 45 })
  runt: string | null;

  @Column("character varying", { name: "plate", nullable: true, length: 45 })
  plate: string | null;

  @Column("character varying", { name: "brand", nullable: true, length: 255 })
  brand: string | null;

  @Column("character varying", { name: "chassis", nullable: true, length: 255 })
  chassis: string | null;

  @Column("smallint", { name: "plate_installation", default: () => "0" })
  plateInstallation: number;

  @Column("character varying", { name: "engine", nullable: true, length: 255 })
  engine: string | null;

  @Column("character varying", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("integer", { name: "model", nullable: true })
  model: number | null;

  @Column("integer", { name: "miles_approx", nullable: true })
  milesApprox: number | null;

  @Column("character varying", {
    name: "type_approx",
    length: 11,
    default: () => "'kms'",
  })
  typeApprox: string;

  @Column("integer", { name: "miles_x_gallon", nullable: true })
  milesXGallon: number | null;

  @Column("double precision", {
    name: "gallons_x_hour_engine_on",
    nullable: true,
    precision: 53,
  })
  gallonsXHourEngineOn: number | null;

  @Column("character varying", { name: "color", nullable: true, length: 45 })
  color: string | null;

  @Column("integer", { name: "oil_change", nullable: true })
  oilChange: number | null;

  @Column("date", { name: "tech_mech_revition_due_date", nullable: true })
  techMechRevitionDueDate: string | null;

  @Column("date", { name: "soat_due_date", nullable: true })
  soatDueDate: string | null;

  @Column("date", { name: "taxes_due_date", nullable: true })
  taxesDueDate: string | null;

  @Column("integer", { name: "installation_record_number", nullable: true })
  installationRecordNumber: number | null;

  @Column("date", { name: "installation_date", nullable: true })
  installationDate: string | null;

  @Column("character varying", {
    name: "installation_record_image",
    nullable: true,
    length: 255,
  })
  installationRecordImage: string | null;

  @Column("integer", { name: "installation_department_id", nullable: true })
  installationDepartmentId: number | null;

  @Column("integer", { name: "installation_city_id", nullable: true })
  installationCityId: number | null;

  @Column("character varying", { name: "api_url", nullable: true, length: 255 })
  apiUrl: string | null;

  @Column("character varying", {
    name: "api_user",
    nullable: true,
    length: 255,
  })
  apiUser: string | null;

  @Column("character varying", {
    name: "api_password",
    nullable: true,
    length: 255,
  })
  apiPassword: string | null;

  @Column("character varying", { name: "series", nullable: true, length: 255 })
  series: string | null;

  @Column("smallint", { name: "unity_type", nullable: true })
  unityType: number | null;

  @Column("smallint", { name: "status", default: () => "1" })
  status: number;

  @Column("timestamp without time zone", {
    name: "last_report",
    nullable: true,
  })
  lastReport: Date | null;

  @Column("integer", { name: "hour_maintenance", nullable: true })
  hourMaintenance: number | null;

  @Column("character varying", {
    name: "id_unidad_ws",
    nullable: true,
    length: 50,
  })
  idUnidadWs: string | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("text", { name: "endreport", nullable: true })
  endreport: string | null;

  @Column("smallint", {
    name: "statuswebservice",
    nullable: true,
    default: () => "1",
  })
  statuswebservice: number | null;

  @Column("character varying", {
    name: "logwebservice",
    nullable: true,
    length: 200,
  })
  logwebservice: string | null;

  @Column("smallint", { name: "control_t", nullable: true, default: () => "0" })
  controlT: number | null;

  @Column("numeric", { name: "temp_min", nullable: true })
  tempMin: string | null;

  @Column("numeric", { name: "temp_max", nullable: true })
  tempMax: string | null;

  @Column("integer", {
    name: "tank_capacity",
    nullable: true,
    default: () => "0",
  })
  tankCapacity: number | null;

  @OneToMany(
    () => ContactsEmergency,
    (contactsEmergency) => contactsEmergency.unity
  )
  contactsEmergencies: ContactsEmergency[];

  @OneToMany(
    () => GeographicalEvents,
    (geographicalEvents) => geographicalEvents.activoMovil
  )
  geographicalEvents: GeographicalEvents[];

  @OneToMany(
    () => GeographicalResourceNotification,
    (geographicalResourceNotification) => geographicalResourceNotification.unity
  )
  geographicalResourceNotifications: GeographicalResourceNotification[];

  @OneToMany(
    () => HabitosConduccion,
    (habitosConduccion) => habitosConduccion.unity
  )
  habitosConduccions: HabitosConduccion[];

  @ManyToOne(
    () => MobileUnityBrands,
    (mobileUnityBrands) => mobileUnityBrands.mobileUnities
  )
  @JoinColumn([{ name: "brand_id", referencedColumnName: "id" }])
  brand_2: MobileUnityBrands;

  @ManyToOne(() => Cities, (cities) => cities.mobileUnities)
  @JoinColumn([{ name: "city_id", referencedColumnName: "id" }])
  city: Cities;

  @ManyToOne(
    () => MobileUnityClass,
    (mobileUnityClass) => mobileUnityClass.mobileUnities
  )
  @JoinColumn([{ name: "class_id", referencedColumnName: "id" }])
  class: MobileUnityClass;

  @ManyToOne(() => Departments, (departments) => departments.mobileUnities)
  @JoinColumn([{ name: "department_id", referencedColumnName: "id" }])
  department: Departments;

  @ManyToOne(() => Devices, (devices) => devices.mobileUnities)
  @JoinColumn([{ name: "device_id", referencedColumnName: "id" }])
  device: Devices;

  @ManyToOne(
    () => MobileUnityKeys,
    (mobileUnityKeys) => mobileUnityKeys.mobileUnities
  )
  @JoinColumn([{ name: "key_id", referencedColumnName: "id" }])
  key: MobileUnityKeys;

  @ManyToOne(
    () => MobileUnityLine,
    (mobileUnityLine) => mobileUnityLine.mobileUnities
  )
  @JoinColumn([{ name: "line_id", referencedColumnName: "id" }])
  line: MobileUnityLine;

  @ManyToOne(
    () => MobileUnityStatus,
    (mobileUnityStatus) => mobileUnityStatus.mobileUnities
  )
  @JoinColumn([{ name: "status_id", referencedColumnName: "id" }])
  status_2: MobileUnityStatus;

  @ManyToOne(
    () => MobileUnitySubclass,
    (mobileUnitySubclass) => mobileUnitySubclass.mobileUnities
  )
  @JoinColumn([{ name: "subclass_id", referencedColumnName: "id" }])
  subclass: MobileUnitySubclass;

  @ManyToOne(
    () => MobileUnityType,
    (mobileUnityType) => mobileUnityType.mobileUnities
  )
  @JoinColumn([{ name: "type_id", referencedColumnName: "id" }])
  type: MobileUnityType;

  @ManyToMany(
    () => MobileUnityAlerts,
    (mobileUnityAlerts) => mobileUnityAlerts.mobileUnities
  )
  mobileUnityAlerts: MobileUnityAlerts[];

  @OneToMany(
    () => MobileUnityDriver,
    (mobileUnityDriver) => mobileUnityDriver.unity
  )
  mobileUnityDrivers2: MobileUnityDriver[];

  @OneToMany(
    () => MobileUnityDrivers,
    (mobileUnityDrivers) => mobileUnityDrivers.mobileUnity
  )
  mobileUnityDrivers: MobileUnityDrivers[];

  @OneToMany(
    () => MobileUnityEventType,
    (mobileUnityEventType) => mobileUnityEventType.mobileUnity
  )
  mobileUnityEventTypes: MobileUnityEventType[];

  @ManyToMany(
    () => MobileUnityGroups,
    (mobileUnityGroups) => mobileUnityGroups.mobileUnities
  )
  mobileUnityGroups: MobileUnityGroups[];

  @ManyToMany(
    () => MobileUnityOptionList,
    (mobileUnityOptionList) => mobileUnityOptionList.mobileUnities
  )
  mobileUnityOptionLists: MobileUnityOptionList[];

  @OneToMany(
    () => MobileUnityStatusHistory,
    (mobileUnityStatusHistory) => mobileUnityStatusHistory.mobileUnity
  )
  mobileUnityStatusHistories: MobileUnityStatusHistory[];

  @ManyToMany(() => Variables, (variables) => variables.mobileUnities)
  @JoinTable({
    name: "notifications_variables",
    joinColumns: [{ name: "unity_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "variable_id", referencedColumnName: "id" }],
    schema: "public",
  })
  variables: Variables[];
}
