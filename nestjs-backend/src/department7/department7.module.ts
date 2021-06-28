import { Module } from '@nestjs/common';
import { Department7Service } from './department7.service';
import { Department7Controller } from './department7.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { PatientsRepository } from 'src/patients/patients.repository';
import { PatientsDSevenRepository } from './patientsDSeven.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PatientsRepository, PatientsDSevenRepository]),
    AuthModule,
  ],
  providers: [Department7Service],
  controllers: [Department7Controller],
})
export class Department7Module {}
