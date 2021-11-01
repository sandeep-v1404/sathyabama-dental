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
export class PatientDZeroData extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  patientId: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToOne((_type) => Patient, (patient) => patient.patientDZeroData, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'patientId' })
  patient: Patient;

  @Column({ nullable: true })
  chiefComplaint: string;

  @Column({ nullable: true })
  historyOfPresentingIllness: string;

  @Column({ nullable: true })
  medicalHistory: string;

  @Column({ nullable: true })
  surgicalHistory: string;

  @Column({ nullable: true })
  dentalHistory: string;

  @Column({ nullable: true })
  personalHistory: string;

  @Column({ nullable: true })
  familyHistory: string;

  @Column({ nullable: true })
  maritalHistory: string;

  @Column({ nullable: true })
  generalExamination: string;

  @Column({ nullable: true })
  vitalSigns: string;

  @Column({ nullable: true })
  systemicExamination: string;

  @Column({ nullable: true })
  extraOralExamination: string;

  @Column({ nullable: true })
  intraOralExamination: string;

  @Column({ nullable: true })
  hardTissueExamination: string;

  @Column({ nullable: true })
  teeth: string;

  @Column({ nullable: true })
  gingiva: string;

  @Column({ nullable: true })
  alveolarMucosa: string;

  @Column({ nullable: true })
  buccalMucosa: string;

  @Column({ nullable: true })
  labialMucosa: string;

  @Column({ nullable: true })
  palate: string;

  @Column({ nullable: true })
  tongue: string;

  @Column({ nullable: true })
  tonsils: string;

  @Column({ nullable: true })
  floorOfTheMouth: string;

  @Column({ nullable: true })
  pillarsOfTheFauces: string;

  @Column({ nullable: true })
  examinationOfTheLesion: string;

  @Column({ nullable: true })
  summary: string;

  @Column({ nullable: true })
  provisionalDiagnosis: string;

  @Column({ nullable: true })
  differentialDiagnosis: string;

  @Column({ nullable: true })
  investigations: string;

  @Column({ nullable: true })
  finalDiagnosis: string;

  @Column({ nullable: true })
  treatmentPlan: string;

  @Column({ nullable: true })
  referToD1: boolean;

  @Column({ nullable: true })
  referToD2: boolean;

  @Column({ nullable: true })
  referToD3: boolean;

  @Column({ nullable: true })
  referToD4: boolean;

  @Column({ nullable: true })
  referToD5: boolean;

  @Column({ nullable: true })
  referToD6: boolean;

  @Column({ nullable: true })
  referToD7: boolean;

  @Column({ nullable: true })
  referToD8: boolean;
}
