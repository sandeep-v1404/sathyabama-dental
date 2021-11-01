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
export class PatientDFourData extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  patientId: string;

  @OneToOne((_type) => Patient, (patient) => patient.patientDFourData, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'patientId' })
  patient: Patient;

  @Column({ nullable: true })
  chiefComplaint: string;

  @Column({ nullable: true })
  medicalHistory: string;

  @Column({ nullable: true })
  dentalHistory: string;

  @Column({ nullable: true })
  extraoralExamination: string;

  @Column({ nullable: true })
  tmj: string;

  @Column({ nullable: true })
  intraoralExamination: string;

  @Column({ nullable: true })
  teethFilled: string;

  @Column({ nullable: true })
  teethMissing: string;

  @Column({ nullable: true })
  rootTreated: string;

  @Column({ nullable: true })
  occlusion: string;

  @Column({ nullable: true })
  miscellaneous: string;

  @Column({ nullable: true })
  radiographicInterpretation: string;

  @Column({ nullable: true })
  diagnosis: string;

  @Column({ nullable: true })
  treatmentPlan: string;
}
