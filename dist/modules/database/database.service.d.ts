import { EntityManager } from 'typeorm';
export declare class DatabaseService {
    private readonly entityManager;
    constructor(entityManager: EntityManager);
    verifyConnection(entity: any): Promise<void>;
}
