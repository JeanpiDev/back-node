/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DevicesSerice,CommandService } from './../database/db.service';
import { DevicesController } from './../database/db.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brands,DevicePlotDeviceType,Devices,DevicePlotHeaderTypes,DevicePlotHeaders,DevicePlots,DeviceTests,DeviceTypeCommands,DeviceTypes,DeviceUser,CommandLog,CommandPending,CommandsList,CommandsTosend } from '../database/db.entities/db.entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Brands,DevicePlotDeviceType,Devices,DevicePlotHeaderTypes,DevicePlotHeaders,DevicePlots,DeviceTests,DeviceTypeCommands,DeviceTypes,DeviceUser,CommandLog,CommandPending,CommandsList,CommandsTosend
    ])
  ],
  providers: [
    DevicesSerice,CommandService
  ],
  controllers: [
    DevicesController
  ],
  exports: [
    DevicesSerice,CommandService
  ]
})
export class DevicesModule {}