import { Module } from '@nestjs/common';
import { Department0Service } from './department0.service';
import { Department0Controller } from './department0.controller';
import { PatientsService } from 'src/patients/patients.service';
import { PatientsRepository } from 'src/patients/patients.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientsDZeroRepository } from './patientsDZero.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PatientsRepository, PatientsDZeroRepository]),
    AuthModule,
  ],
  providers: [Department0Service, PatientsService],
  controllers: [Department0Controller],
})
export class Department0Module {}
