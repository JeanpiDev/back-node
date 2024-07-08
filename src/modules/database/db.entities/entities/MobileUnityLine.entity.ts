import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Devices } from "./Devices.entity";
import { MobileUnities } from "./MobileUnities.entity";

@Index("mobile_unity_line_pkey", ["id"], { unique: true })
@Entity("mobile_unity_line", { schema: "public" })
export class MobileUnityLine {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @OneToMany(() => Devices, (devices) => devices.line)
  devices: Devices[];

  @OneToMany(() => MobileUnities, (mobileUnities) => mobileUnities.line)
  mobileUnities: MobileUnities[];
}
