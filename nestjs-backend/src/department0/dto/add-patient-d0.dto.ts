import { IsBoolean, IsString } from 'class-validator';

export class AddPatientD0DTO {
  id!: string;

  @IsString()
  chiefComplaint: string;

  @IsString()
  historyOfPresentingIllness: string;

  @IsString()
  medicalHistory: string;

  @IsString()
  surgicalHistory: string;

  @IsString()
  dentalHistory: string;

  @IsString()
  personalHistory: string;

  @IsString()
  diet: string;

  @IsString()
  personalHabits: string;

  @IsString()
  familyHistory: string;

  @IsString()
  maritalHistory: string;

  @IsString()
  stature: string;

  @IsString()
  appearance: string;

  @IsString()
  built: string;

  @IsString()
  nourishment: string;

  @IsString()
  structuralAlterationsDeformities: string;

  @IsString()
  hair: string;

  @IsString()
  skin: string;

  @IsString()
  pallor: string;

  @IsString()
  icterus: string;

  @IsString()
  pedalEdema: string;

  @IsString()
  cyanosis: string;

  @IsString()
  bP: string;

  @IsString()
  respiratoryRate: string;

  @IsString()
  pulseRate: string;

  @IsString()
  temperature: string;

  @IsString()
  cvs: string;

  @IsString()
  rs: string;

  @IsString()
  git: string;

  @IsString()
  cnd: string;

  @IsString()
  urogenitalSystem: string;

  @IsString()
  facialSymmetry: string;

  @IsString()
  earNoseEye: string;

  @IsString()
  tmj: string;

  @IsString()
  lips: string;

  @IsString()
  maxillarySinusTenderness: string;

  @IsString()
  lymphNodes: string;

  @IsString()
  intraOralExamination: string;

  @IsString()
  openingOfTheMouth: string;

  @IsString()
  interincisalDistance: string;

  @IsString()
  jawDeviation: string;

  @IsString()
  teethNumber: string;

  @IsString()
  teethSize: string;

  @IsString()
  teethShape: string;

  @IsString()
  teethColour: string;

  @IsString()
  teethMissingTooth: string;

  @IsString()
  teethRestoredTooth: string;

  @IsString()
  teethStains: string;

  @IsString()
  teethCaries: string;

  @IsString()
  teethAttrition: string;

  @IsString()
  teethAbrasion: string;

  @IsString()
  teethErosion: string;

  @IsString()
  teethMobility: string;

  @IsString()
  teethRootStumps: string;

  @IsString()
  teethFracture: string;

  @IsString()
  teethRetainedDeciduous: string;

  @IsString()
  teethPartiallyErupted: string;

  @IsString()
  teethDevelopmentalAnomalies: string;

  @IsString()
  gingivaColour: string;

  @IsString()
  gingivaContour: string;

  @IsString()
  gingivaConsistency: string;

  @IsString()
  gingivaCalculus: string;

  @IsString()
  gingivalRecession: string;

  @IsString()
  gingivaPeriodontalPocket: string;

  @IsString()
  alveolarMucosa: string;

  @IsString()
  buccalMucosaColour: string;

  @IsString()
  buccalMucosaConsistency: string;

  @IsString()
  buccalMucosaOpeningOfStensonSDuct: string;

  @IsString()
  labialMucosa: string;

  @IsString()
  palateHardPalate: string;

  @IsString()
  palateSoftPalate: string;

  @IsString()
  tongueSize: string;

  @IsString()
  tongueMovement: string;

  @IsString()
  tongueAttachment: string;

  @IsString()
  tongueDorsalSurface: string;

  @IsString()
  tongueVentralSurface: string;

  @IsString()
  tongueEdge: string;

  @IsString()
  tongueLateralSurface: string;

  @IsString()
  tonsils: string;

  @IsString()
  floorOfTheMouth: string;

  @IsString()
  pillarsOfTheFauces: string;

  @IsString()
  inspection: string;

  @IsString()
  palpation: string;

  @IsString()
  summary: string;

  @IsString()
  provisionalDiagonosis: string;

  @IsString()
  investigations: string;

  @IsString()
  finalDiagonosis: string;

  @IsString()
  treatmentPlan: string;

  @IsBoolean()
  referToD1: boolean;

  @IsBoolean()
  referToD2: boolean;

  @IsBoolean()
  referToD3: boolean;

  @IsBoolean()
  referToD4: boolean;

  @IsBoolean()
  referToD5: boolean;

  @IsBoolean()
  referToD6: boolean;

  @IsBoolean()
  referToD7: boolean;

  @IsBoolean()
  referToD8: boolean;
}
