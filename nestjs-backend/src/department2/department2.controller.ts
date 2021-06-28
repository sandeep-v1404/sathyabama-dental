import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { Department2Service } from './department2.service';
import { AddPatientD2DTO } from './dto/add-patient-d2.dto';

@Controller('D2')
export class Department2Controller {
  constructor(private department2Service: Department2Service) {}

  @Post('/:patientId')
  addPatientDTwoData(
    @GetUser('D2') user: User,
    @Body() addPatientD2DTO: AddPatientD2DTO,
    @Param('patientId')
    patientId: string,
  ): Promise<{ success: boolean }> {
    return this.department2Service.addPatientDTwoData(
      patientId,
      addPatientD2DTO,
    );
  }

  @Delete('/:patientId')
  deletePatientDTwoDataById(
    @GetUser('D1') user: User,
    @Param('patientId') patientId: string,
  ) {
    return this.department2Service.deletePatientDTwoDataById(patientId);
  }
}
