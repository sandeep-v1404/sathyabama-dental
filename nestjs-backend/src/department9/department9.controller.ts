import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { Department9Service } from './department9.service';
import { AddPatientD9DTO } from './dto/add-patient-d9.dto';

@Controller('D9')
export class Department9Controller {
  constructor(private department9Service: Department9Service) {}

  @Post('/:patientId')
  addPatientDNineData(
    @GetUser('D9') user: User,
    @Body() addPatientD9DTO: AddPatientD9DTO,
    @Param('patientId')
    patientId: string,
  ): Promise<{ success: boolean }> {
    return this.department9Service.addPatientDNineData(
      patientId,
      addPatientD9DTO,
    );
  }

  @Delete('/:patientId')
  deletePatientDNineDataById(
    @GetUser('D9') user: User,
    @Param('patientId') patientId: string,
  ) {
    return this.department9Service.deletePatientDNineDataById(patientId);
  }
}
