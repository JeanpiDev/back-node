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
import { DevicePlotDeviceType } from "./DevicePlotDeviceType.entity";
import { Brands } from "./Brands.entity";
import { Variables } from "./Variables.entity";
import { Devices } from "./Devices.entity";

@Index("device_types_pkey", ["id"], { unique: true })
@Entity("device_types", { schema: "public" })
export class DeviceTypes {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "code", length: 45 })
  code: string;

  @Column("smallint", { name: "status", nullable: true })
  status: number | null;

  @OneToMany(
    () => DevicePlotDeviceType,
    (devicePlotDeviceType) => devicePlotDeviceType.deviceType
  )
  devicePlotDeviceTypes: DevicePlotDeviceType[];

  @ManyToOne(() => Brands, (brands) => brands.deviceTypes)
  @JoinColumn([{ name: "brand_id", referencedColumnName: "id" }])
  brand: Brands;

  @ManyToMany(() => Variables, (variables) => variables.deviceTypes)
  @JoinTable({
    name: "device_variable",
    joinColumns: [{ name: "device_types_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "variables_id", referencedColumnName: "id" }],
    schema: "public",
  })
  variables: Variables[];

  @OneToMany(() => Devices, (devices) => devices.deviceType)
  devices: Devices[];
}
