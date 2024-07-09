import { ModuleRef } from '@nestjs/core';
import { Registry } from '../db.service';
export declare class DynamicListService {
    private entitymap;
    private moduleRef;
    private registry;
    private repository;
    constructor(entitymap: any, moduleRef: ModuleRef, registry: Registry);
}
