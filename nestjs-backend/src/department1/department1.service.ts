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
    addPatientD1DTO: AddPatientD1DTO,
    patientId: number,
  ) {
    const { maritalStatus, id } = addPatientD1DTO;

    const patient = await this.patientsRepository.findOne(patientId, {
      loadRelationIds: true,
    });

    if (patient.patientDOneData === undefined) {
      const d1Data = this.patientsDOneRepository.create({
        patientId,
        maritalStatus,
      });
      return await this.patientsDOneRepository.save(d1Data);
    } else {
      const d1Data = await this.patientsDOneRepository.update(id, {
        maritalStatus,
        patientId,
      });
      return d1Data;
    }
  }

  async getDepartment1Patients() {
    const found = await this.patientsRepository.find({
      relations: ['patientDOneData'],
    });
    if (!found) {
      throw new NotFoundException(`No Patients exists in the department`);
    }
    return found;
  }

  async getPatientDOneDataById(patientId: number) {
    const found = await this.patientsRepository.findOne(patientId, {
      relations: ['patientDOneData'],
    });
    if (!found) {
      throw new NotFoundException(
        `No Patient with ${patientId} in the Department`,
      );
    }
    return found;
  }

  async deletePatientDOneDataById(patientId: number) {
    const found = await this.patientsDOneRepository.findOne({ patientId });
    if (!found) {
      throw new NotFoundException(`No Patient with ${patientId} exists`);
    }
    await found.remove();

    return found;
  }
}
