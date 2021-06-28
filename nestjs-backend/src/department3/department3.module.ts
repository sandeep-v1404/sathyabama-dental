import { Module } from '@nestjs/common';
import { Department3Service } from './department3.service';
import { Department3Controller } from './department3.controller';
import { PatientsDThreeRepository } from './patientsDThree.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { PatientsRepository } from 'src/patients/patients.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PatientsRepository, PatientsDThreeRepository]),
    AuthModule,
  ],
  providers: [Department3Service],
  controllers: [Department3Controller],
})
export class Department3Module {}
