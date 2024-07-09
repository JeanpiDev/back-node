/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { DynamicEntityService } from '../../database/db.service';
import { Between, In, LessThanOrEqual } from 'typeorm';

@Injectable()
export class EventsService {
  constructor(
    private readonly dynamicEntityService: DynamicEntityService,
  ) {
  }

  async eventTypeName(): Promise<any> {
    const field = ['id','name'];
    const eventType = await this.dynamicEntityService.searchCampAll('EventTypes',field);
    const eventTypeObject = eventType.reduce((acc, current) => {
      acc[current.id] = current.name;
      return acc;
    }, {});
  
    return eventTypeObject;
  }

  async queryMobileEvent(request: any): Promise<any[]> {
    const entityName = 'MobileUnityEvents';
    const fields = ['eventTypeId', 'unityId', 'id'];
    let result;
    let mobile_unities_ids = request.mobile_unities_ids;
    let event_type_id = request.event_type_id
    const conditions = {
      deviceDateHour: Between(new Date(request.start_date), new Date(request.end_date)),
      unityId: In(mobile_unities_ids),
      eventTypeId: event_type_id,
    };
    const order = null; // No hay ordenamiento en esta consulta
  
    const query = await this.dynamicEntityService.searchCamp(entityName, conditions, fields, order);
    
    if (query.length > 0) {
      // Agregar la agrupación y contar
      result = query.length;
    }else{
      result = 0;
    }
    return result;
  }
}
