import { EntityRepository, Repository } from 'typeorm';
import { PatientDSevenData } from '../department7/patientDSevenData.entity';

@EntityRepository(PatientDSevenData)
export class PatientsDSevenRepository extends Repository<PatientDSevenData> {}
