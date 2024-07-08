import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customers } from "./Customers.entity";
import { GeographicalResourcesNotifications } from "./GeographicalResourcesNotifications.entity";

@Index("idxgeographical_resources_customer_id", ["customerId"], {})
@Index("geographical_resources_pkey", ["id"], { unique: true })
@Entity("geographical_resources", { schema: "public" })
export class GeographicalResources {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "customer_id" })
  customerId: number;

  @Column("smallint", { name: "type", nullable: true })
  type: number | null;

  @Column("character varying", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @Column("character varying", { name: "color", nullable: true, length: 45 })
  color: string | null;

  @Column("smallint", { name: "is_private", nullable: true })
  isPrivate: number | null;

  @Column("text", { name: "points", nullable: true })
  points: string | null;

  @Column("smallint", { name: "apply_for_address", nullable: true })
  applyForAddress: number | null;

  @Column("smallint", { name: "status", default: () => "1" })
  status: number;

  @Column("geometry", { name: "points_g", nullable: true })
  pointsG: string | null;

  @ManyToOne(() => Customers, (customers) => customers.geographicalResources, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "customer_id", referencedColumnName: "id" }])
  customer: Customers;

  @OneToMany(
    () => GeographicalResourcesNotifications,
    (geographicalResourcesNotifications) =>
      geographicalResourcesNotifications.geographicalResources
  )
  geographicalResourcesNotifications: GeographicalResourcesNotifications[];
}
