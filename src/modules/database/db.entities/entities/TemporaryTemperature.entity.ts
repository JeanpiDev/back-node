import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("temporary_temperature_pkey", ["id"], { unique: true })
@Entity("temporary_temperature", { schema: "public" })
export class TemporaryTemperature {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "unity_id", nullable: true })
  unityId: number | null;

  @Column("double precision", {
    name: "temperature",
    nullable: true,
    precision: 53,
  })
  temperature: number | null;

  @Column("timestamp without time zone", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("timestamp without time zone", {
    name: "updated_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date | null;
}
