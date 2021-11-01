import { IsString } from 'class-validator';

export class AddPatientD4DTO {
  id!: string;

  @IsString()
  chiefComplaint: string;

  @IsString()
  medicalHistory: string;

  @IsString()
  dentalHistory: string;

  @IsString()
  extraoralExamination: string;

  @IsString()
  tmj: string;

  @IsString()
  intraoralExamination: string;

  @IsString()
  teethFilled: string;

  @IsString()
  teethMissing: string;

  @IsString()
  rootTreated: string;

  @IsString()
  occlusion: string;

  @IsString()
  miscellaneous: string;

  @IsString()
  radiographicInterpretation: string;

  @IsString()
  diagnosis: string;

  @IsString()
  treatmentPlan: string;
}
