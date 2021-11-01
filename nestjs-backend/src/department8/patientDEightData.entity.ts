import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Patient } from '../patients/patient.entity';

@Entity()
export class PatientDEightData extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  patientId: string;

  @OneToOne((_type) => Patient, (patient) => patient.patientDEightData, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'patientId' })
  patient: Patient;

  @Column({ nullable: true })
  chiefComplaint: string;

  @Column({ nullable: true })
  historyOfPresentIllness: string;

  @Column({ nullable: true })
  habits: string;

  @Column({ nullable: true })
  clinicalFeatures: string;

  @Column({ nullable: true })
  aspiration: string;

  @Column({ nullable: true })
  radiograph: string;

  @Column({ nullable: true })
  surgicalDetails: string;

  @Column({ nullable: true })
  typeOfBiopsy: string;

  @Column({ nullable: true })
  macroscopicFeatures: string;

  @Column({ nullable: true })
  provisionalDiagnosis: string;

  @Column({ nullable: true })
  incisionalBiopsyDiagnosis: string;

  @Column({ nullable: true })
  macroscopicFeatures2: string;

  @Column({ nullable: true })
  histopathology: string;

  @Column({ nullable: true })
  diagnosis: string;

  @Column({ nullable: true })
  furtherInvestigation: string;

  @Column({ nullable: true })
  chiefComplaint2: string;

  @Column({ nullable: true })
  historyOfPresentIllness2: string;

  @Column({ nullable: true })
  habitsDuration: string;

  @Column({ nullable: true })
  clinicalFeatures2: string;

  @Column({ nullable: true })
  aspiration2: string;

  @Column({ nullable: true })
  radiograph2: string;

  @Column({ nullable: true })
  surgicalDetails2: string;

  @Column({ nullable: true })
  typeOfBiopsy2: string;

  @Column({ nullable: true })
  siteOfBiopsy: string;

  @Column({ nullable: true })
  natureOfTissue: string;

  @Column({ nullable: true })
  provisionalDiagnosis2: string;
}
