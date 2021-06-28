import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientsRepository } from 'src/patients/patients.repository';
import { AddPatientD5DTO } from './dto/add-patient-d5.dto';
import { PatientsDFiveRepository } from './patientsDFive.repository';

@Injectable()
export class Department5Service {
  constructor(
    @InjectRepository(PatientsDFiveRepository)
    private patientsDFiveRepository: PatientsDFiveRepository,
    @InjectRepository(PatientsRepository)
    private patientsRepository: PatientsRepository,
  ) {}

  async addPatientDFiveData(
    patientId: string,
    addPatientD5DTO: AddPatientD5DTO,
  ): Promise<{ success: boolean }> {
    const { id } = addPatientD5DTO;

    const patient = await this.patientsRepository.findOne(patientId, {
      loadRelationIds: true,
    });
    if (!patient) {
      throw new NotFoundException(`No Patient with Id ${patientId} exists`);
    }
    if (
      patient.patientDFiveData === undefined ||
      patient.patientDFiveData === null
    ) {
      const d2Data = this.patientsDFiveRepository.create({
        patientId,
        ...addPatientD5DTO,
      });
      await this.patientsDFiveRepository.save(d2Data);
      return { success: true };
    } else {
      await this.patientsDFiveRepository.update(id, {
        patientId,
        ...addPatientD5DTO,
      });
      return { success: true };
    }
  }

  async deletePatientDFiveDataById(patientId: string) {
    const found = await this.patientsDFiveRepository.findOne({ patientId });
    if (!found) {
      throw new NotFoundException(`No Patient with ${patientId} exists`);
    }
    await found.remove();

    return found;
  }
}
