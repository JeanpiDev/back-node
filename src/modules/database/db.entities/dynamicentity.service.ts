/* eslint-disable prettier/prettier */
// dynamic-entity.service.ts
import { Injectable, Type } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { FindManyOptions, FindOptionsWhere, Repository } from 'typeorm';
import { entityMap } from './entityMap';
import { Registry } from './registry.service';

@Injectable()
export class DynamicEntityService {
  private repository: Repository<any>;

  constructor(
    private moduleRef: ModuleRef,
    private registry: Registry
  ) {
    this.registry.registerConstructor(this.constructor);
  }

  /******** creacion dinamica de entidad y repositorio pos string************ */
  
  async getEntityByName(entityName: string): Promise<Type<any>> {
    const entity = entityMap[entityName];
    if (!entity) {
      throw new Error(`Entity ${entityName} not found`);
    }
    return entity;
  }

  async getRepositoryByName(entityName: string): Promise<Repository<any>> {
    const entity = await this.getEntityByName(entityName);
    return this.moduleRef.get(`${entity.name}Repository` as any, { strict: false });
  }

/***********************  PERSONALIZADAS  ******************************************************* */
  
  async findAllSeparated(entityName: string): Promise<{ headers: string[], body: any[] }> {
    this.repository = await this.getRepositoryByName(entityName);
    const usuarios = await this.repository.find();
    return this.separarHeadersYBody(usuarios);
  }

  async separarHeadersYBody(usuarios: any[]): Promise<{ headers: string[], body: any[] }> {
      if (usuarios.length === 0) {
      return { headers: [], body: [] };
      }
  
      // Obtener los nombres de las propiedades para los headers
      const headers = Object.keys(usuarios[0]);
  
      // Crear el body con los valores de cada usuario
      const body = usuarios;//.map(usuario => Object.);
  
      return { headers, body };
  }

/*****************************   CRUDs    *************************************************** */        
  //Trae toda la información de una entidad
  async findAll(entityName: string): Promise<any[]> {
    this.repository = await this.getRepositoryByName(entityName);
    return this.repository.find();
  }
  //Trae la informacion de un registro especifico filtrando por id
  async findOneP(entityName: string, id: FindOptionsWhere<any>): Promise<any> {
    this.repository = await this.getRepositoryByName(entityName);
    return this.repository.findOne(id);
  }
  //Crea un nuevo registro
  async create(entityName: string, entityData: any): Promise<any> {
    this.repository = await this.getRepositoryByName(entityName);
    const entity = this.repository.create(entityData);
    return this.repository.save(entity);
  }
  //Busca toda la información de un registro con una condicion especifica
  async search(entityName: string, conditions: any, order?: any): Promise<any[]> {
    this.repository = await this.getRepositoryByName(entityName);
    if (!order) {
      order = { id: 'DESC' };
    }
    const options: FindManyOptions<any> = { 
      where: conditions,
      order: order 
    };
    return this.repository.find(options);
  }
  //Trae toda la informacion de un registro, especificando los campos que se quieren
  async searchCamp(entityName: string, conditions: any, fields: string[], order?: any): Promise<any[]> {
    if (!order) {
      order = { id: 'DESC' };
    }
    this.repository = await this.getRepositoryByName(entityName);
    const options: FindManyOptions<any> = {
      where: conditions,
      select: fields,
      order: order
    };
    return this.repository.find(options);
  }

  //Trae toda la informacion de un registro, especificando los campos que se quieren
  async searchCampAll(entityName: string, fields: string[], order?: any): Promise<any[]> {
    if (!order) {
      order = { id: 'DESC' };
    }
    this.repository = await this.getRepositoryByName(entityName);
    const options: FindManyOptions<any> = {
      select: fields,
      order: order
    };
    return this.repository.find(options);
  }
  //Busca un registro con la informacion de las llaves foraneas
  async searchCampWithRelations(entityName: string, conditions: any, fields: string[], relations: string[]): Promise<any[]> {
    
    this.repository = await this.getRepositoryByName(entityName);
    const options: FindManyOptions<any> = {
      where: conditions,
      select: fields,
      relations: relations
    };
    return this.repository.find(options);
  }
  //Busca un registro con la informacion de las llaves foraneas que no estan relacionadas como llaves foraneas
  async searchCampWithJoin(entityName: string, conditions: any, fields: string[], join: { table: string, condition: any }): Promise<any[]> {
    this.repository = await this.getRepositoryByName(entityName);
    const query = await this.repository.createQueryBuilder(entityName.toLowerCase());
    query.select(fields);
    query.innerJoin(join.table, join.table, join.condition);
    const info = await query.getRawMany();
    return info;

  }
  //Busca un registro con la informacion de las llaves foraneas y trae todos los campos sin excepcion
  async searchCampWithRelationsWC(entityName: string, fields: string[], relations: string[]): Promise<any[]> {
    
    this.repository = await this.getRepositoryByName(entityName);
    const options: FindManyOptions<any> = {
       relations: relations,
       select: fields,
    };
    return this.repository.find(options);
  }
  //Edita un registro
  async edit(entityName: string, conditions: any, data: any): Promise<any> {
    this.repository = await this.getRepositoryByName(entityName);
    const response = await this.repository.update(conditions, data);
    return response;
  }
  //Inserta un registro
  async insert(entityName: string, data: any): Promise<any> {
    this.repository = await this.getRepositoryByName(entityName);
    const newEntity = this.repository.create(data as any);
    return this.repository.save(newEntity);
  }
  //Elimina un registro
  async remove(entityName: string, id: number): Promise<boolean> {
    this.repository = await this.getRepositoryByName(entityName);
    const deleteResult = await this.repository.delete(id);
    return deleteResult.affected > 0;
  }

  /*****************************   CALCULOS    *************************************************** */
  //Convuierte milisegundos a horas y minutos
  async formatTime(totalMiliseconds: number): Promise<string> {
    const hours = Math.floor(totalMiliseconds / 3600000);
    const minutes = Math.floor((totalMiliseconds % 3600000) / 60000);
  
    return `${hours}H y ${minutes}M`;
  }

}