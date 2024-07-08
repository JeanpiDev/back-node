/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { CustomerService,UsersService,ContactsService } from '../database/db.service';

@Controller('m1')
export class CustomersController {
  constructor(
    private readonly customerService: CustomerService,
    private readonly userService: UsersService,
    private readonly contactService: ContactsService,
  ) 
    {}
}