/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DynamicEntityService, ReportsService, Registry} from '../database/db.service';
import { ReportsController } from '../database/db.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormStructureCustomer,FuelConsumption,ScheduledReports,SharePreoperational,TemporalWorks,Works } from '../database/db.entities/db.entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      FormStructureCustomer,FuelConsumption,ScheduledReports,SharePreoperational,TemporalWorks,Works
    ]),
    // DatabaseModule
  ],
  providers: [
    ReportsService,
    DynamicEntityService,
    Registry
  ],
  controllers: [
    ReportsController
  ],
  exports: [
    ReportsService,
  ]
})
export class ReportsModule {}