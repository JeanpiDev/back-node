import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("novelties_pkey", ["id"], { unique: true })
@Entity("novelties", { schema: "public" })
export class Novelties {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "event_id" })
  eventId: number;

  @Column("integer", { name: "role_id", nullable: true })
  roleId: number | null;

  @Column("integer", { name: "novelty_type_id" })
  noveltyTypeId: number;

  @Column("integer", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("text", { name: "comments", nullable: true })
  comments: string | null;

  @Column("smallint", { name: "is_closed", default: () => "'0'" })
  isClosed: number;

  @Column("smallint", { name: "cutomer_notify", default: () => "'1'" })
  cutomerNotify: number;

  @Column("smallint", { name: "silence", default: () => "'0'" })
  silence: number;

  @Column("smallint", { name: "internal_notify", default: () => "'0'" })
  internalNotify: number;

  @Column("character varying", {
    name: "responsible",
    nullable: true,
    length: 45,
    default: () => "NULL::character varying",
  })
  responsible: string | null;

  @Column("timestamp with time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp with time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
