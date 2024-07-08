import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DevicePlots } from "./DevicePlots.entity";
import { DeviceTypes } from "./DeviceTypes.entity";
import { EventTypes } from "./EventTypes.entity";

@Index("idxdevice_plot_device_type_device_plot_id", ["devicePlotId"], {})
@Index("idxdevice_plot_device_type_device_type_id", ["deviceTypeId"], {})
@Index("device_plot_device_type_pkey", ["id"], { unique: true })
@Entity("device_plot_device_type", { schema: "public" })
export class DevicePlotDeviceType {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "device_type_id" })
  deviceTypeId: number;

  @Column("integer", { name: "device_plot_id" })
  devicePlotId: number;

  @Column("character varying", { name: "key", nullable: true, length: 80 })
  key: string | null;

  @Column("character varying", { name: "name", nullable: true, length: 80 })
  name: string | null;

  @Column("integer", { name: "imei_position", nullable: true })
  imeiPosition: number | null;

  @ManyToOne(
    () => DevicePlots,
    (devicePlots) => devicePlots.devicePlotDeviceTypes
  )
  @JoinColumn([{ name: "device_plot_id", referencedColumnName: "id" }])
  devicePlot: DevicePlots;

  @ManyToOne(
    () => DeviceTypes,
    (deviceTypes) => deviceTypes.devicePlotDeviceTypes
  )
  @JoinColumn([{ name: "device_type_id", referencedColumnName: "id" }])
  deviceType: DeviceTypes;

  @ManyToOne(() => EventTypes, (eventTypes) => eventTypes.devicePlotDeviceTypes)
  @JoinColumn([{ name: "event_type_id", referencedColumnName: "id" }])
  eventType: EventTypes;
}
