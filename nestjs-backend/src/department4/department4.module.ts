import { Module } from '@nestjs/common';
import { Department4Service } from './department4.service';
import { Department4Controller } from './department4.controller';
import { PatientsDFourRepository } from './patientsDFour.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { PatientsRepository } from 'src/patients/patients.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PatientsRepository, PatientsDFourRepository]),
    AuthModule,
  ],
  providers: [Department4Service],
  controllers: [Department4Controller],
})
export class Department4Module {}
