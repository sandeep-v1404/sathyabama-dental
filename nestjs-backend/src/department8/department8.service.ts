import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddPatientD8DTO } from 'src/department8/dto/add-patient-d8.dto';
import { PatientsDEightRepository } from 'src/department8/patientsDEight.repository';
import { PatientsRepository } from 'src/patients/patients.repository';

@Injectable()
export class Department8Service {
  constructor(
    @InjectRepository(PatientsDEightRepository)
    private patientsDEightRepository: PatientsDEightRepository,
    @InjectRepository(PatientsRepository)
    private patientsRepository: PatientsRepository,
  ) {}

  async addPatientDEightData(
    patientId: string,
    addPatientD8DTO: AddPatientD8DTO,
  ): Promise<{ success: boolean }> {
    const { id } = addPatientD8DTO;

    const patient = await this.patientsRepository.findOne(patientId, {
      loadRelationIds: true,
    });
    if (!patient) {
      throw new NotFoundException(`No Patient with Id ${patientId} exists`);
    }
    if (
      patient.patientDEightData === undefined ||
      patient.patientDEightData === null
    ) {
      const d2Data = this.patientsDEightRepository.create({
        patientId,
        ...addPatientD8DTO,
      });
      await this.patientsDEightRepository.save(d2Data);
      return { success: true };
    } else {
      await this.patientsDEightRepository.update(id, {
        patientId,
        ...addPatientD8DTO,
      });
      return { success: true };
    }
  }

  async deletePatientDEightDataById(patientId: string) {
    const found = await this.patientsDEightRepository.findOne({ patientId });
    if (!found) {
      throw new NotFoundException(`No Patient with ${patientId} exists`);
    }
    await found.remove();

    return found;
  }
}
