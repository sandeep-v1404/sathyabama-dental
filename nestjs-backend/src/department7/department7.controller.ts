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
import { Department7Service } from 'src/department7/department7.service';
import { AddPatientD7DTO } from 'src/department7/dto/add-patient-d7.dto';

@Controller('D7')
@UseGuards(AuthGuard())
export class Department7Controller {
  private logger = new Logger('DepartmentSeven');
  constructor(private department7Service: Department7Service) {}

  @Post('/:patientId')
  addPatientDSevenData(
    @GetUser('D7') user: User,
    @Body() addPatientD7DTO: AddPatientD7DTO,
    @Param('patientId')
    patientId: string,
  ): Promise<{ success: boolean }> {
    this.logger.verbose('Patient Created/Updated');
    return this.department7Service.addPatientDSevenData(
      patientId,
      addPatientD7DTO,
    );
  }

  @Delete('/:patientId')
  deletePatientDSevenDataById(
    @GetUser('D7') user: User,
    @Param('patientId') patientId: string,
  ) {
    this.logger.verbose('Patient Deleted');
    return this.department7Service.deletePatientDSevenDataById(patientId);
  }
}
