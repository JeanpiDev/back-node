import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DevicePlots } from "./DevicePlots.entity";
import { DeviceTypes } from "./DeviceTypes.entity";

@Index("brands_pkey", ["id"], { unique: true })
@Entity("brands", { schema: "public" })
export class Brands {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 120 })
  name: string;

  @Column("smallint", { name: "status", default: () => "1" })
  status: number;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => DevicePlots, (devicePlots) => devicePlots.brand)
  devicePlots: DevicePlots[];

  @OneToMany(() => DeviceTypes, (deviceTypes) => deviceTypes.brand)
  deviceTypes: DeviceTypes[];
}
