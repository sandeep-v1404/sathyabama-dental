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
export class PatientDOneData extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  patientId: string;

  @OneToOne((_type) => Patient, (patient) => patient.patientDOneData, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'patientId' })
  patient: Patient;

  @Column({ nullable: true })
  chiefComplaint: string;

  @Column({ nullable: true })
  medicalHistorydiabetes: boolean;

  @Column({ nullable: true })
  medicalHistoryhypertension: boolean;

  @Column({ nullable: true })
  medicalHistorycardiacDisorder: boolean;

  @Column({ nullable: true })
  medicalHistoryrheumaticFever: boolean;

  @Column({ nullable: true })
  medicalHistoryepilepsy: boolean;

  @Column({ nullable: true })
  medicalHistorybleedingDisorders: boolean;

  @Column({ nullable: true })
  medicalHistoryjaundice: boolean;

  @Column({ nullable: true })
  medicalHistoryhepatitis: boolean;

  @Column({ nullable: true })
  medicalHistoryasthma: boolean;

  @Column({ nullable: true })
  medicalHistorytyphoid: boolean;

  @Column({ nullable: true })
  medicalHistorydrugAllergy: boolean;

  @Column({ nullable: true })
  medicalHistoryallergicToLAInjections: boolean;

  @Column({ nullable: true })
  medicalHistoryanaemia: boolean;

  @Column({ nullable: true })
  medicalHistorypregnancy: boolean;

  @Column({ nullable: true })
  medicalHistorymenstrualCycle: boolean;

  @Column({ nullable: true })
  medicalHistoryothers: boolean;

  @Column({ nullable: true })
  familyHistorydiabetes: boolean;

  @Column({ nullable: true })
  familyHistorybloodDyscrasias: boolean;

  @Column({ nullable: true })
  familyHistoryhypertension: boolean;

  @Column({ nullable: true })
  familyHistoryconsanguineousMarriage: boolean;

  @Column({ nullable: true })
  familyHistoryothers: boolean;

  @Column({ nullable: true })
  clinicalFindings: string;

  @Column({ nullable: true })
  diagnosis: string;

  @Column({ nullable: true })
  prognosis: string;

  @Column({ nullable: true })
  investigations: string;

  @Column({ nullable: true })
  radiographs: string;

  @Column({ nullable: true })
  treatmentPlan: string;

  @Column({ nullable: true })
  treatmentDone: string;
}
