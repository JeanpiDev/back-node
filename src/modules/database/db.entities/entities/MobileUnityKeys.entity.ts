import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MobileUnities } from "./MobileUnities.entity";

@Index("mobile_unity_keys_pkey", ["id"], { unique: true })
@Entity("mobile_unity_keys", { schema: "public" })
export class MobileUnityKeys {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "code", length: 45 })
  code: string;

  @Column("smallint", { name: "status", default: () => "1" })
  status: number;

  @OneToMany(() => MobileUnities, (mobileUnities) => mobileUnities.key)
  mobileUnities: MobileUnities[];
}
