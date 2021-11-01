import { IsBoolean, IsString } from 'class-validator';

export class AddPatientD1DTO {
  id!: string;

  @IsString()
  chiefComplaint: string;

  @IsBoolean()
  medicalHistorydiabetes: boolean;

  @IsBoolean()
  medicalHistoryhypertension: boolean;

  @IsBoolean()
  medicalHistorycardiacDisorder: boolean;

  @IsBoolean()
  medicalHistoryrheumaticFever: boolean;

  @IsBoolean()
  medicalHistoryepilepsy: boolean;

  @IsBoolean()
  medicalHistorybleedingDisorders: boolean;

  @IsBoolean()
  medicalHistoryjaundice: boolean;

  @IsBoolean()
  medicalHistoryhepatitis: boolean;

  @IsBoolean()
  medicalHistoryasthma: boolean;

  @IsBoolean()
  medicalHistorytyphoid: boolean;

  @IsBoolean()
  medicalHistorydrugAllergy: boolean;

  @IsBoolean()
  medicalHistoryallergicToLAInjections: boolean;

  @IsBoolean()
  medicalHistoryanaemia: boolean;

  @IsBoolean()
  medicalHistorypregnancy: boolean;

  @IsBoolean()
  medicalHistorymenstrualCycle: boolean;

  @IsBoolean()
  medicalHistoryothers: boolean;

  @IsBoolean()
  familyHistorydiabetes: boolean;

  @IsBoolean()
  familyHistorybloodDyscrasias: boolean;

  @IsBoolean()
  familyHistoryhypertension: boolean;

  @IsBoolean()
  familyHistoryconsanguineousMarriage: boolean;

  @IsBoolean()
  familyHistoryothers: boolean;

  @IsString()
  clinicalFindings: string;

  @IsString()
  diagnosis: string;

  @IsString()
  prognosis: string;

  @IsString()
  investigations: string;

  @IsString()
  radiographs: string;

  @IsString()
  treatmentPlan: string;

  @IsString()
  treatmentDone: string;
}
