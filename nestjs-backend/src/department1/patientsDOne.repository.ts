import { EntityRepository, Repository } from 'typeorm';
import { PatientDOneData } from './patientDOneData.entity';

@EntityRepository(PatientDOneData)
export class PatientsDOneRepository extends Repository<PatientDOneData> {}
