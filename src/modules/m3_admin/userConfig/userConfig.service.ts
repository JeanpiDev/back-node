/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntitiesService } from '../../database/db.entities/entities.service';
import { Consultants,DocumentTypes,ModelHasPermissions,ModelHasRoles,Permissions,RoleHasPermissions,Roles } from '../../database/db.entities/db.entities';

@Injectable()
export class ConsultantsService extends EntitiesService<Consultants>{
  constructor(
    @InjectRepository(Consultants)
    private readonly E_Repository: Repository<Consultants>,
  ) {
     super(E_Repository);
  }
}

@Injectable()
export class DocumentTypesService extends EntitiesService<DocumentTypes>{
  constructor(
    @InjectRepository(DocumentTypes)
    private readonly E_Repository: Repository<DocumentTypes>,
  ) {
     super(E_Repository);
  }
}

@Injectable()
export class ModelHasPermissionsService extends EntitiesService<ModelHasPermissions>{
  constructor(
    @InjectRepository(ModelHasPermissions)
    private readonly E_Repository: Repository<ModelHasPermissions>,
  ) {
     super(E_Repository);
  }
}

@Injectable()
export class ModelHasRolesService extends EntitiesService<ModelHasRoles>{
  constructor(
    @InjectRepository(ModelHasRoles)
    private readonly E_Repository: Repository<ModelHasRoles>,
  ) {
     super(E_Repository);
  }
}

@Injectable()
export class PermissionsService extends EntitiesService<Permissions>{
  constructor(
    @InjectRepository(Permissions)
    private readonly E_Repository: Repository<Permissions>,
  ) {
     super(E_Repository);
  }
}

@Injectable()
export class RoleHasPermissionsService extends EntitiesService<RoleHasPermissions>{
  constructor(
    @InjectRepository(RoleHasPermissions)
    private readonly E_Repository: Repository<RoleHasPermissions>,
  ) {
     super(E_Repository);
  }
}

@Injectable()
export class RolesService extends EntitiesService<Roles>{
  constructor(
    @InjectRepository(Roles)
    private readonly E_Repository: Repository<Roles>,
  ) {
     super(E_Repository);
  }
}