import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EventTypes } from "./EventTypes.entity";

@Index("idxnovelty_types_event_type_id", ["eventTypeId"], {})
@Index("novelty_types_pkey", ["id"], { unique: true })
@Entity("novelty_types", { schema: "public" })
export class NoveltyTypes {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "event_type_id" })
  eventTypeId: number;

  @Column("character varying", { name: "name", length: 45 })
  name: string;

  @Column("smallint", { name: "status", default: () => "1" })
  status: number;

  @ManyToOne(() => EventTypes, (eventTypes) => eventTypes.noveltyTypes)
  @JoinColumn([{ name: "event_type_id", referencedColumnName: "id" }])
  eventType: EventTypes;
}
