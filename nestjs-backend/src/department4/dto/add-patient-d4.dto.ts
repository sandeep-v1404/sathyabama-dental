import { IsString } from 'class-validator';

export class AddPatientD4DTO {
  id!: string;

  @IsString() chiefComplaint: string;
  @IsString() medicalHistory: string;
  @IsString() ifYesDetailsOfTheMedication: string;
  @IsString() allergiesIfAny: string;
  @IsString() dentalHistory: string;
  @IsString() extra0RalExamination: string;
  @IsString() tmj: string;
  @IsString() intraoralExamination: string;
  @IsString() teethFilled: string;
  @IsString() teethMissing: string;
  @IsString() rootTreated: string;
  @IsString() occlusion: string;
  @IsString() occlusionCanine: string;
  @IsString() occlusionMolar: string;
  @IsString() occlusionOthers: string;
  @IsString() miscellaneous: string;
  @IsString() radiographicInterpretation: string;
  @IsString() diagnosis: string;
  @IsString() treatmentPlanRemovablePartialDenture: string;
  @IsString() treatmentPlanCompleteDenture: string;
  @IsString() treatmentPlanFixedPartialDenture: string;
  @IsString() treatmentPlanImplant: string;
  @IsString() treatmentPlanOthers: string;
}
