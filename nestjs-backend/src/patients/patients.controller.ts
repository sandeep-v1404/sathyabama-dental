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
import { CreatePatientDTO } from './dto/create-patient.dto';
import { Patient } from './patient.entity';
import { PatientsService } from './patients.service';

@Controller('patients')
@UseGuards(AuthGuard())
export class PatientsController {
  constructor(private patientsService: PatientsService) {}

  @Get('/')
  getAllPatients(): Promise<Patient[]> {
    return this.patientsService.getAllPatients();
  }

  @Get('/:id')
  getPatientById(@Param('id') id: string): Promise<Patient> {
    return this.patientsService.getPatientById(id);
  }

  @Post()
  createPatient(
    @Body() createPatientDTO: CreatePatientDTO,
  ): Promise<Patient | string> {
    return this.patientsService.createPatient(createPatientDTO);
  }

  @Delete('/:id')
  deletePatientById(@Param('id') id: string): Promise<void> {
    return this.patientsService.deletePatient(id);
  }
}
