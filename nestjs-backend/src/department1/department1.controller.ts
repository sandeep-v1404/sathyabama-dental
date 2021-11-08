import {
  Body,
  Controller,
  Delete,
  Logger,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { Department1Service } from './department1.service';
import { AddPatientD1DTO } from './dto/add-patient-d1.dto';

@Controller('D1')
@UseGuards(AuthGuard())
export class Department1Controller {
  private logger = new Logger('DepartmentOne');

  constructor(private department1Service: Department1Service) {}

  @Post('/:patientId')
  addPatientDOneData(
    @GetUser('D1') user: User,
    @Body() addPatientD1DTO: AddPatientD1DTO,
    @Param('patientId')
    patientId: string,
  ): Promise<{ success: boolean }> {
    this.logger.verbose('Patient Created/Updated');
    return this.department1Service.addPatientDOneData(
      patientId,
      addPatientD1DTO,
    );
  }

  @Delete('/:patientId')
  deletePatientDOneDataById(
    @GetUser('D1') user: User,
    @Param('patientId') patientId: string,
  ) {
    this.logger.verbose('Patient Deleted');
    return this.department1Service.deletePatientDOneDataById(patientId);
  }
}
