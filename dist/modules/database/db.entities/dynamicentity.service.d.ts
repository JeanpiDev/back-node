import { Type } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { FindOptionsWhere, Repository } from 'typeorm';
import { Registry } from './registry.service';
export declare class DynamicEntityService {
    private moduleRef;
    private registry;
    private repository;
    constructor(moduleRef: ModuleRef, registry: Registry);
    getEntityByName(entityName: string): Promise<Type<any>>;
    getRepositoryByName(entityName: string): Promise<Repository<any>>;
    findAllSeparated(entityName: string): Promise<{
        headers: string[];
        body: any[];
    }>;
    separarHeadersYBody(usuarios: any[]): Promise<{
        headers: string[];
        body: any[];
    }>;
    findAll(entityName: string): Promise<any[]>;
    findOneP(entityName: string, id: FindOptionsWhere<any>): Promise<any>;
    create(entityName: string, entityData: any): Promise<any>;
    search(entityName: string, conditions: any, order?: any): Promise<any[]>;
    searchCamp(entityName: string, conditions: any, fields: string[], order?: any): Promise<any[]>;
    searchCampAll(entityName: string, fields: string[], order?: any): Promise<any[]>;
    searchCampWithRelations(entityName: string, conditions: any, fields: string[], relations: string[]): Promise<any[]>;
    searchCampWithJoin(entityName: string, conditions: any, fields: string[], join: {
        table: string;
        condition: any;
    }): Promise<any[]>;
    searchCampWithRelationsWC(entityName: string, fields: string[], relations: string[]): Promise<any[]>;
    edit(entityName: string, conditions: any, data: any): Promise<any>;
    insert(entityName: string, data: any): Promise<any>;
    remove(entityName: string, id: number): Promise<boolean>;
    formatTime(totalMiliseconds: number): Promise<string>;
}
