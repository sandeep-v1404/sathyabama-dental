import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PatientDOneData } from '../department1/patientDOneData.entity';

@Entity()
export class Patient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

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
    (_type) => PatientDOneData,
    (patientDOneData) => patientDOneData.patient,
  )
  patientDOneData: PatientDOneData;
}
