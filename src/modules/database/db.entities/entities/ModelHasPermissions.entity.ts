import { Column, Entity, Index } from "typeorm";

@Index("model_has_permissions_pkey", ["modelId", "modelType", "permissionId"], {
  unique: true,
})
@Index(
  "idxmodel_has_permissions_model_type_model_id",
  ["modelId", "modelType"],
  {}
)
@Entity("model_has_permissions", { schema: "public" })
export class ModelHasPermissions {
  @Column("integer", { primary: true, name: "permission_id" })
  permissionId: number;

  @Column("character varying", {
    primary: true,
    name: "model_type",
    length: 191,
  })
  modelType: string;

  @Column("bigint", { primary: true, name: "model_id" })
  modelId: string;
}
