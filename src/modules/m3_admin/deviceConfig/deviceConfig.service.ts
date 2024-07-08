/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntitiesService } from '../../database/db.entities/entities.service';
import { EventTypes,Logs,Plans,SimcardLogs,SimcardPlan,Simcards } from '../../database/db.entities/db.entities';

@Injectable()
export class EventTypesService extends EntitiesService<EventTypes>{
  constructor(
    @InjectRepository(EventTypes)
    private readonly E_Repository: Repository<EventTypes>,
  ) {
     super(E_Repository);
  }
}

@Injectable()
export class LogsService extends EntitiesService<Logs>{
  constructor(
    @InjectRepository(Logs)
    private readonly E_Repository: Repository<Logs>,
  ) {
     super(E_Repository);
  }
}

@Injectable()
export class PlansService extends EntitiesService<Plans>{
  constructor(
    @InjectRepository(Plans)
    private readonly E_Repository: Repository<Plans>,
  ) {
     super(E_Repository);
  }
}

@Injectable()
export class SimcardLogsService extends EntitiesService<SimcardLogs>{
  constructor(
    @InjectRepository(SimcardLogs)
    private readonly E_Repository: Repository<SimcardLogs>,
  ) {
     super(E_Repository);
  }
}

@Injectable()
export class SimcardPlanService extends EntitiesService<SimcardPlan>{
  constructor(
    @InjectRepository(SimcardPlan)
    private readonly E_Repository: Repository<SimcardPlan>,
  ) {
     super(E_Repository);
  }
}

@Injectable()
export class SimcardsService extends EntitiesService<Simcards>{
  constructor(
    @InjectRepository(Simcards)
    private readonly E_Repository: Repository<Simcards>,
  ) {
     super(E_Repository);
  }
}