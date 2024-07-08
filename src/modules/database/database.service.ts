/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}

  async verifyConnection(entity: any) {
    try {
      const repository = this.entityManager.getRepository(entity);
      await repository.query('SELECT 1');
      console.log('Conectado a la base de datos correctamente');
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error);
    }
  }
}