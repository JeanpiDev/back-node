import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Devices } from "./Devices.entity";

@Index("idxdevice_tests_device_id", ["deviceId"], {})
@Index("device_tests_pkey", ["id"], { unique: true })
@Entity("device_tests", { schema: "public" })
export class DeviceTests {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "device_id" })
  deviceId: number;

  @Column("timestamp without time zone", {
    name: "date",
    default: () => "CURRENT_TIMESTAMP",
  })
  date: Date;

  @Column("text", { name: "comments" })
  comments: string;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Devices, (devices) => devices.deviceTests)
  @JoinColumn([{ name: "device_id", referencedColumnName: "id" }])
  device: Devices;
}
