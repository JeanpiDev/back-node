import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("permissions_pkey", ["id"], { unique: true })
@Entity("permissions", { schema: "public" })
export class Permissions {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 191 })
  name: string;

  @Column("character varying", { name: "guard_name", length: 191 })
  guardName: string;

  @Column("integer", { name: "position" })
  position: number;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
