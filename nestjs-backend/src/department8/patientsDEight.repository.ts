import { EntityRepository, Repository } from 'typeorm';
import { PatientDEightData } from '../department8/patientDEightData.entity';

@EntityRepository(PatientDEightData)
export class PatientsDEightRepository extends Repository<PatientDEightData> {}
