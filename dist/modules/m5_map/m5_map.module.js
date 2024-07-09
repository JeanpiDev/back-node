"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapModule = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../database/db.service");
const db_controller_1 = require("../database/db.controller");
const typeorm_1 = require("@nestjs/typeorm");
const db_entities_1 = require("../database/db.entities/db.entities");
let MapModule = class MapModule {
};
exports.MapModule = MapModule;
exports.MapModule = MapModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                db_entities_1.CarrerasCalles, db_entities_1.Cities, db_entities_1.Departments, db_entities_1.Directions, db_entities_1.GeographicalEvents, db_entities_1.GeographicalResources, db_entities_1.Municipios, db_entities_1.Rutograma
            ])
        ],
        providers: [
            db_service_1.MapService
        ],
        controllers: [
            db_controller_1.MapController
        ],
        exports: [
            db_service_1.MapService
        ]
    })
], MapModule);
//# sourceMappingURL=m5_map.module.js.map