/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntitiesService } from '../../database/db.entities/entities.service';
import { Parameters,WebserviceBrand,WebserviceLine,WebserviceLogs,WebserviceTypeMobileUnity } from '../../database/db.entities/db.entities';

@Injectable()
export class ParametersService extends EntitiesService<Parameters>{
  constructor(
    @InjectRepository(Parameters)
    private readonly E_Repository: Repository<Parameters>,
  ) {
     super(E_Repository);
  }
}

@Injectable()
export class WebserviceBrandService extends EntitiesService<WebserviceBrand>{
  constructor(
    @InjectRepository(WebserviceBrand)
    private readonly E_Repository: Repository<WebserviceBrand>,
  ) {
     super(E_Repository);
  }
}

@Injectable()
export class WebserviceLineService extends EntitiesService<WebserviceLine>{
  constructor(
    @InjectRepository(WebserviceLine)
    private readonly E_Repository: Repository<WebserviceLine>,
  ) {
     super(E_Repository);
  }
}

@Injectable()
export class WebserviceLogsService extends EntitiesService<WebserviceLogs>{
  constructor(
    @InjectRepository(WebserviceLogs)
    private readonly E_Repository: Repository<WebserviceLogs>,
  ) {
     super(E_Repository);
  }
}

@Injectable()
export class WebserviceTypeMobileUnityService extends EntitiesService<WebserviceTypeMobileUnity>{
  constructor(
    @InjectRepository(WebserviceTypeMobileUnity)
    private readonly E_Repository: Repository<WebserviceTypeMobileUnity>,
  ) {
     super(E_Repository);
  }
}

