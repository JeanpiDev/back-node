import {
  Column,
  Entity,
  Index,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DeviceTypes } from "./DeviceTypes.entity";
import { MobileUnities } from "./MobileUnities.entity";

@Index("variables_pkey", ["id"], { unique: true })
@Entity("variables", { schema: "public" })
export class Variables {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 45 })
  name: string;

  @Column("smallint", { name: "status", default: () => "1" })
  status: number;

  @ManyToMany(() => DeviceTypes, (deviceTypes) => deviceTypes.variables)
  deviceTypes: DeviceTypes[];

  @ManyToMany(() => MobileUnities, (mobileUnities) => mobileUnities.variables)
  mobileUnities: MobileUnities[];
}
