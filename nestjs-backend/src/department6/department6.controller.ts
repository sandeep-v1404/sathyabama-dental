import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Logger,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { Department6Service } from './department6.service';
import { AddPatientD6DTO } from './dto/add-patient-d6.dto';

@Controller('D6')
@UseGuards(AuthGuard())
export class Department6Controller {
  private logger = new Logger('DepartmentSix');
  constructor(private department6Service: Department6Service) {}

  @Post('/:patientId')
  addPatientDSixData(
    @GetUser('D6') user: User,
    @Body() addPatientD6DTO: AddPatientD6DTO,
    @Param('patientId')
    patientId: string,
  ): Promise<{ success: boolean }> {
    this.logger.verbose('Patient Created/Updated');
    return this.department6Service.addPatientDSixData(
      patientId,
      addPatientD6DTO,
    );
  }

  @Delete('/:patientId')
  deletePatientDSixDataById(
    @GetUser('D6') user: User,
    @Param('patientId') patientId: string,
  ) {
    this.logger.verbose('Patient Deleted');
    return this.department6Service.deletePatientDSixDataById(patientId);
  }
}
