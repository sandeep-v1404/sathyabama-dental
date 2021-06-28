import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientsRepository } from 'src/patients/patients.repository';
import { AddPatientD6DTO } from './dto/add-patient-d6.dto';
import { PatientsDSixRepository } from './patientsDSix.repository';

@Injectable()
export class Department6Service {
  constructor(
    @InjectRepository(PatientsDSixRepository)
    private patientsDSixRepository: PatientsDSixRepository,
    @InjectRepository(PatientsRepository)
    private patientsRepository: PatientsRepository,
  ) {}

  async addPatientDSixData(
    patientId: string,
    addPatientD6DTO: AddPatientD6DTO,
  ): Promise<{ success: boolean }> {
    const { id } = addPatientD6DTO;

    const patient = await this.patientsRepository.findOne(patientId, {
      loadRelationIds: true,
    });
    if (!patient) {
      throw new NotFoundException(`No Patient with Id ${patientId} exists`);
    }
    if (
      patient.patientDSixData === undefined ||
      patient.patientDSixData === null
    ) {
      const d2Data = this.patientsDSixRepository.create({
        patientId,
        ...addPatientD6DTO,
      });
      await this.patientsDSixRepository.save(d2Data);
      return { success: true };
    } else {
      await this.patientsDSixRepository.update(id, {
        patientId,
        ...addPatientD6DTO,
      });
      return { success: true };
    }
  }

  async deletePatientDSixDataById(patientId: string) {
    const found = await this.patientsDSixRepository.findOne({ patientId });
    if (!found) {
      throw new NotFoundException(`No Patient with ${patientId} exists`);
    }
    await found.remove();

    return found;
  }
}
