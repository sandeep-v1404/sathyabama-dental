import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientsRepository } from 'src/patients/patients.repository';
import { AddPatientD7DTO } from './dto/add-patient-d7.dto';
import { PatientsDSevenRepository } from './patientsDSeven.repository';

@Injectable()
export class Department7Service {
  constructor(
    @InjectRepository(PatientsDSevenRepository)
    private patientsDSevenRepository: PatientsDSevenRepository,
    @InjectRepository(PatientsRepository)
    private patientsRepository: PatientsRepository,
  ) {}

  async addPatientDSevenData(
    patientId: string,
    addPatientD7DTO: AddPatientD7DTO,
  ): Promise<{ success: boolean }> {
    const { id } = addPatientD7DTO;

    const patient = await this.patientsRepository.findOne(patientId, {
      loadRelationIds: true,
    });
    if (!patient) {
      throw new NotFoundException(`No Patient with Id ${patientId} exists`);
    }
    if (
      patient.patientDSevenData === undefined ||
      patient.patientDSevenData === null
    ) {
      const d2Data = this.patientsDSevenRepository.create({
        patientId,
        ...addPatientD7DTO,
      });
      await this.patientsDSevenRepository.save(d2Data);
      return { success: true };
    } else {
      await this.patientsDSevenRepository.update(id, {
        patientId,
        ...addPatientD7DTO,
      });
      return { success: true };
    }
  }

  async deletePatientDSevenDataById(patientId: string) {
    const found = await this.patientsDSevenRepository.findOne({ patientId });
    if (!found) {
      throw new NotFoundException(`No Patient with ${patientId} exists`);
    }
    await found.remove();

    return found;
  }
}
