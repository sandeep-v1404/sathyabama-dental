import { IsBoolean, IsString } from 'class-validator';

export class AddPatientD2DTO {
  id!: string;

  @IsString() chiefComplaint: string;
  @IsString() historyOfPresentingIllness: string;
  @IsString() pastMedicalHistory: string;
  @IsString() diabetes: string;
  @IsString() hypertension: string;
  @IsString() allergy: string;
  @IsString() asthma: string;
  @IsString() anemia: string;
  @IsString() epilepsy: string;
  @IsString() cardiacComplication: string;
  @IsString() bleedingDisorder: string;
  @IsString() jaundice: string;
  @IsString() pepticUlcer: string;
  @IsString() gitProblem: string;
  @IsString() other: string;
  @IsString() pastSurgicalHistory: string;
  @IsString() pastDentalHistory: string;
  @IsString() personalHabits: string;
  @IsString() generalPhysicalExamination: string;
  @IsString() extraOral: string;
  @IsString() hardTissue: string;
  @IsString() softTissue: string;
  @IsString() provisionalDiagnosis: string;
  @IsString() differentialDiagnosis: string;
  @IsString() investigations: string;
  @IsString() finalDiagnosis: string;
  @IsString() treatmentPlan: string;
  @IsString() treatmentDone: string;
  @IsString() medicationPrescribed: string;
  @IsString() summary: string;
  @IsString() grade: string;
}
