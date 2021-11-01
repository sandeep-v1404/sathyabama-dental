import { EntityRepository, Repository } from 'typeorm';
import { PatientDZeroData } from './patientDZeroData.entity';

@EntityRepository(PatientDZeroData)
export class PatientsDZeroRepository extends Repository<PatientDZeroData> {}
