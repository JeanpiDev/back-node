/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { DevicesSerice,CommandService } from '../database/db.service';

@Controller('devicesService')
export class DevicesController {
  constructor(
    private readonly devicesSerice: DevicesSerice,
    private readonly commandService: CommandService
  ) {}
}