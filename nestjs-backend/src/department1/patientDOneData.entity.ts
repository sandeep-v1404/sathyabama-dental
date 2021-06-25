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
  @PrimaryGeneratedColumn()
  id: number;

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
  diet: string;

  @Column({ nullable: true })
  personalHabits: string;

  @Column({ nullable: true })
  familyHistory: string;

  @Column({ nullable: true })
  maritalHistory: string;

  @Column({ nullable: true })
  stature: string;

  @Column({ nullable: true })
  appearance: string;

  @Column({ nullable: true })
  built: string;

  @Column({ nullable: true })
  nourishment: string;

  @Column({ nullable: true })
  structuralAlterationsDeformities: string;

  @Column({ nullable: true })
  hair: string;

  @Column({ nullable: true })
  skin: string;

  @Column({ nullable: true })
  pallor: string;

  @Column({ nullable: true })
  icterus: string;

  @Column({ nullable: true })
  pedalEdema: string;

  @Column({ nullable: true })
  cyanosis: string;

  @Column({ nullable: true })
  bP: string;

  @Column({ nullable: true })
  respiratoryRate: string;

  @Column({ nullable: true })
  pulseRate: string;

  @Column({ nullable: true })
  temperature: string;

  @Column({ nullable: true })
  cvs: string;

  @Column({ nullable: true })
  rs: string;

  @Column({ nullable: true })
  git: string;

  @Column({ nullable: true })
  cnd: string;

  @Column({ nullable: true })
  urogenitalSystem: string;

  @Column({ nullable: true })
  facialSymmetry: string;

  @Column({ nullable: true })
  earNoseEye: string;

  @Column({ nullable: true })
  tmj: string;

  @Column({ nullable: true })
  lips: string;

  @Column({ nullable: true })
  maxillarySinusTenderness: string;

  @Column({ nullable: true })
  lymphNodes: string;

  @Column({ nullable: true })
  intraOralExamination: string;

  @Column({ nullable: true })
  openingOfTheMouth: string;

  @Column({ nullable: true })
  interincisalDistance: string;

  @Column({ nullable: true })
  jawDeviation: string;

  @Column({ nullable: true })
  teethNumber: string;

  @Column({ nullable: true })
  teethSize: string;

  @Column({ nullable: true })
  teethShape: string;

  @Column({ nullable: true })
  teethColour: string;

  @Column({ nullable: true })
  teethMissingTooth: string;

  @Column({ nullable: true })
  teethRestoredTooth: string;

  @Column({ nullable: true })
  teethStains: string;

  @Column({ nullable: true })
  teethCaries: string;

  @Column({ nullable: true })
  teethAttrition: string;

  @Column({ nullable: true })
  teethAbrasion: string;

  @Column({ nullable: true })
  teethErosion: string;

  @Column({ nullable: true })
  teethMobility: string;

  @Column({ nullable: true })
  teethRootStumps: string;

  @Column({ nullable: true })
  teethFracture: string;

  @Column({ nullable: true })
  teethRetainedDeciduous: string;

  @Column({ nullable: true })
  teethPartiallyErupted: string;

  @Column({ nullable: true })
  teethDevelopmentalAnomalies: string;

  @Column({ nullable: true })
  gingivaColour: string;

  @Column({ nullable: true })
  gingivaContour: string;

  @Column({ nullable: true })
  gingivaConsistency: string;

  @Column({ nullable: true })
  gingivaCalculus: string;

  @Column({ nullable: true })
  gingivalRecession: string;

  @Column({ nullable: true })
  gingivaPeriodontalPocket: string;

  @Column({ nullable: true })
  alveolarMucosa: string;

  @Column({ nullable: true })
  buccalMucosaColour: string;

  @Column({ nullable: true })
  buccalMucosaConsistency: string;

  @Column({ nullable: true })
  buccalMucosaOpeningOfStensonSDuct: string;

  @Column({ nullable: true })
  labialMucosa: string;

  @Column({ nullable: true })
  palateHardPalate: string;

  @Column({ nullable: true })
  palateSoftPalate: string;

  @Column({ nullable: true })
  tongueSize: string;

  @Column({ nullable: true })
  tongueMovement: string;

  @Column({ nullable: true })
  tongueAttachment: string;

  @Column({ nullable: true })
  tongueDorsalSurface: string;

  @Column({ nullable: true })
  tongueVentralSurface: string;

  @Column({ nullable: true })
  tongueEdge: string;

  @Column({ nullable: true })
  tongueLateralSurface: string;

  @Column({ nullable: true })
  tonsils: string;
  @Column({ nullable: true })
  floorOfTheMouth: string;

  @Column({ nullable: true })
  pillarsOfTheFauces: string;

  @Column({ nullable: true })
  inspection: string;

  @Column({ nullable: true })
  palpation: string;

  @Column({ nullable: true })
  summary: string;

  @Column({ nullable: true })
  provisionalDiagonosis: string;

  @Column({ nullable: true })
  investigations: string;

  @Column({ nullable: true })
  finalDiagonosis: string;

  @Column({ nullable: true })
  treatmentPlan: string;

  @Column({ nullable: true })
  referalToDepartments: string;
}
