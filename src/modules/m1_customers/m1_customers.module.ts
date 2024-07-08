/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { CustomerService,UsersService, ContactsService } from './../database/db.service';
import { CustomersController } from './../database/db.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers, Users, ContactTypes, ContactsEmergency, DriversDallas, CustomersBlocked, Contacts, UsersTypes, EventDriverValidator, MobileUnityDrivers } from '../database/db.entities/db.entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customers,Users,ContactTypes,ContactsEmergency,CustomersBlocked,Contacts,UsersTypes,DriversDallas,EventDriverValidator,MobileUnityDrivers])
  ],
  providers: [
    CustomerService, UsersService, ContactsService
  ],
  controllers: [
    CustomersController
  ],
  exports: [
    CustomerService, UsersService,ContactsService
  ]
})
export class CustomerModule {}