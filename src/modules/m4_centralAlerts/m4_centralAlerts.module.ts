/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { CentralAlertsService } from '../database/db.service';

import { CentralAlertsController } from '../database/db.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Alerts,CentralAlerts,CentralSilencedAlerts,Novelties,NoveltyTypes } from '../database/db.entities/db.entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Alerts,CentralAlerts,CentralSilencedAlerts,Novelties,NoveltyTypes
    ])
  ],
  providers: [
    CentralAlertsService
  ],
  controllers: [
    CentralAlertsController
  ],
  exports: [
    CentralAlertsService
  ]
})
export class CentralAlertsModule {}