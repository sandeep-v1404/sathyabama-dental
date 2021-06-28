import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientsRepository } from 'src/patients/patients.repository';
import { AddPatientD2DTO } from './dto/add-patient-d2.dto';
import { PatientsDTwoRepository } from './patientsDTwo.repository';

@Injectable()
export class Department2Service {
  constructor(
    @InjectRepository(PatientsDTwoRepository)
    private patientsDTwoRepository: PatientsDTwoRepository,
    @InjectRepository(PatientsRepository)
    private patientsRepository: PatientsRepository,
  ) {}

  async addPatientDTwoData(
    patientId: string,
    addPatientD2DTO: AddPatientD2DTO,
  ): Promise<{ success: boolean }> {
    const { id } = addPatientD2DTO;

    const patient = await this.patientsRepository.findOne(patientId, {
      loadRelationIds: true,
    });
    if (!patient) {
      throw new NotFoundException(`No Patient with Id ${patientId} exists`);
    }
    if (
      patient.patientDTwoData === undefined ||
      patient.patientDTwoData === null
    ) {
      const d2Data = this.patientsDTwoRepository.create({
        patientId,
        ...addPatientD2DTO,
      });
      await this.patientsDTwoRepository.save(d2Data);
      return { success: true };
    } else {
      await this.patientsDTwoRepository.update(id, {
        patientId,
        ...addPatientD2DTO,
      });
      return { success: true };
    }
  }

  async deletePatientDTwoDataById(patientId: string) {
    const found = await this.patientsDTwoRepository.findOne({ patientId });
    if (!found) {
      throw new NotFoundException(`No Patient with ${patientId} exists`);
    }
    await found.remove();

    return found;
  }
}
