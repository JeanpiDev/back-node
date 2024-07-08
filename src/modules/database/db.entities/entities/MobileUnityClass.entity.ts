import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MobileUnities } from "./MobileUnities.entity";
import { MobileUnitySubclass } from "./MobileUnitySubclass.entity";
import { MobileUnityType } from "./MobileUnityType.entity";

@Index("mobile_unity_class_pkey", ["id"], { unique: true })
@Entity("mobile_unity_class", { schema: "public" })
export class MobileUnityClass {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @Column("smallint", { name: "status", default: () => "0" })
  status: number;

  @OneToMany(() => MobileUnities, (mobileUnities) => mobileUnities.class)
  mobileUnities: MobileUnities[];

  @OneToMany(
    () => MobileUnitySubclass,
    (mobileUnitySubclass) => mobileUnitySubclass.class
  )
  mobileUnitySubclasses: MobileUnitySubclass[];

  @OneToMany(() => MobileUnityType, (mobileUnityType) => mobileUnityType.class)
  mobileUnityTypes: MobileUnityType[];
}
