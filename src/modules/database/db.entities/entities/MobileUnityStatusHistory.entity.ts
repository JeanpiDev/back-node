import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MobileUnities } from "./MobileUnities.entity";
import { MobileUnityStatus } from "./MobileUnityStatus.entity";

@Index("mobile_unity_status_history_pkey", ["id"], { unique: true })
@Entity("mobile_unity_status_history", { schema: "public" })
export class MobileUnityStatusHistory {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp without time zone", { name: "start_date", nullable: true })
  startDate: Date | null;

  @Column("timestamp without time zone", { name: "end_date", nullable: true })
  endDate: Date | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("character varying", { name: "comment", nullable: true, length: 250 })
  comment: string | null;

  @ManyToOne(
    () => MobileUnities,
    (mobileUnities) => mobileUnities.mobileUnityStatusHistories
  )
  @JoinColumn([{ name: "mobile_unity_id", referencedColumnName: "id" }])
  mobileUnity: MobileUnities;

  @ManyToOne(
    () => MobileUnityStatus,
    (mobileUnityStatus) => mobileUnityStatus.mobileUnityStatusHistories
  )
  @JoinColumn([{ name: "status_id", referencedColumnName: "id" }])
  status: MobileUnityStatus;
}
