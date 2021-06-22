import { Module } from '@nestjs/common';
import { Department1Service } from './department1.service';
import { Department1Controller } from './department1.controller';
import { PatientsService } from 'src/patients/patients.service';
import { PatientsRepository } from 'src/patients/patients.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientsDOneRepository } from './patientsDOne.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PatientsRepository, PatientsDOneRepository]),
    AuthModule,
  ],
  providers: [Department1Service, PatientsService],
  controllers: [Department1Controller],
})
export class Department1Module {}
