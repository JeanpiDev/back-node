import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("share_tracking", { schema: "public" })
export class ShareTracking {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("timestamp without time zone", { name: "start_date", nullable: true })
  startDate: Date | null;

  @Column("timestamp without time zone", { name: "end_date", nullable: true })
  endDate: Date | null;

  @Column("character varying", {
    name: "url_share",
    nullable: true,
    length: 200,
  })
  urlShare: string | null;

  @Column("integer", { name: "mobile_unity_id", nullable: true })
  mobileUnityId: number | null;

  @Column("character varying", { name: "token", nullable: true, length: 45 })
  token: string | null;

  @Column("character varying", { name: "emails", nullable: true, length: 255 })
  emails: string | null;

  @Column("character varying", { name: "token_user", length: 500 })
  tokenUser: string;
}
