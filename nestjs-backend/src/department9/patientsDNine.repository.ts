import { EntityRepository, Repository } from 'typeorm';
import { PatientDNineData } from './patientDNineData.entity';

@EntityRepository(PatientDNineData)
export class PatientsDNineRepository extends Repository<PatientDNineData> {}
