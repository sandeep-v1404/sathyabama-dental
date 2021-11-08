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
import { AddPatientD4DTO } from 'src/department4/dto/add-patient-d4.dto';
import { Department4Service } from './department4.service';

@Controller('D4')
@UseGuards(AuthGuard())
export class Department4Controller {
  private logger = new Logger('DepartmentFour');

  constructor(private department4Service: Department4Service) {}

  @Post('/:patientId')
  addPatientDFourData(
    @GetUser('D4') user: User,
    @Body() addPatientD4DTO: AddPatientD4DTO,
    @Param('patientId')
    patientId: string,
  ): Promise<{ success: boolean }> {
    this.logger.verbose('Patient Created/Updated');
    return this.department4Service.addPatientDFourData(
      patientId,
      addPatientD4DTO,
    );
  }

  @Delete('/:patientId')
  deletePatientDFourDataById(
    @GetUser('D4') user: User,
    @Param('patientId') patientId: string,
  ) {
    this.logger.verbose('Patient Deleted');
    return this.department4Service.deletePatientDFourDataById(patientId);
  }
}
