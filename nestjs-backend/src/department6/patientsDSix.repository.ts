import { EntityRepository, Repository } from 'typeorm';
import { PatientDSixData } from './patientDSixData.entity';

@EntityRepository(PatientDSixData)
export class PatientsDSixRepository extends Repository<PatientDSixData> {}
