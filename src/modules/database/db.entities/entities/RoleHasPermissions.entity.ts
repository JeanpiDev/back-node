import { Column, Entity, Index } from "typeorm";

@Index("role_has_permissions_pkey", ["permissionId", "roleId"], {
  unique: true,
})
@Index("idxrole_has_permissions_role_id", ["roleId"], {})
@Entity("role_has_permissions", { schema: "public" })
export class RoleHasPermissions {
  @Column("integer", { primary: true, name: "permission_id" })
  permissionId: number;

  @Column("integer", { primary: true, name: "role_id" })
  roleId: number;
}
