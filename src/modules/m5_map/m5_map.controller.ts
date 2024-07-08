/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { MapService } from '../database/db.service';

@Controller('MapController')
export class MapController {
  constructor(private readonly mapService: MapService) {}
}