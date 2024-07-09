"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModule = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("./../database/db.service");
const db_controller_1 = require("./../database/db.controller");
const typeorm_1 = require("@nestjs/typeorm");
const db_entities_1 = require("../database/db.entities/db.entities");
let CustomerModule = class CustomerModule {
};
exports.CustomerModule = CustomerModule;
exports.CustomerModule = CustomerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([db_entities_1.Customers, db_entities_1.Users, db_entities_1.ContactTypes, db_entities_1.ContactsEmergency, db_entities_1.CustomersBlocked, db_entities_1.Contacts, db_entities_1.UsersTypes, db_entities_1.DriversDallas, db_entities_1.EventDriverValidator, db_entities_1.MobileUnityDrivers])
        ],
        providers: [
            db_service_1.CustomerService, db_service_1.UsersService, db_service_1.ContactsService
        ],
        controllers: [
            db_controller_1.CustomersController
        ],
        exports: [
            db_service_1.CustomerService, db_service_1.UsersService, db_service_1.ContactsService
        ]
    })
], CustomerModule);
//# sourceMappingURL=m1_customers.module.js.map