import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PatientDZeroData } from 'src/department0/patientDZeroData.entity';
import { PatientDOneData } from '../department1/patientDOneData.entity';
import { PatientDTwoData } from '../department2/patientDTwoData.entity';
import { PatientDThreeData } from '../department3/patientDThreeData.entity';
import { PatientDFourData } from '../department4/patientDFourData.entity';
import { PatientDFiveData } from '../department5/patientDFiveData.entity';
import { PatientDSixData } from '../department6/patientDSixData.entity';
import { PatientDSevenData } from '../department7/patientDSevenData.entity';
import { PatientDEightData } from '../department8/patientDEightData.entity';

@Entity()
export class Patient extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  outPatientId: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  sex: string;

  @Column()
  occupation: string;

  @Column()
  contactNumber: string;

  @Column()
  residentialAddress: string;

  @OneToOne(
    (_type) => PatientDZeroData,
    (patientDZeroData) => patientDZeroData.patient,
    { eager: true },
  )
  patientDZeroData: PatientDZeroData;

  @OneToOne(
    (_type) => PatientDOneData,
    (patientDOneData) => patientDOneData.patient,
    { eager: true },
  )
  patientDOneData: PatientDOneData;

  @OneToOne(
    (_type) => PatientDTwoData,
    (patientDTwoData) => patientDTwoData.patient,
    { eager: true },
  )
  patientDTwoData: PatientDTwoData;

  @OneToOne(
    (_type) => PatientDThreeData,
    (patientDThreeData) => patientDThreeData.patient,
    { eager: true },
  )
  patientDThreeData: PatientDThreeData;

  @OneToOne(
    (_type) => PatientDFourData,
    (patientDFourData) => patientDFourData.patient,
    { eager: true },
  )
  patientDFourData: PatientDFourData;

  @OneToOne(
    (_type) => PatientDFiveData,
    (patientDFiveData) => patientDFiveData.patient,
    { eager: true },
  )
  patientDFiveData: PatientDFiveData;

  @OneToOne(
    (_type) => PatientDSixData,
    (patientDSixData) => patientDSixData.patient,
    { eager: true },
  )
  patientDSixData: PatientDSixData;

  @OneToOne(
    (_type) => PatientDSevenData,
    (patientDSevenData) => patientDSevenData.patient,
    { eager: true },
  )
  patientDSevenData: PatientDSevenData;

  @OneToOne(
    (_type) => PatientDEightData,
    (patientDEightData) => patientDEightData.patient,
    { eager: true },
  )
  patientDEightData: PatientDEightData;
}
