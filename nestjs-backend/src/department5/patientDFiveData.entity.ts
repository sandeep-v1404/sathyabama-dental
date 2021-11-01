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
export class PatientDFiveData extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  patientId: string;

  @OneToOne((_type) => Patient, (patient) => patient.patientDFiveData, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'patientId' })
  patient: Patient;

  @Column({ nullable: true })
  chiefComplaint: string;

  @Column({ nullable: true })
  historyOfPresentingIllness: string;

  @Column({ nullable: true })
  pastMedicalHistory: string;

  @Column({ nullable: true })
  pastDentalHistory: string;

  @Column({ nullable: true })
  personalHistory: string;

  @Column({ nullable: true })
  oralHygieneHabits: string;

  @Column({ nullable: true })
  oralHabits: string;

  @Column({ nullable: true })
  numberOfSugarExposures: string;

  @Column({ nullable: true })
  cariogenicNonCariogenicDiet: string;

  @Column({ nullable: true })
  generalExamination: string;

  @Column({ nullable: true })
  extraOralExamination: string;

  @Column({ nullable: true })
  intraOralExamination: string;

  @Column({ nullable: true })
  teethPresent: string;

  @Column({ nullable: true })
  occlusalAnalysis: string;

  @Column({ nullable: true })
  provisionalDiagnosis: string;

  @Column({ nullable: true })
  investigations: string;

  @Column({ nullable: true })
  radiographicInterpretation: string;

  @Column({ nullable: true })
  diagnosis: string;

  @Column({ nullable: true })
  treatmentPlan: string;

  @Column({ nullable: true })
  treatmentDone: string;

  @Column({ nullable: true })
  reviewRecall: string;

  @Column({ nullable: true })
  chiefComplaint2: string;

  @Column({ nullable: true })
  historyOfPresentingIllness2: string;

  @Column({ nullable: true })
  parentalHistory: string;

  @Column({ nullable: true })
  prenatalHistory: string;

  @Column({ nullable: true })
  natalHistory: string;

  @Column({ nullable: true })
  pastMedicalHistory2: string;

  @Column({ nullable: true })
  pastDentalHistory2: string;

  @Column({ nullable: true })
  pastNatalHistory: string;

  @Column({ nullable: true })
  numberOfSugarExposures2: string;

  @Column({ nullable: true })
  cariogenicNonCariogenicDiet2: string;

  @Column({ nullable: true })
  generalExamination2: string;

  @Column({ nullable: true })
  extraOralExamination2: string;

  @Column({ nullable: true })
  intraOralExamination2: string;

  @Column({ nullable: true })
  teethPresent2: string;

  @Column({ nullable: true })
  clinicalFindings: string;

  @Column({ nullable: true })
  molarRelationship: string;

  @Column({ nullable: true })
  canineRelationship: string;

  @Column({ nullable: true })
  incisorRelationship: string;

  @Column({ nullable: true })
  midline: string;

  @Column({ nullable: true })
  archLength: string;

  @Column({ nullable: true })
  radiographicInvestigations: string;

  @Column({ nullable: true })
  diagnosis2: string;

  @Column({ nullable: true })
  treatmentPlan2: string;

  @Column({ nullable: true })
  modeOfManagement: string;

  @Column({ nullable: true })
  studyModelsAnalysis: string;

  @Column({ nullable: true })
  xRays: string;

  @Column({ nullable: true })
  cephalogram: string;

  @Column({ nullable: true })
  photographs: string;
}
