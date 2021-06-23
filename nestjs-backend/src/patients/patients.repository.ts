import { EntityRepository, Repository } from 'typeorm';
import { CreatePatientDTO } from './dto/create-patient.dto';
import { Patient } from './patient.entity';

@EntityRepository(Patient)
export class PatientsRepository extends Repository<Patient> {
  async getAllPatients(name: string): Promise<Patient[]> {
    const query = this.createQueryBuilder('patient');

    if (name) {
      query.andWhere('LOWER(patient.name) LIKE LOWER(:search)', {
        search: `%${name}%`,
      });
    }
    const patients = await query.getMany();
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
      console.log(error);
      return `${error.column} should not be empty`;
    }
  }
}
