import { EntityRepository, Repository } from 'typeorm';
import { CreatePatientDTO } from './dto/create-patient.dto';
import { GetPatientsFilterDto } from './dto/get-patients-filter.dto';
import { Patient } from './patient.entity';

@EntityRepository(Patient)
export class PatientsRepository extends Repository<Patient> {
  async getAllPatients(filterDto: GetPatientsFilterDto): Promise<Patient[]> {
    const { search } = filterDto;

    const query = this.createQueryBuilder('patient');

    if (search) {
      query.andWhere('LOWER(patient.name) LIKE LOWER(:search)', {
        search: `%${search}`,
      });
    }
    const patients = await query.getMany();
    return patients;
  }
  async createPatient(
    createPatientDTO: CreatePatientDTO,
  ): Promise<Patient | string> {
    try {
      const { name, age, sex, contactNumber, occupation, residentialAddress } =
        createPatientDTO;

      const task = this.create({
        name,
        age,
        sex,
        contactNumber,
        occupation,
        residentialAddress,
      });
      await this.save(task);
      return task;
    } catch (error) {
      console.log(error);
      return `${error.column} should not be empty`;
    }
  }
}
