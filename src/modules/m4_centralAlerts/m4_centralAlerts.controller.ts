/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { CentralAlertsService } from '../database/db.service';

@Controller('CentralAlertsController')
export class CentralAlertsController {
  constructor(private readonly devicesService: CentralAlertsService) {}
}