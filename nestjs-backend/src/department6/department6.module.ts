import { Module } from '@nestjs/common';
import { Department6Service } from './department6.service';
import { Department6Controller } from './department6.controller';
import { PatientsDSixRepository } from './patientsDSix.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { PatientsRepository } from 'src/patients/patients.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PatientsRepository, PatientsDSixRepository]),
    AuthModule,
  ],
  providers: [Department6Service],
  controllers: [Department6Controller],
})
export class Department6Module {}
