/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class SchedulerService {
  @Cron(CronExpression.EVERY_MINUTE)
  async scheduleCronJob() {
    const now = new Date().getMinutes();
    //Aqui se pueden poner todas las tareas programadas
    
    if (now % 1 === 0) { // cada 1 minuto
      console.log('tarea 1...');
      // Add code for task 1 here
    }

    if (now % 2 === 0) { // cada 2 minutos
      console.log('tarea 2 2...');
      // Add code for task 2 here
    }

    if (now % 3 === 0) { // cada 3 minutos
      console.log('tarea 3...');
      // Add code for task 3 here
    }
  }
}