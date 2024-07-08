import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MobileUnities } from "./MobileUnities.entity";

@Index("mobile_unity_option_list_pkey", ["id"], { unique: true })
@Entity("mobile_unity_option_list", { schema: "public" })
export class MobileUnityOptionList {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @ManyToMany(
    () => MobileUnities,
    (mobileUnities) => mobileUnities.mobileUnityOptionLists
  )
  @JoinTable({
    name: "mobile_unity_option",
    joinColumns: [{ name: "option_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "unity_id", referencedColumnName: "id" }],
    schema: "public",
  })
  mobileUnities: MobileUnities[];
}
