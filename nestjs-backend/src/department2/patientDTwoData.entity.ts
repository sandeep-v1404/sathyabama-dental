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

  @Column({ nullable: true }) chiefComplaint: string;
  @Column({ nullable: true }) historyOfPresentingIllness: string;
  @Column({ nullable: true }) pastMedicalHistory: string;
  @Column({ nullable: true }) pastSurgicalHistory: string;
  @Column({ nullable: true }) pastDentalHistory: string;
  @Column({ nullable: true }) personalHabits: string;
  @Column({ nullable: true }) generalPhysicalExamination: string;
  @Column({ nullable: true }) extraOral: string;
  @Column({ nullable: true }) hardTissue: string;
  @Column({ nullable: true }) softTissue: string;
  @Column({ nullable: true }) provisionalDiagnosis: string;
  @Column({ nullable: true }) differentialDiagnosis: string;
  @Column({ nullable: true }) investigations: string;
  @Column({ nullable: true }) finalDiagnosis: string;
  @Column({ nullable: true }) treatmentPlan: string;
  @Column({ nullable: true }) treatmentDone: string;
  @Column({ nullable: true }) medicationPrescribed: string;
  @Column({ nullable: true }) summary: string;
  @Column({ nullable: true }) grade: string;
}
