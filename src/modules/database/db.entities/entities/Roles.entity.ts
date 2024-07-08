import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UsersTypes } from "./UsersTypes.entity";
import { Users } from "./Users.entity";

@Index("roles_pkey", ["id"], { unique: true })
@Entity("roles", { schema: "public" })
export class Roles {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 191 })
  name: string;

  @Column("character varying", { name: "guard_name", length: 191 })
  guardName: string;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => UsersTypes, (usersTypes) => usersTypes.roles)
  @JoinColumn([{ name: "user_type_id", referencedColumnName: "id" }])
  userType: UsersTypes;

  @OneToMany(() => Users, (users) => users.role)
  users: Users[];
}
