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
export class PatientDSevenData extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  patientId: string;

  @OneToOne((_type) => Patient, (patient) => patient.patientDSevenData, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'patientId' })
  patient: Patient;

  @Column({ nullable: true })
  chiefComplaints: string;

  @Column({ nullable: true })
  historyOfPresentIllness: string;

  @Column({ nullable: true })
  dentalHistory: string;

  @Column({ nullable: true })
  medicalHistory: string;

  @Column({ nullable: true })
  familyHistory: string;

  @Column({ nullable: true })
  personalHistory: string;

  @Column({ nullable: true })
  generalExamination: string;

  @Column({ nullable: true })
  extraOral: string;

  @Column({ nullable: true })
  intraOral: string;

  @Column({ nullable: true })
  glnglvalFindings: string;

  @Column({ nullable: true })
  periodontalFindings: string;

  @Column({ nullable: true })
  mucosalFindings: string;

  @Column({ nullable: true })
  hardTissuesExamination: string;

  @Column({ nullable: true })
  provisionalDiaganosis: string;

  @Column({ nullable: true })
  investigation: string;

  @Column({ nullable: true })
  finalDiagnosis: string;

  @Column({ nullable: true })
  emergencyCare: string;

  @Column({ nullable: true })
  primaryLevelOfPrevention: string;

  @Column({ nullable: true })
  secondaryLevelOfPrevention: string;

  @Column({ nullable: true })
  tertiaryLevelOfPrevention: string;

  @Column({ nullable: true })
  recallAndMaintenance: string;

  @Column({ nullable: true })
  comprehensiveTreatmentDone: string;
}
