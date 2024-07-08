import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customers } from "./Customers.entity";
import { Roles } from "./Roles.entity";

@Index("users_types_pkey", ["id"], { unique: true })
@Entity("users_types", { schema: "public" })
export class UsersTypes {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 45 })
  name: string;

  @Column("smallint", { name: "status", nullable: true })
  status: number | null;

  @OneToMany(() => Customers, (customers) => customers.userType)
  customers: Customers[];

  @OneToMany(() => Roles, (roles) => roles.userType)
  roles: Roles[];
}
