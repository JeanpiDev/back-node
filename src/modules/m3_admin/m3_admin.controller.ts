/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { EventTypesService } from '../database/db.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly AdminService: EventTypesService) {}
}