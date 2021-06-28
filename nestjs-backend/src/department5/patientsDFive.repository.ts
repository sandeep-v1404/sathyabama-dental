import { EntityRepository, Repository } from 'typeorm';
import { PatientDFiveData } from '../department5/patientDFiveData.entity';

@EntityRepository(PatientDFiveData)
export class PatientsDFiveRepository extends Repository<PatientDFiveData> {}
