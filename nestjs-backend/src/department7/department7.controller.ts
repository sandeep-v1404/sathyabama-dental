import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { Department7Service } from 'src/department7/department7.service';
import { AddPatientD7DTO } from 'src/department7/dto/add-patient-d7.dto';

@Controller('D7')
export class Department7Controller {
  constructor(private department7Service: Department7Service) {}

  @Post('/:patientId')
  addPatientDSevenData(
    @GetUser('D7') user: User,
    @Body() addPatientD7DTO: AddPatientD7DTO,
    @Param('patientId')
    patientId: string,
  ): Promise<{ success: boolean }> {
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
    return this.department7Service.deletePatientDSevenDataById(patientId);
  }
}
