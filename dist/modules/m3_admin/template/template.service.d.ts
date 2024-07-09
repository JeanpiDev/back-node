import { Repository } from 'typeorm';
import { EntitiesService } from '../../database/db.entities/entities.service';
import { Templates, UserEmailTemplates, UserScheduledEmails } from '../../database/db.entities/db.entities';
export declare class TemplatesService extends EntitiesService<Templates> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<Templates>);
}
export declare class UserEmailTemplatesService extends EntitiesService<UserEmailTemplates> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<UserEmailTemplates>);
}
export declare class UserScheduledEmailsService extends EntitiesService<UserScheduledEmails> {
    private readonly E_Repository;
    constructor(E_Repository: Repository<UserScheduledEmails>);
}
