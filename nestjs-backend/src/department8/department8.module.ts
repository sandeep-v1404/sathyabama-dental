import { Module } from '@nestjs/common';
import { Department8Service } from './department8.service';
import { Department8Controller } from './department8.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { PatientsRepository } from 'src/patients/patients.repository';
import { PatientsDEightRepository } from './patientsDEight.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PatientsRepository, PatientsDEightRepository]),
    AuthModule,
  ],
  providers: [Department8Service],
  controllers: [Department8Controller],
})
export class Department8Module {}
