import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { Department8Service } from './department8.service';
import { AddPatientD8DTO } from './dto/add-patient-d8.dto';

@Controller('D8')
export class Department8Controller {
  constructor(private department8Service: Department8Service) {}

  @Post('/:patientId')
  addPatientDEightData(
    @GetUser('D8') user: User,
    @Body() addPatientD8DTO: AddPatientD8DTO,
    @Param('patientId')
    patientId: string,
  ): Promise<{ success: boolean }> {
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
    return this.department8Service.deletePatientDEightDataById(patientId);
  }
}
