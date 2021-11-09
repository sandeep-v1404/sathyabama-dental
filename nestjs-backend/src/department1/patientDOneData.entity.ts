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
  medicalHistory: string;

  @Column({ nullable: true })
  familyHistory: string;

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
