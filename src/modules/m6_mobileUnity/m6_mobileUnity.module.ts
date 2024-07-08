/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MobileUnitiesService,EventsService } from '../database/db.service';
import { MobileUnitiesController } from '../database/db.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MobileUnities,MobileUnityDallasKeys,MobileUnityDriver,MobileUnityGroups,ShareTracking,HabitosConduccion,MobileUnityAlerts,MobileUnityEvents,MobileUnityLastEvents,NotificationUnity,Preoperacional } from '../database/db.entities/db.entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MobileUnities,MobileUnityDallasKeys,MobileUnityDriver,MobileUnityGroups,ShareTracking,HabitosConduccion,MobileUnityAlerts,MobileUnityEvents,MobileUnityLastEvents,NotificationUnity,Preoperacional
    ])
  ],
  providers: [
    MobileUnitiesService, EventsService
  ],
  controllers: [
    MobileUnitiesController
  ],
  exports: [
    MobileUnitiesService, EventsService
  ]
})
export class MobileUnityModule {}