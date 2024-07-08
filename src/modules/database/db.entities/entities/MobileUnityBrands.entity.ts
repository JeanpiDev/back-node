import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MobileUnities } from "./MobileUnities.entity";

@Index("mobile_unity_brands_pkey", ["id"], { unique: true })
@Entity("mobile_unity_brands", { schema: "public" })
export class MobileUnityBrands {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @OneToMany(() => MobileUnities, (mobileUnities) => mobileUnities.brand_2)
  mobileUnities: MobileUnities[];
}
