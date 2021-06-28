import { EntityRepository, Repository } from 'typeorm';
import { PatientDThreeData } from './patientDThreeData.entity';

@EntityRepository(PatientDThreeData)
export class PatientsDThreeRepository extends Repository<PatientDThreeData> {}
