import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("webservice_logs_pkey", ["id"], { unique: true })
@Entity("webservice_logs", { schema: "public" })
export class WebserviceLogs {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "device_id", nullable: true })
  deviceId: number | null;

  @Column("text", { name: "plot" })
  plot: string;

  @Column("text", { name: "xml_tosend" })
  xmlTosend: string;

  @Column("character varying", { name: "response_ws", length: 500 })
  responseWs: string;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp without time zone", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;
}
