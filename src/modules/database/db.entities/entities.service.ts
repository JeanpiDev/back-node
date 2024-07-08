/* eslint-disable prettier/prettier */
// src/modules/database/database.service.ts
import { Injectable } from '@nestjs/common';
//import { ModuleRef } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions, FindManyOptions, FindOptionsWhere } from 'typeorm';

@Injectable()
export class EntitiesService<T> {
    private readonly repository: Repository<T>;

    constructor(
        @InjectRepository(Object)
        private readonly rep: Repository<T>,
        //private moduleRef: ModuleRef,
    ) {
        this.repository = rep;
    }

    
    /***********************  PERSONALIZADAS  ******************************************************* */
      async findAllSeparated(): Promise<{ headers: string[], body: any[] }> {
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
    async findAll(): Promise<T[]> {
        return await this.repository.find();
    }

    async create(customer: T): Promise<T> {
        return await this.repository.save(customer);
    }

    // Nueva función de búsqueda
    async search(conditions: FindOptionsWhere<T>): Promise<T[]> {
        const options: FindManyOptions<T> = { where: conditions };
        return this.repository.find(options);
    }

    // Nueva función de edición
    async edit(conditions: FindOptionsWhere<T>, data: Partial<T>): Promise<T | null> {
        await this.repository.update(conditions, data as any);
        const options: FindOneOptions<T> = { where: conditions };
        return this.repository.findOne(options)?? null;
    }

    // Nueva función de inserción PND
    async insert(data: Partial<T>): Promise<T> {
        const newEntity = this.repository.create(data as any);
        return this.repository.save(newEntity) as Promise<T>; // Casting to Promise<T>
    }

    // Nueva función de eliminación
    async remove(id: number): Promise<boolean> {
        const deleteResult = await this.repository.delete(id);
        return deleteResult.affected > 0;
    }


    /*********************************obtener entidad desde string********************************************/
    /*async getEntityByName(entityName: string) {
        try {
          const entity = await this.moduleRef.get(entityName, { strict: false });
          return entity;
        } catch (error) {
          throw new Error(`Entity ${entityName} not found`);
        }
      }*/
    
}