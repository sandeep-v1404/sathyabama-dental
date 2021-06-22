import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { Patient } from 'src/patients/patient.entity';
import { Department1Service } from './department1.service';
import { AddPatientD1DTO } from './dto/add-patient-d1.dto';

@Controller('department1')
@UseGuards(AuthGuard())
export class Department1Controller {
  constructor(private department1Service: Department1Service) {}

  @Get('/')
  getAllPatients(): Promise<Patient[]> {
    return this.department1Service.getDepartment1Patients();
  }

  @Get('/:patientId')
  getPatientDOneDataById(@Param('patientId') patientId: number) {
    return this.department1Service.getPatientDOneDataById(patientId);
  }

  @Post('/:patientId')
  addPatientDOneData(
    @GetUser('D1') user: User,
    @Body()
    addPatientD1DTO: AddPatientD1DTO,
    @Param('patientId') patientId: number,
  ) {
    return this.department1Service.addPatientDOneData(
      addPatientD1DTO,
      patientId,
    );
  }

  @Delete('/:patientId')
  deletePatientDOneDataById(
    @GetUser('D1') user: User,
    @Param('patientId') patientId: number,
  ) {
    return this.department1Service.deletePatientDOneDataById(patientId);
  }
}
