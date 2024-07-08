/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MobileUnities } from "./MobileUnities.entity";
import { MobileUnityClass } from "./MobileUnityClass.entity";

@Index("idxmobile_unity_subclass_class_id", ["classId"], {})
@Index("mobile_unity_subclass_pkey", ["id"], { unique: true })
@Entity("mobile_unity_subclass", { schema: "public" })
export class MobileUnitySubclass {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "class_id" })
  classId: number;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @OneToMany(() => MobileUnities, (mobileUnities) => mobileUnities.subclass)
  mobileUnities: MobileUnities[];

  @ManyToOne(
    () => MobileUnityClass,
    (mobileUnityClass) => mobileUnityClass.mobileUnitySubclasses
  )
  @JoinColumn([{ name: "class_id", referencedColumnName: "id" }])
  class: MobileUnityClass;
}
