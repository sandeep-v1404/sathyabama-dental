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
export class PatientDSixData extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  patientId: string;

  @OneToOne((_type) => Patient, (patient) => patient.patientDSixData, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'patientId' })
  patient: Patient;

  @Column({ nullable: true })
  chiefComplaint: string;

  @Column({ nullable: true })
  preNatalHistory: string;

  @Column({ nullable: true })
  postNatalHistory: string;

  @Column({ nullable: true })
  habits: string;

  @Column({ nullable: true })
  injuries: string;

  @Column({ nullable: true })
  medicalHistory: string;

  @Column({ nullable: true })
  dentalHistory: string;

  @Column({ nullable: true })
  familialMalocclusionHistory: string;

  @Column({ nullable: true })
  generalHistory: string;

  @Column({ nullable: true })
  brushingHabits: string;

  @Column({ nullable: true })
  pubertalStatus: string;

  @Column({ nullable: true })
  anyOtherInformation: string;

  @Column({ nullable: true })
  physicalStatus: string;

  @Column({ nullable: true })
  clinicalExamination: string;

  @Column({ nullable: true })
  extraOralExamination: string;

  @Column({ nullable: true })
  functionalExamination: string;

  @Column({ nullable: true })
  amountOfIncisorExposure: string;

  @Column({ nullable: true })
  tMJExamination: string;

  @Column({ nullable: true })
  softTissues: string;

  @Column({ nullable: true })
  tongue: string;

  @Column({ nullable: true })
  oralMucosa: string;

  @Column({ nullable: true })
  hardTissues: string;

  @Column({ nullable: true })
  maxillaryArch: string;

  @Column({ nullable: true })
  mandibularArch: string;

  @Column({ nullable: true })
  relationOfMandibularToMaxillaryArch: string;

  @Column({ nullable: true })
  anteroPosteriorRelationship: string;

  @Column({ nullable: true })
  verticalRelationship: string;

  @Column({ nullable: true })
  transverseRelationship: string;

  @Column({ nullable: true })
  intraOralRadiographs: string;
}
