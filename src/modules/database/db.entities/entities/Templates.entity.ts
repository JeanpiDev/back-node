import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customers } from "./Customers.entity";

@Index("templates_pkey", ["id"], { unique: true })
@Entity("templates", { schema: "public" })
export class Templates {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @Column("character varying", { name: "image", nullable: true, length: 45 })
  image: string | null;

  @Column("text", { name: "stylesheet", nullable: true })
  stylesheet: string | null;

  @OneToMany(() => Customers, (customers) => customers.template)
  customers: Customers[];
}
