/* eslint-disable @typescript-eslint/no-unused-vars */
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
export class PatientDTwoData extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  patientId: string;

  @OneToOne((_type) => Patient, (patient) => patient.patientDTwoData, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'patientId' })
  patient: Patient;

  @Column({ nullable: true })
  chiefComplaint: string;

  @Column({ nullable: true })
  medicalHistorydiabetes: string;

  @Column({ nullable: true })
  medicalHistoryhypertension: string;
  @Column({ nullable: true })
  medicalHistorycardiacDisorder: string;
  @Column({ nullable: true })
  medicalHistoryrheumaticFever: string;
  @Column({ nullable: true })
  medicalHistoryepilepsy: string;
  @Column({ nullable: true })
  medicalHistorybleedingDisorders: string;
  @Column({ nullable: true })
  medicalHistoryjaundice: string;
  @Column({ nullable: true })
  medicalHistoryhepatitis: string;
  @Column({ nullable: true })
  medicalHistoryasthma: string;
  @Column({ nullable: true })
  medicalHistorytyphoid: string;
  @Column({ nullable: true })
  medicalHistorydrugAllergy: string;
  @Column({ nullable: true })
  medicalHistoryallergicToLAInjections: string;
  @Column({ nullable: true })
  medicalHistoryanaemia: string;
  @Column({ nullable: true })
  medicalHistorypregnancy: string;
  @Column({ nullable: true })
  medicalHistorymenstrualCycle: string;
  @Column({ nullable: true })
  medicalHistoryothers: string;
  @Column({ nullable: true })
  familyHistorydiabetes: string;
  @Column({ nullable: true })
  familyHistorybloodDyscrasias: string;
  @Column({ nullable: true })
  familyHistoryhypertension: string;
  @Column({ nullable: true })
  familyHistoryconsanguineousMarriage: string;
  @Column({ nullable: true })
  familyHistoryothers: string;
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
