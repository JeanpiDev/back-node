/* eslint-disable prettier/prettier */
import { Controller} from '@nestjs/common';
import { ReportsService } from '../database/db.service';

@Controller('reportsController')
export class ReportsController {
  constructor(private readonly reportsController: ReportsService) {}
}