import { ConflictException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreatePatientDTO } from './dto/create-patient.dto';
import { Patient } from './patient.entity';

@EntityRepository(Patient)
export class PatientsRepository extends Repository<Patient> {
  async getAllPatients(): Promise<Patient[]> {
    const patients = await this.find({ relations: ['patientDOneData'] });
    console.log(patients);

    return patients;
  }
  async createPatient(
    createPatientDTO: CreatePatientDTO,
  ): Promise<Patient | string> {
    try {
      const {
        outPatientId,
        name,
        age,
        sex,
        contactNumber,
        occupation,
        residentialAddress,
      } = createPatientDTO;

      const patient = this.create({
        outPatientId,
        name,
        age,
        sex,
        contactNumber,
        occupation,
        residentialAddress,
      });
      await this.save(patient);
      return patient;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException(`${error.detail}`);
      }
      return `${error.column} should not be empty`;
    }
  }
}
