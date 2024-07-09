import { Repository, FindOptionsWhere } from 'typeorm';
export declare class EntitiesService<T> {
    private readonly rep;
    private readonly repository;
    constructor(rep: Repository<T>);
    findAllSeparated(): Promise<{
        headers: string[];
        body: any[];
    }>;
    separarHeadersYBody(usuarios: any[]): Promise<{
        headers: string[];
        body: any[];
    }>;
    findAll(): Promise<T[]>;
    create(customer: T): Promise<T>;
    search(conditions: FindOptionsWhere<T>): Promise<T[]>;
    edit(conditions: FindOptionsWhere<T>, data: Partial<T>): Promise<T | null>;
    insert(data: Partial<T>): Promise<T>;
    remove(id: number): Promise<boolean>;
}
