import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { Department0Service } from './department0.service';
import { AddPatientD0DTO } from './dto/add-patient-d0.dto';

@Controller('D0')
@UseGuards(AuthGuard())
export class Department0Controller {
  constructor(private department0Service: Department0Service) {}

  @Post('/:patientId')
  addPatientDOneData(
    @GetUser('D0') user: User,
    @Body() addPatientD0DTO: AddPatientD0DTO,
    @Param('patientId')
    patientId: string,
  ): Promise<{ success: boolean }> {
    return this.department0Service.addPatientDZeroData(
      patientId,
      addPatientD0DTO,
    );
  }

  @Delete('/:patientId')
  deletePatientDOneDataById(
    @GetUser('D0') user: User,
    @Param('patientId') patientId: string,
  ) {
    return this.department0Service.deletePatientDZeroDataById(patientId);
  }
}
