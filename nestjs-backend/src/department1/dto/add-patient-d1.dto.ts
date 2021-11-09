import { IsString } from 'class-validator';

export class AddPatientD1DTO {
  id!: string;

  @IsString()
  chiefComplaint: string;

  @IsString()
  medicalHistory: string;

  @IsString()
  familyHistory: string;

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
