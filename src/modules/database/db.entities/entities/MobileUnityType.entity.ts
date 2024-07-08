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

@Index("idxmobile_unity_type_class_id", ["classId"], {})
@Index("mobile_unity_type_pkey", ["id"], { unique: true })
@Entity("mobile_unity_type", { schema: "public" })
export class MobileUnityType {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "class_id" })
  classId: number;

  @Column("character varying", { name: "image", length: 45 })
  image: string;

  @Column("character varying", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @OneToMany(() => MobileUnities, (mobileUnities) => mobileUnities.type)
  mobileUnities: MobileUnities[];

  @ManyToOne(
    () => MobileUnityClass,
    (mobileUnityClass) => mobileUnityClass.mobileUnityTypes
  )
  @JoinColumn([{ name: "class_id", referencedColumnName: "id" }])
  class: MobileUnityClass;
}
