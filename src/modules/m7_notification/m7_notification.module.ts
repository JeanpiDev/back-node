/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { NotificationsService } from '../database/db.service';
import { NotificationController } from '../database/db.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeographicalResourceNotification,GeographicalResourcesNotifications,MobileUnityEventType,Notifications,UserNotifications } from '../database/db.entities/db.entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      GeographicalResourceNotification,GeographicalResourcesNotifications,MobileUnityEventType,Notifications,UserNotifications
    ])
  ],
  providers: [
    NotificationsService
  ],
  controllers: [
    NotificationController
  ],
  exports: [
    NotificationsService
  ]
})
export class NotificationModule {}