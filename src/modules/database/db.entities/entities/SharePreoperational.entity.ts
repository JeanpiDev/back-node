import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("share_preoperational_pkey", ["id"], { unique: true })
@Entity("share_preoperational", { schema: "public" })
export class SharePreoperational {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "unity_id", length: 800 })
  unityId: string;

  @Column("integer", { name: "customer" })
  customer: number;

  @Column("text", { name: "token" })
  token: string;

  @Column("character varying", { name: "url_send", length: 200 })
  urlSend: string;

  @Column("character varying", { name: "status", length: 10 })
  status: string;

  @Column("timestamp without time zone", { name: "start_date" })
  startDate: Date;

  @Column("timestamp without time zone", { name: "end_date", nullable: true })
  endDate: Date | null;

  @Column("text", { name: "token_user" })
  tokenUser: string;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
