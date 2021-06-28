import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddPatientD9DTO } from 'src/department9/dto/add-patient-d9.dto';
import { PatientsDNineRepository } from 'src/department9/patientsDNine.repository';
import { PatientsRepository } from 'src/patients/patients.repository';

@Injectable()
export class Department9Service {
  constructor(
    @InjectRepository(PatientsDNineRepository)
    private patientsDNineRepository: PatientsDNineRepository,
    @InjectRepository(PatientsRepository)
    private patientsRepository: PatientsRepository,
  ) {}

  async addPatientDNineData(
    patientId: string,
    addPatientD9DTO: AddPatientD9DTO,
  ): Promise<{ success: boolean }> {
    const { id } = addPatientD9DTO;

    const patient = await this.patientsRepository.findOne(patientId, {
      loadRelationIds: true,
    });
    if (!patient) {
      throw new NotFoundException(`No Patient with Id ${patientId} exists`);
    }
    if (
      patient.patientDNineData === undefined ||
      patient.patientDNineData === null
    ) {
      const d2Data = this.patientsDNineRepository.create({
        patientId,
        ...addPatientD9DTO,
      });
      await this.patientsDNineRepository.save(d2Data);
      return { success: true };
    } else {
      await this.patientsDNineRepository.update(id, {
        patientId,
        ...addPatientD9DTO,
      });
      return { success: true };
    }
  }

  async deletePatientDNineDataById(patientId: string) {
    const found = await this.patientsDNineRepository.findOne({ patientId });
    if (!found) {
      throw new NotFoundException(`No Patient with ${patientId} exists`);
    }
    await found.remove();

    return found;
  }
}
