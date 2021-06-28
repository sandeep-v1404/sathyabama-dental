import { Module } from '@nestjs/common';
import { Department5Service } from './department5.service';
import { Department5Controller } from './department5.controller';
import { PatientsDFiveRepository } from './patientsDFive.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { PatientsRepository } from 'src/patients/patients.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PatientsRepository, PatientsDFiveRepository]),
    AuthModule,
  ],
  providers: [Department5Service],
  controllers: [Department5Controller],
})
export class Department5Module {}
