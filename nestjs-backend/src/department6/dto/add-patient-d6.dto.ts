import { IsString } from 'class-validator';

export class AddPatientD6DTO {
  id!: string;

  @IsString()
  chiefComplaint: string;

  @IsString()
  preNatalHistory: string;

  @IsString()
  postNatalHistory: string;

  @IsString()
  habits: string;

  @IsString()
  injuries: string;

  @IsString()
  medicalHistory: string;

  @IsString()
  dentalHistory: string;

  @IsString()
  familialMalocclusionHistory: string;

  @IsString()
  generalHistory: string;

  @IsString()
  brushingHabits: string;

  @IsString()
  pubertalStatus: string;

  @IsString()
  anyOtherInformation: string;

  @IsString()
  physicalStatus: string;

  @IsString()
  clinicalExamination: string;

  @IsString()
  extraOralExamination: string;

  @IsString()
  functionalExamination: string;

  @IsString()
  amountOfIncisorExposure: string;

  @IsString()
  tMJExamination: string;

  @IsString()
  softTissues: string;

  @IsString()
  tongue: string;

  @IsString()
  oralMucosa: string;

  @IsString()
  hardTissues: string;

  @IsString()
  maxillaryArch: string;

  @IsString()
  mandibularArch: string;

  @IsString()
  relationOfMandibularToMaxillaryArch: string;

  @IsString()
  anteroPosteriorRelationship: string;

  @IsString()
  verticalRelationship: string;

  @IsString()
  transverseRelationship: string;

  @IsString()
  intraOralRadiographs: string;
}
