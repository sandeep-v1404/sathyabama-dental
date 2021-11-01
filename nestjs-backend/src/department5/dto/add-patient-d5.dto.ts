import { IsString } from 'class-validator';

export class AddPatientD5DTO {
  id!: string;

  @IsString()
  chiefComplaint: string;

  @IsString()
  historyOfPresentingIllness: string;

  @IsString()
  pastMedicalHistory: string;

  @IsString()
  pastDentalHistory: string;

  @IsString()
  personalHistory: string;

  @IsString()
  oralHygieneHabits: string;

  @IsString()
  oralHabits: string;

  @IsString()
  numberOfSugarExposures: string;

  @IsString()
  cariogenicNonCariogenicDiet: string;

  @IsString()
  generalExamination: string;

  @IsString()
  extraOralExamination: string;

  @IsString()
  intraOralExamination: string;

  @IsString()
  teethPresent: string;

  @IsString()
  occlusalAnalysis: string;

  @IsString()
  provisionalDiagnosis: string;

  @IsString()
  investigations: string;

  @IsString()
  radiographicInterpretation: string;

  @IsString()
  diagnosis: string;

  @IsString()
  treatmentPlan: string;

  @IsString()
  treatmentDone: string;

  @IsString()
  reviewRecall: string;

  @IsString()
  chiefComplaint2: string;

  @IsString()
  historyOfPresentingIllness2: string;

  @IsString()
  parentalHistory: string;

  @IsString()
  prenatalHistory: string;

  @IsString()
  natalHistory: string;

  @IsString()
  pastMedicalHistory2: string;

  @IsString()
  pastDentalHistory2: string;

  @IsString()
  pastNatalHistory: string;

  @IsString()
  numberOfSugarExposures2: string;

  @IsString()
  cariogenicNonCariogenicDiet2: string;

  @IsString()
  generalExamination2: string;

  @IsString()
  extraOralExamination2: string;

  @IsString()
  intraOralExamination2: string;

  @IsString()
  teethPresent2: string;

  @IsString()
  clinicalFindings: string;

  @IsString()
  molarRelationship: string;

  @IsString()
  canineRelationship: string;

  @IsString()
  incisorRelationship: string;

  @IsString()
  midline: string;

  @IsString()
  archLength: string;

  @IsString()
  radiographicInvestigations: string;

  @IsString()
  diagnosis2: string;

  @IsString()
  treatmentPlan2: string;

  @IsString()
  modeOfManagement: string;

  @IsString()
  studyModelsAnalysis: string;

  @IsString()
  xRays: string;

  @IsString()
  cephalogram: string;

  @IsString()
  photographs: string;
}
