import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DevicePlotDeviceType } from "./DevicePlotDeviceType.entity";
import { DevicePlotHeaders } from "./DevicePlotHeaders.entity";
import { Brands } from "./Brands.entity";

@Index("device_plots_pkey", ["id"], { unique: true })
@Entity("device_plots", { schema: "public" })
export class DevicePlots {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true, length: 500 })
  name: string | null;

  @Column("smallint", { name: "type", nullable: true })
  type: number | null;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => DevicePlotDeviceType,
    (devicePlotDeviceType) => devicePlotDeviceType.devicePlot
  )
  devicePlotDeviceTypes: DevicePlotDeviceType[];

  @OneToMany(
    () => DevicePlotHeaders,
    (devicePlotHeaders) => devicePlotHeaders.devicePlot
  )
  devicePlotHeaders: DevicePlotHeaders[];

  @ManyToOne(() => Brands, (brands) => brands.devicePlots)
  @JoinColumn([{ name: "brand_id", referencedColumnName: "id" }])
  brand: Brands;
}
