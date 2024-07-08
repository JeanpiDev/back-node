/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './db.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'master',
      password: 'Desarrollo_2023',
      database: 'localizamosTsa',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      // synchronize: false, //Si ponemos true, este va a rehacer la base de datos
    }),
  ],
  providers: [DatabaseService],
  exports: [DatabaseService], 
})
export class DatabaseModule {}