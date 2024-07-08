import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Contacts } from './Contacts.entity';

@Index('contact_types_pkey', ['id'], { unique: true })
@Entity('contact_types', { schema: 'public' })
export class ContactTypes {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'name', length: 45 })
  name: string;

  @OneToMany(() => Contacts, (contacts) => contacts.contactType)
  contacts: Contacts[];
}
