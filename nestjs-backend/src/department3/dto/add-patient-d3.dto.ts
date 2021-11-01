import { IsString } from 'class-validator';

export class AddPatientD3DTO {
  id!: string;

  @IsString()
  chiefComplaint: string;

  @IsString()
  historyOfPresentingIllness: string;

  @IsString()
  pastDentalHistory: string;

  @IsString()
  pastMedicalHistory: string;

  @IsString()
  allergiesIfAny: string;

  @IsString()
  extraOralExamination: string;

  @IsString()
  intraOralExamination: string;

  @IsString()
  periodontalStatus: string;

  @IsString()
  provisionalDiagnosis: string;

  @IsString()
  differentialDiagnosis: string;

  @IsString()
  diagnosticTests: string;

  @IsString()
  radiographicInterpretation: string;

  @IsString()
  otherInvestigations: string;

  @IsString()
  diagnosis: string;

  @IsString()
  treatmentAdvised: string;

  @IsString()
  patientMotivation: string;

  @IsString()
  treatmentNotes: string;

  @IsString()
  toothNumber: string;

  @IsString()
  accessCavityPreparationAndPulpExtirpation: string;

  @IsString()
  bioMechanicalPreparation: string;

  @IsString()
  obturation: string;

  @IsString()
  postOperativeRadiograph: string;

  @IsString()
  existingRestorationsAndStatus: string;

  @IsString()
  radiographicPulpExposure: string;

  @IsString()
  laminaDura: string;

  @IsString()
  periapicalRadiolucency: string;

  @IsString()
  periodontalStatus2: string;

  @IsString()
  natureOfRootCanalInInvolvedTooth: string;

  @IsString()
  previousEndodonticTreatment: string;

  @IsString()
  fractureOfTeeth: string;

  @IsString()
  anyOtherAbnormalities: string;
}
