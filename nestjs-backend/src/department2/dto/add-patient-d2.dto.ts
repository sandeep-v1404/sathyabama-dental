import { IsString } from 'class-validator';

export class AddPatientD2DTO {
  id!: string;

  @IsString()
  chiefComplaint: string;

  @IsString()
  medicalHistorydiabetes: string;

  @IsString()
  medicalHistoryhypertension: string;

  @IsString()
  medicalHistorycardiacDisorder: string;

  @IsString()
  medicalHistoryrheumaticFever: string;

  @IsString()
  medicalHistoryepilepsy: string;

  @IsString()
  medicalHistorybleedingDisorders: string;

  @IsString()
  medicalHistoryjaundice: string;

  @IsString()
  medicalHistoryhepatitis: string;

  @IsString()
  medicalHistoryasthma: string;

  @IsString()
  medicalHistorytyphoid: string;

  @IsString()
  medicalHistorydrugAllergy: string;

  @IsString()
  medicalHistoryallergicToLAInjections: string;

  @IsString()
  medicalHistoryanaemia: string;

  @IsString()
  medicalHistorypregnancy: string;

  @IsString()
  medicalHistorymenstrualCycle: string;

  @IsString()
  medicalHistoryothers: string;

  @IsString()
  familyHistorydiabetes: string;

  @IsString()
  familyHistorybloodDyscrasias: string;

  @IsString()
  familyHistoryhypertension: string;

  @IsString()
  familyHistoryconsanguineousMarriage: string;

  @IsString()
  familyHistoryothers: string;

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
