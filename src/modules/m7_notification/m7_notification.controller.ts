/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { NotificationsService } from '../database/db.service';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationController: NotificationsService) {}
}