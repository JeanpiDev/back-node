/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntitiesService } from '../../database/db.entities/entities.service';
import { Templates,UserEmailTemplates,UserScheduledEmails } from '../../database/db.entities/db.entities';

@Injectable()
export class TemplatesService extends EntitiesService<Templates>{
  constructor(
    @InjectRepository(Templates)
    private readonly E_Repository: Repository<Templates>,
  ) {
     super(E_Repository);
  }
}

@Injectable()
export class UserEmailTemplatesService extends EntitiesService<UserEmailTemplates>{
  constructor(
    @InjectRepository(UserEmailTemplates)
    private readonly E_Repository: Repository<UserEmailTemplates>,
  ) {
     super(E_Repository);
  }
}

@Injectable()
export class UserScheduledEmailsService extends EntitiesService<UserScheduledEmails>{
  constructor(
    @InjectRepository(UserScheduledEmails)
    private readonly E_Repository: Repository<UserScheduledEmails>,
  ) {
     super(E_Repository);
  }
}