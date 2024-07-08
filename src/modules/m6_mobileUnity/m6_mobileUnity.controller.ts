/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { MobileUnitiesService,EventsService } from '../database/db.service';

@Controller('mobileUnitiesController')
export class MobileUnitiesController {
  constructor(
    private readonly mobileUnitiesService: MobileUnitiesService,
    private readonly eventsService: EventsService,
  ) {}
}