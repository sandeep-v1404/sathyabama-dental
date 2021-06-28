import { EntityRepository, Repository } from 'typeorm';
import { PatientDTwoData } from './patientDTwoData.entity';

@EntityRepository(PatientDTwoData)
export class PatientsDTwoRepository extends Repository<PatientDTwoData> {}
