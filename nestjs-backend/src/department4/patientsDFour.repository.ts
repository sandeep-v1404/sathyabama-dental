import { EntityRepository, Repository } from 'typeorm';
import { PatientDFourData } from '../department4/patientDFourData.entity';

@EntityRepository(PatientDFourData)
export class PatientsDFourRepository extends Repository<PatientDFourData> {}
