import { Column, Entity, Index } from "typeorm";

@Index(
  "idxmodel_has_roles_model_type_model_id_role_id",
  ["modelId", "modelType", "roleId"],
  {}
)
@Index("model_has_roles_pkey", ["modelId", "modelType", "roleId"], {
  unique: true,
})
@Entity("model_has_roles", { schema: "public" })
export class ModelHasRoles {
  @Column("integer", { primary: true, name: "role_id" })
  roleId: number;

  @Column("character varying", {
    primary: true,
    name: "model_type",
    length: 191,
  })
  modelType: string;

  @Column("bigint", { primary: true, name: "model_id" })
  modelId: string;
}
