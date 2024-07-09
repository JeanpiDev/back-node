import { CustomerService, UsersService, ContactsService } from '../database/db.service';
export declare class CustomersController {
    private readonly customerService;
    private readonly userService;
    private readonly contactService;
    constructor(customerService: CustomerService, userService: UsersService, contactService: ContactsService);
}
