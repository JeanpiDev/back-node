import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idxcustomers_blocked_customer_id", ["customerId"], {})
@Index("customers_blocked_pkey", ["id"], { unique: true })
@Index("idxcustomers_blocked_user_id", ["userId"], {})
@Entity("customers_blocked", { schema: "public" })
export class CustomersBlocked {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "customer_id" })
  customerId: number;

  @Column("character varying", { name: "comments", length: 45 })
  comments: string;

  @Column("integer", { name: "user_id" })
  userId: number;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
