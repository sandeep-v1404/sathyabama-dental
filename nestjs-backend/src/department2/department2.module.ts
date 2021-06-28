import { Module } from '@nestjs/common';
import { Department2Service } from './department2.service';
import { Department2Controller } from './department2.controller';
import { PatientsDTwoRepository } from './patientsDTwo.repository';
import { PatientsRepository } from 'src/patients/patients.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PatientsRepository, PatientsDTwoRepository]),
    AuthModule,
  ],
  providers: [Department2Service],
  controllers: [Department2Controller],
})
export class Department2Module {}
