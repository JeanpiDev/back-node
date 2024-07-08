import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("event_driver_validator_pkey", ["id"], { unique: true })
@Index("idx_unity_id_validator", ["unityId"], {})
@Entity("event_driver_validator", { schema: "public" })
export class EventDriverValidator {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "unity_id", nullable: true })
  unityId: number | null;

  @Column("integer", { name: "id_driver", nullable: true })
  idDriver: number | null;

  @Column("boolean", { name: "on", nullable: true })
  on: boolean | null;

  @Column("boolean", { name: "off", nullable: true })
  off: boolean | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
