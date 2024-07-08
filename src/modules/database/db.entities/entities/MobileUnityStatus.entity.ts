import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MobileUnities } from "./MobileUnities.entity";
import { MobileUnityStatusHistory } from "./MobileUnityStatusHistory.entity";

@Index("mobile_unity_status_pkey", ["id"], { unique: true })
@Entity("mobile_unity_status", { schema: "public" })
export class MobileUnityStatus {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 45 })
  name: string;

  @Column("smallint", { name: "status", nullable: true })
  status: number | null;

  @OneToMany(() => MobileUnities, (mobileUnities) => mobileUnities.status_2)
  mobileUnities: MobileUnities[];

  @OneToMany(
    () => MobileUnityStatusHistory,
    (mobileUnityStatusHistory) => mobileUnityStatusHistory.status
  )
  mobileUnityStatusHistories: MobileUnityStatusHistory[];
}
