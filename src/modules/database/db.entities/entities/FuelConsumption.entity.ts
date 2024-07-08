import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fuel_consumption_pkey", ["id"], { unique: true })
@Entity("fuel_consumption", { schema: "public" })
export class FuelConsumption {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "unity_id" })
  unityId: number;

  @Column("double precision", {
    name: "fuel_quantity",
    nullable: true,
    precision: 53,
  })
  fuelQuantity: number | null;

  @Column("double precision", { name: "price", nullable: true, precision: 53 })
  price: number | null;

  @Column("double precision", {
    name: "car_mileage",
    nullable: true,
    precision: 53,
  })
  carMileage: number | null;

  @Column("character varying", { name: "ruta", nullable: true, length: 50 })
  ruta: string | null;

  @Column("timestamp without time zone", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("timestamp without time zone", {
    name: "updated_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date | null;

  @Column("double precision", {
    name: "resultgal",
    nullable: true,
    precision: 53,
  })
  resultgal: number | null;

  @Column("integer", { name: "resultkm", nullable: true })
  resultkm: number | null;

  @Column("double precision", {
    name: "rendimiento",
    nullable: true,
    precision: 53,
  })
  rendimiento: number | null;
}
