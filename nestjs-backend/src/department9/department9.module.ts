import { Module } from '@nestjs/common';
import { Department9Service } from './department9.service';
import { Department9Controller } from './department9.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { PatientsRepository } from 'src/patients/patients.repository';
import { PatientsDNineRepository } from './patientsDNine.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PatientsRepository, PatientsDNineRepository]),
    AuthModule,
  ],
  providers: [Department9Service],
  controllers: [Department9Controller],
})
export class Department9Module {}
