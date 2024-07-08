import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DevicePlotDeviceType } from "./DevicePlotDeviceType.entity";
import { HabitosConduccion } from "./HabitosConduccion.entity";
import { MobileUnityEventType } from "./MobileUnityEventType.entity";
import { NoveltyTypes } from "./NoveltyTypes.entity";

@Index("event_types_pkey", ["id"], { unique: true })
@Entity("event_types", { schema: "public" })
export class EventTypes {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "name",
    length: 200,
    default: () => "'1'",
  })
  name: string;

  @Column("smallint", { name: "status" })
  status: number;

  @Column("character varying", {
    name: "color",
    length: 155,
    default: () => "'#FFF'",
  })
  color: string;

  @Column("smallint", { name: "central_monitoring", default: () => "1" })
  centralMonitoring: number;

  @Column("smallint", { name: "visible_in_app", default: () => "0" })
  visibleInApp: number;

  @Column("integer", { name: "code_ws", nullable: true })
  codeWs: number | null;

  @OneToMany(
    () => DevicePlotDeviceType,
    (devicePlotDeviceType) => devicePlotDeviceType.eventType
  )
  devicePlotDeviceTypes: DevicePlotDeviceType[];

  @OneToMany(
    () => HabitosConduccion,
    (habitosConduccion) => habitosConduccion.eventType
  )
  habitosConduccions: HabitosConduccion[];

  @OneToMany(
    () => MobileUnityEventType,
    (mobileUnityEventType) => mobileUnityEventType.eventType
  )
  mobileUnityEventTypes: MobileUnityEventType[];

  @OneToMany(() => NoveltyTypes, (noveltyTypes) => noveltyTypes.eventType)
  noveltyTypes: NoveltyTypes[];
}
