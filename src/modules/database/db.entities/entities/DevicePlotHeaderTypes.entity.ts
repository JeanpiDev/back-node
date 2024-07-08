import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DevicePlotHeaders } from "./DevicePlotHeaders.entity";

@Index("device_plot_header_types_pkey", ["id"], { unique: true })
@Entity("device_plot_header_types", { schema: "public" })
export class DevicePlotHeaderTypes {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "code", nullable: true, length: 5 })
  code: string | null;

  @Column("character varying", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("character varying", { name: "color", length: 155 })
  color: string;

  @Column("smallint", { name: "central_monitoring" })
  centralMonitoring: number;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => DevicePlotHeaders,
    (devicePlotHeaders) => devicePlotHeaders.devicePlotHeaderTypes
  )
  @JoinColumn([{ name: "device_plot_header_id", referencedColumnName: "id" }])
  devicePlotHeader: DevicePlotHeaders;
}
