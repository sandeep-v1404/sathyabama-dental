import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreatePatientDTO } from './dto/create-patient.dto';
import { Patient } from './patient.entity';
import { PatientsService } from './patients.service';

@Controller('patients')
@UseGuards(AuthGuard())
export class PatientsController {
  constructor(private patientsService: PatientsService) {}

  @Get('/')
  getAllPatients(@GetUser() user: User): Promise<Patient[]> {
    return this.patientsService.getAllPatients(user.department);
  }

  @Get('/:id')
  getPatientById(@Param('id') id: string): Promise<Patient> {
    return this.patientsService.getPatientById(id);
  }

  @Get('/admin/:userId')
  getPatientByIdAdmin(@Param('userId') userId: string): Promise<Patient> {
    return this.patientsService.getPatientByIdAdmin(userId);
  }

  @Post()
  createPatient(
    @Body() createPatientDTO: CreatePatientDTO,
  ): Promise<Patient | string> {
    return this.patientsService.createPatient(createPatientDTO);
  }

  @Put('/:patientId')
  updatePatientDataById(
    @Body() createPatientDTO: CreatePatientDTO,
    @Param('patientId')
    patientId: number,
  ): Promise<{ success: boolean }> {
    return this.patientsService.updatePatientData(createPatientDTO, patientId);
  }

  @Delete('/:id')
  deletePatientById(@Param('id') id: string): Promise<{ success: boolean }> {
    return this.patientsService.deletePatient(id);
  }
}
