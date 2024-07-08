import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DeviceTests } from "./DeviceTests.entity";
import { DeviceUser } from "./DeviceUser.entity";
import { Customers } from "./Customers.entity";
import { DeviceTypes } from "./DeviceTypes.entity";
import { MobileUnityLine } from "./MobileUnityLine.entity";
import { Simcards } from "./Simcards.entity";
import { MobileUnities } from "./MobileUnities.entity";
import { SimcardLogs } from "./SimcardLogs.entity";

@Index("idxdevices_customer_id", ["customerId"], {})
@Index("idxdevices_device_type_id", ["deviceTypeId"], {})
@Index("devices_pkey", ["id"], { unique: true })
@Index("idxdevices_imei", ["imei"], {})
@Index("idxdevices_line_id", ["lineId"], {})
@Index("idxdevices_simcard_id", ["simcardId"], {})
@Entity("devices", { schema: "public" })
export class Devices {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "device_type_id" })
  deviceTypeId: number;

  @Column("integer", { name: "customer_id" })
  customerId: number;

  @Column("integer", { name: "line_id", nullable: true })
  lineId: number | null;

  @Column("integer", { name: "simcard_id", nullable: true })
  simcardId: number | null;

  @Column("character varying", { name: "imei", nullable: true, length: 45 })
  imei: string | null;

  @Column("character varying", { name: "name", length: 45 })
  name: string;

  @Column("integer", { name: "engine_report_time_on", nullable: true })
  engineReportTimeOn: number | null;

  @Column("integer", { name: "engine_report_time_off", nullable: true })
  engineReportTimeOff: number | null;

  @Column("integer", { name: "speeding", nullable: true })
  speeding: number | null;

  @Column("integer", {
    name: "oil_consumption",
    nullable: true,
    default: () => "0",
  })
  oilConsumption: number | null;

  @Column("character varying", { name: "firewall", nullable: true, length: 45 })
  firewall: string | null;

  @Column("character varying", { name: "tcp_port", nullable: true, length: 45 })
  tcpPort: string | null;

  @Column("smallint", { name: "status", default: () => "1" })
  status: number;

  @Column("smallint", { name: "property", nullable: true })
  property: number | null;

  @Column("character varying", { name: "ip_local", nullable: true, length: 50 })
  ipLocal: string | null;

  @Column("character varying", {
    name: "port_remote",
    nullable: true,
    length: 50,
  })
  portRemote: string | null;

  @Column("character varying", {
    name: "ip_remote",
    nullable: true,
    length: 50,
  })
  ipRemote: string | null;

  @Column("timestamp without time zone", {
    name: "last_connect",
    nullable: true,
  })
  lastConnect: Date | null;

  @Column("boolean", { name: "status_connect", default: () => "false" })
  statusConnect: boolean;

  @OneToMany(() => DeviceTests, (deviceTests) => deviceTests.device)
  deviceTests: DeviceTests[];

  @OneToMany(() => DeviceUser, (deviceUser) => deviceUser.device)
  deviceUsers: DeviceUser[];

  @ManyToOne(() => Customers, (customers) => customers.devices)
  @JoinColumn([{ name: "customer_id", referencedColumnName: "id" }])
  customer: Customers;

  @ManyToOne(() => DeviceTypes, (deviceTypes) => deviceTypes.devices)
  @JoinColumn([{ name: "device_type_id", referencedColumnName: "id" }])
  deviceType: DeviceTypes;

  @ManyToOne(
    () => MobileUnityLine,
    (mobileUnityLine) => mobileUnityLine.devices
  )
  @JoinColumn([{ name: "line_id", referencedColumnName: "id" }])
  line: MobileUnityLine;

  @ManyToOne(() => Simcards, (simcards) => simcards.devices)
  @JoinColumn([{ name: "simcard_id", referencedColumnName: "id" }])
  simcard: Simcards;

  @OneToMany(() => MobileUnities, (mobileUnities) => mobileUnities.device)
  mobileUnities: MobileUnities[];

  @OneToMany(() => SimcardLogs, (simcardLogs) => simcardLogs.device)
  simcardLogs: SimcardLogs[];
}
