import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientsRepository } from 'src/patients/patients.repository';
import { AddPatientD0DTO } from './dto/add-patient-d0.dto';
import { PatientsDZeroRepository } from './patientsDZero.repository';

@Injectable()
export class Department0Service {
  constructor(
    @InjectRepository(PatientsDZeroRepository)
    private patientsDZeroRepository: PatientsDZeroRepository,
    @InjectRepository(PatientsRepository)
    private patientsRepository: PatientsRepository,
  ) {}

  async addPatientDZeroData(
    patientId: string,
    addPatientD0DTO: AddPatientD0DTO,
  ): Promise<{ success: boolean }> {
    const { id } = addPatientD0DTO;

    const patient = await this.patientsRepository.findOne(patientId, {
      loadRelationIds: true,
    });
    if (!patient) {
      throw new NotFoundException(`No Patient with Id ${patientId} exists`);
    }
    if (
      patient.patientDZeroData === undefined ||
      patient.patientDZeroData === null
    ) {
      const d0Data = this.patientsDZeroRepository.create({
        patientId,
        ...addPatientD0DTO,
      });
      await this.patientsDZeroRepository.save(d0Data);
      return { success: true };
    } else {
      await this.patientsDZeroRepository.update(id, {
        patientId,
        ...addPatientD0DTO,
      });
      return { success: true };
    }
  }

  async deletePatientDZeroDataById(patientId: string) {
    const found = await this.patientsDZeroRepository.findOne({ patientId });
    if (!found) {
      throw new NotFoundException(`No Patient with ${patientId} exists`);
    }
    await found.remove();

    return found;
  }
}
