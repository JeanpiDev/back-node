/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntitiesService } from '../../database/db.entities/entities.service';
import { MobileUnityBrands,MobileUnityClass,MobileUnityLine,MobileUnityStatus,MobileUnityStatusHistory,MobileUnitySubclass,MobileUnityType } from '../../database/db.entities/db.entities';

@Injectable()
export class MobileUnityBrandsService extends EntitiesService<MobileUnityBrands>{
  constructor(
    @InjectRepository(MobileUnityBrands)
    private readonly E_Repository: Repository<MobileUnityBrands>,
  ) {
     super(E_Repository);
  }
}

@Injectable()
export class MobileUnityClassService extends EntitiesService<MobileUnityClass>{
  constructor(
    @InjectRepository(MobileUnityClass)
    private readonly E_Repository: Repository<MobileUnityClass>,
  ) {
     super(E_Repository);
  }
}

@Injectable()
export class MobileUnityLineService extends EntitiesService<MobileUnityLine>{
  constructor(
    @InjectRepository(MobileUnityLine)
    private readonly E_Repository: Repository<MobileUnityLine>,
  ) {
     super(E_Repository);
  }
}

@Injectable()
export class MobileUnityStatusService extends EntitiesService<MobileUnityStatus>{
  constructor(
    @InjectRepository(MobileUnityStatus)
    private readonly E_Repository: Repository<MobileUnityStatus>,
  ) {
     super(E_Repository);
  }
}

@Injectable()
export class MobileUnityStatusHistoryService extends EntitiesService<MobileUnityStatusHistory>{
  constructor(
    @InjectRepository(MobileUnityStatusHistory)
    private readonly E_Repository: Repository<MobileUnityStatusHistory>,
  ) {
     super(E_Repository);
  }
}

@Injectable()
export class MobileUnitySubclassService extends EntitiesService<MobileUnitySubclass>{
  constructor(
    @InjectRepository(MobileUnitySubclass)
    private readonly E_Repository: Repository<MobileUnitySubclass>,
  ) {
     super(E_Repository);
  }
}

@Injectable()
export class MobileUnityTypeService extends EntitiesService<MobileUnityType>{
  constructor(
    @InjectRepository(MobileUnityType)
    private readonly E_Repository: Repository<MobileUnityType>,
  ) {
     super(E_Repository);
  }
}
