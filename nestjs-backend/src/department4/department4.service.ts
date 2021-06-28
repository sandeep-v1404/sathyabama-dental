import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientsRepository } from 'src/patients/patients.repository';
import { AddPatientD4DTO } from './dto/add-patient-d4.dto';
import { PatientsDFourRepository } from './patientsDFour.repository';

@Injectable()
export class Department4Service {
  constructor(
    @InjectRepository(PatientsDFourRepository)
    private patientsDFourRepository: PatientsDFourRepository,
    @InjectRepository(PatientsRepository)
    private patientsRepository: PatientsRepository,
  ) {}

  async addPatientDFourData(
    patientId: string,
    addPatientD4DTO: AddPatientD4DTO,
  ): Promise<{ success: boolean }> {
    const { id } = addPatientD4DTO;

    const patient = await this.patientsRepository.findOne(patientId, {
      loadRelationIds: true,
    });
    if (!patient) {
      throw new NotFoundException(`No Patient with Id ${patientId} exists`);
    }
    if (
      patient.patientDFourData === undefined ||
      patient.patientDFourData === null
    ) {
      const d2Data = this.patientsDFourRepository.create({
        patientId,
        ...addPatientD4DTO,
      });
      await this.patientsDFourRepository.save(d2Data);
      return { success: true };
    } else {
      await this.patientsDFourRepository.update(id, {
        patientId,
        ...addPatientD4DTO,
      });
      return { success: true };
    }
  }

  async deletePatientDFourDataById(patientId: string) {
    const found = await this.patientsDFourRepository.findOne({ patientId });
    if (!found) {
      throw new NotFoundException(`No Patient with ${patientId} exists`);
    }
    await found.remove();

    return found;
  }
}
