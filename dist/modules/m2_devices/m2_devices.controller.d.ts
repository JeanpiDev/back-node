import { DevicesSerice, CommandService } from '../database/db.service';
export declare class DevicesController {
    private readonly devicesSerice;
    private readonly commandService;
    constructor(devicesSerice: DevicesSerice, commandService: CommandService);
}
