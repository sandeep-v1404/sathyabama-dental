import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { Department3Service } from './department3.service';
import { AddPatientD3DTO } from './dto/add-patient-d3.dto';

@Controller('D3')
export class Department3Controller {
  constructor(private department3Service: Department3Service) {}

  @Post('/:patientId')
  addPatientDThreeData(
    @GetUser('D3') user: User,
    @Body() addPatientD3DTO: AddPatientD3DTO,
    @Param('patientId')
    patientId: string,
  ): Promise<{ success: boolean }> {
    return this.department3Service.addPatientDThreeData(
      patientId,
      addPatientD3DTO,
    );
  }

  @Delete('/:patientId')
  deletePatientDThreeDataById(
    @GetUser('D3') user: User,
    @Param('patientId') patientId: string,
  ) {
    return this.department3Service.deletePatientDThreeDataById(patientId);
  }
}
