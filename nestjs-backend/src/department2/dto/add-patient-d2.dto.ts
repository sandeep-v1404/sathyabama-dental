import { IsBoolean, IsString } from 'class-validator';

export class AddPatientD2DTO {
  id!: string;

  @IsString() chiefComplaint: string;
  @IsString() historyOfPresentingIllness: string;
  @IsString() pastMedicalHistory: string;
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
