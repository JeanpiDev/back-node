import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("device_type_commands_pkey", ["id"], { unique: true })
@Entity("device_type_commands", { schema: "public" })
export class DeviceTypeCommands {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "device_type_id" })
  deviceTypeId: number;

  @Column("integer", { name: "command_id" })
  commandId: number;

  @Column("character varying", { name: "command", length: 200 })
  command: string;
}
