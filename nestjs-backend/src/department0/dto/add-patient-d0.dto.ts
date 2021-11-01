import { IsBoolean, IsString } from 'class-validator';

export class AddPatientD0DTO {
  id!: string;

  @IsString()
  chiefComplaint: string;

  @IsString()
  historyOfPresentingIllness: string;

  @IsString()
  medicalHistory: string;

  @IsString()
  surgicalHistory: string;

  @IsString()
  dentalHistory: string;

  @IsString()
  personalHistory: string;

  @IsString()
  familyHistory: string;

  @IsString()
  maritalHistory: string;

  @IsString()
  generalExamination: string;

  @IsString()
  vitalSigns: string;

  @IsString()
  systemicExamination: string;

  @IsString()
  extraOralExamination: string;

  @IsString()
  intraOralExamination: string;

  @IsString()
  hardTissueExamination: string;

  @IsString()
  teeth: string;

  @IsString()
  gingiva: string;

  @IsString()
  alveolarMucosa: string;

  @IsString()
  buccalMucosa: string;

  @IsString()
  labialMucosa: string;

  @IsString()
  palate: string;

  @IsString()
  tongue: string;

  @IsString()
  tonsils: string;

  @IsString()
  floorOfTheMouth: string;

  @IsString()
  pillarsOfTheFauces: string;

  @IsString()
  examinationOfTheLesion: string;

  @IsString()
  summary: string;

  @IsString()
  provisionalDiagnosis: string;

  @IsString()
  differentialDiagnosis: string;

  @IsString()
  investigations: string;

  @IsString()
  finalDiagnosis: string;

  @IsString()
  treatmentPlan: string;

  @IsBoolean()
  referToD1: boolean;

  @IsBoolean()
  referToD2: boolean;

  @IsBoolean()
  referToD3: boolean;

  @IsBoolean()
  referToD4: boolean;

  @IsBoolean()
  referToD5: boolean;

  @IsBoolean()
  referToD6: boolean;

  @IsBoolean()
  referToD7: boolean;

  @IsBoolean()
  referToD8: boolean;
}
