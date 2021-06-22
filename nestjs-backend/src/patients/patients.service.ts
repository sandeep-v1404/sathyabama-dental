import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePatientDTO } from './dto/create-patient.dto';
import { Patient } from './patient.entity';
import { PatientsRepository } from './patients.repository';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(PatientsRepository)
    private patientsRepository: PatientsRepository,
  ) {}

  async getAllPatients(): Promise<Patient[]> {
    const found = await this.patientsRepository.find({});
    if (!found) {
      throw new NotFoundException(`No Patients`);
    }
    return found;
  }

  async getPatientById(id: string): Promise<Patient> {
    const found = await this.patientsRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" Not Found`);
    }
    return found;
  }

  createPatient(createPatientDTO: CreatePatientDTO): Promise<Patient | string> {
    return this.patientsRepository.createPatient(createPatientDTO);
  }

  async deletePatient(id: string): Promise<void> {
    const result = await this.patientsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" Not Found`);
    }
  }
}
