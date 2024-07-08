import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("user_email_templates_pkey", ["id"], { unique: true })
@Entity("user_email_templates", { schema: "public" })
export class UserEmailTemplates {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "customer_id" })
  customerId: number;

  @Column("character varying", { name: "laravel_template_name", length: 500 })
  laravelTemplateName: string;

  @Column("character varying", { name: "user_template_name", length: 100 })
  userTemplateName: string;

  @Column("json", { name: "json_template" })
  jsonTemplate: object;

  @Column("timestamp with time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp with time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
