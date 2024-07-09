import { Repository } from 'typeorm';
import { EntitiesService } from '../../database/db.entities/entities.service';
import { Consultants, DocumentTypes, ModelHasPermissions, ModelHasRoles, Permissions, RoleHasPermissions, Roles } from '../../database/db.entities/db.entities';
export declare class ConsultantsService extends EntitiesService<Consultants> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<Consultants>);
}
export declare class DocumentTypesService extends EntitiesService<DocumentTypes> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<DocumentTypes>);
}
export declare class ModelHasPermissionsService extends EntitiesService<ModelHasPermissions> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<ModelHasPermissions>);
}
export declare class ModelHasRolesService extends EntitiesService<ModelHasRoles> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<ModelHasRoles>);
}
export declare class PermissionsService extends EntitiesService<Permissions> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<Permissions>);
}
export declare class RoleHasPermissionsService extends EntitiesService<RoleHasPermissions> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<RoleHasPermissions>);
}
export declare class RolesService extends EntitiesService<Roles> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<Roles>);
}
