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
export class PatientDThreeData extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  patientId: string;

  @OneToOne((_type) => Patient, (patient) => patient.patientDThreeData, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'patientId' })
  patient: Patient;

  @Column({ nullable: true })
  chiefComplaint: string;

  @Column({ nullable: true })
  historyOfPresentingIllness: string;

  @Column({ nullable: true })
  pastDentalHistory: string;

  @Column({ nullable: true })
  pastMedicalHistory: string;

  @Column({ nullable: true })
  allergiesIfAny: string;

  @Column({ nullable: true })
  extraOralExamination: string;

  @Column({ nullable: true })
  intraOralExamination: string;

  @Column({ nullable: true })
  periodontalStatus: string;

  @Column({ nullable: true })
  provisionalDiagnosis: string;

  @Column({ nullable: true })
  differentialDiagnosis: string;

  @Column({ nullable: true })
  diagnosticTests: string;

  @Column({ nullable: true })
  radiographicInterpretation: string;

  @Column({ nullable: true })
  otherInvestigations: string;

  @Column({ nullable: true })
  diagnosis: string;

  @Column({ nullable: true })
  treatmentAdvised: string;

  @Column({ nullable: true })
  patientMotivation: string;

  @Column({ nullable: true })
  treatmentNotes: string;

  @Column({ nullable: true })
  toothNumber: string;

  @Column({ nullable: true })
  accessCavityPreparationAndPulpExtirpation: string;

  @Column({ nullable: true })
  bioMechanicalPreparation: string;

  @Column({ nullable: true })
  obturation: string;

  @Column({ nullable: true })
  postOperativeRadiograph: string;

  @Column({ nullable: true })
  existingRestorationsAndStatus: string;

  @Column({ nullable: true })
  radiographicPulpExposure: string;

  @Column({ nullable: true })
  laminaDura: string;

  @Column({ nullable: true })
  periapicalRadiolucency: string;

  @Column({ nullable: true })
  periodontalStatus2: string;

  @Column({ nullable: true })
  natureOfRootCanalInInvolvedTooth: string;

  @Column({ nullable: true })
  previousEndodonticTreatment: string;

  @Column({ nullable: true })
  fractureOfTeeth: string;

  @Column({ nullable: true })
  anyOtherAbnormalities: string;
}
