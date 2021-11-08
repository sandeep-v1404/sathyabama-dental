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
import { Department5Service } from './department5.service';
import { AddPatientD5DTO } from './dto/add-patient-d5.dto';

@Controller('D5')
@UseGuards(AuthGuard())
export class Department5Controller {
  private logger = new Logger('DepartmentFive');
  constructor(private department5Service: Department5Service) {}

  @Post('/:patientId')
  addPatientDFiveData(
    @GetUser('D5') user: User,
    @Body() addPatientD5DTO: AddPatientD5DTO,
    @Param('patientId')
    patientId: string,
  ): Promise<{ success: boolean }> {
    this.logger.verbose('Patient Created/Updated');
    return this.department5Service.addPatientDFiveData(
      patientId,
      addPatientD5DTO,
    );
  }

  @Delete('/:patientId')
  deletePatientDFiveDataById(
    @GetUser('D5') user: User,
    @Param('patientId') patientId: string,
  ) {
    this.logger.verbose('Patient Deleted');
    return this.department5Service.deletePatientDFiveDataById(patientId);
  }
}
