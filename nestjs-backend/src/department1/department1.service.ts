import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientsRepository } from 'src/patients/patients.repository';
import { AddPatientD1DTO } from './dto/add-patient-d1.dto';
import { PatientsDOneRepository } from './patientsDOne.repository';

@Injectable()
export class Department1Service {
  constructor(
    @InjectRepository(PatientsDOneRepository)
    private patientsDOneRepository: PatientsDOneRepository,
    @InjectRepository(PatientsRepository)
    private patientsRepository: PatientsRepository,
  ) {}

  async addPatientDOneData(
    patientId: string,
    addPatientD1DTO: AddPatientD1DTO,
  ): Promise<{ success: boolean }> {
    const { id } = addPatientD1DTO;

    const patient = await this.patientsRepository.findOne(patientId, {
      loadRelationIds: true,
    });
    if (!patient) {
      throw new NotFoundException(`No Patient with Id ${patientId} exists`);
    }
    if (
      patient.patientDOneData === undefined ||
      patient.patientDOneData === null
    ) {
      const d1Data = this.patientsDOneRepository.create({
        patientId,
        ...addPatientD1DTO,
      });
      await this.patientsDOneRepository.save(d1Data);
      return { success: true };
    } else {
      await this.patientsDOneRepository.update(id, {
        patientId,
        ...addPatientD1DTO,
      });
      return { success: true };
    }
  }

  async deletePatientDOneDataById(patientId: string) {
    const found = await this.patientsDOneRepository.findOne({ patientId });
    if (!found) {
      throw new NotFoundException(`No Patient with ${patientId} exists`);
    }
    await found.remove();

    return found;
  }
}
