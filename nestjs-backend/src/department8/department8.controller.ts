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
import { Department8Service } from './department8.service';
import { AddPatientD8DTO } from './dto/add-patient-d8.dto';

@Controller('D8')
@UseGuards(AuthGuard())
export class Department8Controller {
  private logger = new Logger('DepartmentEight');

  constructor(private department8Service: Department8Service) {}

  @Post('/:patientId')
  addPatientDEightData(
    @GetUser('D8') user: User,
    @Body() addPatientD8DTO: AddPatientD8DTO,
    @Param('patientId')
    patientId: string,
  ): Promise<{ success: boolean }> {
    this.logger.verbose('Patient Created/Updated');
    return this.department8Service.addPatientDEightData(
      patientId,
      addPatientD8DTO,
    );
  }

  @Delete('/:patientId')
  deletePatientDEightDataById(
    @GetUser('D8') user: User,
    @Param('patientId') patientId: string,
  ) {
    this.logger.verbose('Patient Deleted');
    return this.department8Service.deletePatientDEightDataById(patientId);
  }
}
