import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MobileUnityDrivers } from "./MobileUnityDrivers.entity";
import { MobileUnities } from "./MobileUnities.entity";

@Index("mobile_unity_driver_pkey", ["driverId", "unityId"], { unique: true })
@Index("idxmobile_unity_driver_driver_id", ["driverId"], {})
@Index("idxmobile_unity_driver_unity_id", ["unityId"], {})
@Entity("mobile_unity_driver", { schema: "public" })
export class MobileUnityDriver {
  @Column("integer", { primary: true, name: "unity_id" })
  unityId: number;

  @Column("integer", { primary: true, name: "driver_id" })
  driverId: number;

  @Column("timestamp without time zone", { name: "start_date", nullable: true })
  startDate: Date | null;

  @Column("timestamp without time zone", { name: "end_date", nullable: true })
  endDate: Date | null;

  @ManyToOne(
    () => MobileUnityDrivers,
    (mobileUnityDrivers) => mobileUnityDrivers.mobileUnityDrivers
  )
  @JoinColumn([{ name: "driver_id", referencedColumnName: "id" }])
  driver: MobileUnityDrivers;

  @ManyToOne(
    () => MobileUnities,
    (mobileUnities) => mobileUnities.mobileUnityDrivers2
  )
  @JoinColumn([{ name: "unity_id", referencedColumnName: "id" }])
  unity: MobileUnities;
}
