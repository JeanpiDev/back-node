import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DevicePlotHeaderTypes } from "./DevicePlotHeaderTypes.entity";
import { DevicePlots } from "./DevicePlots.entity";

@Index("idxdevice_plot_headers_device_plot_id", ["devicePlotId"], {})
@Index("device_plot_headers_pkey", ["id"], { unique: true })
@Entity("device_plot_headers", { schema: "public" })
export class DevicePlotHeaders {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "device_plot_id" })
  devicePlotId: number;

  @Column("integer", { name: "position" })
  position: number;

  @Column("character varying", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 400,
  })
  description: string | null;

  @Column("smallint", { name: "have_types", nullable: true })
  haveTypes: number | null;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => DevicePlotHeaderTypes,
    (devicePlotHeaderTypes) => devicePlotHeaderTypes.devicePlotHeader
  )
  devicePlotHeaderTypes: DevicePlotHeaderTypes[];

  @ManyToOne(() => DevicePlots, (devicePlots) => devicePlots.devicePlotHeaders)
  @JoinColumn([{ name: "device_plot_id", referencedColumnName: "id" }])
  devicePlot: DevicePlots;
}
