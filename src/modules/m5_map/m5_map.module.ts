/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MapService } from '../database/db.service';
import { MapController } from '../database/db.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarrerasCalles,Cities,Departments,Directions,GeographicalEvents,GeographicalResources,Municipios,Rutograma } from '../database/db.entities/db.entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CarrerasCalles,Cities,Departments,Directions,GeographicalEvents,GeographicalResources,Municipios,Rutograma
    ])
  ],
  providers: [
    MapService
  ],
  controllers: [
    MapController
  ],
  exports: [
    MapService
  ]
})
export class MapModule {}