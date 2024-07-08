import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Devices } from "./Devices.entity";
import { Users } from "./Users.entity";

@Index("idxdevice_user_device_id", ["deviceId"], {})
@Index("device_user_pkey", ["id"], { unique: true })
@Index("idxdevice_user_user_id", ["userId"], {})
@Entity("device_user", { schema: "public" })
export class DeviceUser {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "device_id" })
  deviceId: number;

  @Column("integer", { name: "user_id" })
  userId: number;

  @Column("timestamp without time zone", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("timestamp without time zone", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @ManyToOne(() => Devices, (devices) => devices.deviceUsers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "device_id", referencedColumnName: "id" }])
  device: Devices;

  @ManyToOne(() => Users, (users) => users.deviceUsers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
