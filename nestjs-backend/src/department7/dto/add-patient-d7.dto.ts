import { IsString } from 'class-validator';

export class AddPatientD7DTO {
  id!: string;

  @IsString()
  chiefComplaints: string;

  @IsString()
  historyOfPresentIllness: string;

  @IsString()
  dentalHistory: string;

  @IsString()
  medicalHistory: string;

  @IsString()
  familyHistory: string;

  @IsString()
  personalHistory: string;

  @IsString()
  generalExamination: string;

  @IsString()
  extraOral: string;

  @IsString()
  glnglvalFindings: string;

  @IsString()
  periodontalFindings: string;

  @IsString()
  mucosalFindings: string;

  @IsString()
  hardTissuesExamination: string;

  @IsString()
  provisionalDiaganosis: string;

  @IsString()
  investigation: string;

  @IsString()
  finalDiagnosis: string;

  @IsString()
  emergencyCare: string;

  @IsString()
  primaryLevelOfPrevention: string;

  @IsString()
  secondaryLevelOfPrevention: string;

  @IsString()
  tertiaryLevelOfPrevention: string;

  @IsString()
  recallAndMaintenance: string;

  @IsString()
  comprehensiveTreatmentDone: string;
}
