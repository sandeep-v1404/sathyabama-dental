import { IsString } from 'class-validator';

export class AddPatientD8DTO {
  id!: string;

  @IsString()
  chiefComplaint: string;

  @IsString()
  historyOfPresentIllness: string;

  @IsString()
  habits: string;

  @IsString()
  clinicalFeatures: string;

  @IsString()
  aspiration: string;

  @IsString()
  radiograph: string;

  @IsString()
  surgicalDetails: string;

  @IsString()
  typeOfBiopsy: string;

  @IsString()
  macroscopicFeatures: string;

  @IsString()
  provisionalDiagnosis: string;

  @IsString()
  incisionalBiopsyDiagnosis: string;

  @IsString()
  macroscopicFeatures2: string;

  @IsString()
  histopathology: string;

  @IsString()
  diagnosis: string;

  @IsString()
  furtherInvestigation: string;

  @IsString()
  chiefComplaint2: string;

  @IsString()
  historyOfPresentIllness2: string;

  @IsString()
  habitsDuration: string;

  @IsString()
  clinicalFeatures2: string;

  @IsString()
  aspiration2: string;

  @IsString()
  radiograph2: string;

  @IsString()
  surgicalDetails2: string;

  @IsString()
  typeOfBiopsy2: string;

  @IsString()
  siteOfBiopsy: string;

  @IsString()
  natureOfTissue: string;

  @IsString()
  provisionalDiagnosis2: string;
}
