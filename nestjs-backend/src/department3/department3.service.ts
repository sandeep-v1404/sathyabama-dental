import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientsRepository } from 'src/patients/patients.repository';
import { AddPatientD3DTO } from './dto/add-patient-d3.dto';
import { PatientsDThreeRepository } from './patientsDThree.repository';

@Injectable()
export class Department3Service {
  constructor(
    @InjectRepository(PatientsDThreeRepository)
    private patientsDThreeRepository: PatientsDThreeRepository,
    @InjectRepository(PatientsRepository)
    private patientsRepository: PatientsRepository,
  ) {}

  async addPatientDThreeData(
    patientId: string,
    addPatientD3DTO: AddPatientD3DTO,
  ): Promise<{ success: boolean }> {
    const { id } = addPatientD3DTO;

    const patient = await this.patientsRepository.findOne(patientId, {
      loadRelationIds: true,
    });
    if (!patient) {
      throw new NotFoundException(`No Patient with Id ${patientId} exists`);
    }
    if (
      patient.patientDThreeData === undefined ||
      patient.patientDThreeData === null
    ) {
      const d2Data = this.patientsDThreeRepository.create({
        patientId,
        ...addPatientD3DTO,
      });
      await this.patientsDThreeRepository.save(d2Data);
      return { success: true };
    } else {
      await this.patientsDThreeRepository.update(id, {
        patientId,
        ...addPatientD3DTO,
      });
      return { success: true };
    }
  }

  async deletePatientDThreeDataById(patientId: string) {
    const found = await this.patientsDThreeRepository.findOne({ patientId });
    if (!found) {
      throw new NotFoundException(`No Patient with ${patientId} exists`);
    }
    await found.remove();

    return found;
  }
}
