import { Module } from '@nestjs/common';
import { PatientsModule } from './patients/patients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Department1Module } from './department1/department1.module';
import { Department2Module } from './department2/department2.module';
import { Department3Module } from './department3/department3.module';
import { Department4Module } from './department4/department4.module';
import { Department5Module } from './department5/department5.module';
import { Department6Module } from './department6/department6.module';
import { Department7Module } from './department7/department7.module';
import { Department8Module } from './department8/department8.module';
import { Department9Module } from './department9/department9.module';

@Module({
  imports: [
    PatientsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      database: 'sdh',
      username: 'postgres',
      password: 'postgres',
      synchronize: true,
      entities: [__dirname + '/../**/*.entity.js'],
    }),
    AuthModule,
    Department1Module,
    Department2Module,
    Department3Module,
    Department4Module,
    Department5Module,
    Department6Module,
    Department7Module,
    Department8Module,
    Department9Module,
  ],
})
export class AppModule {}
