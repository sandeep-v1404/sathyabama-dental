import { IsString } from 'class-validator';

export class AddPatientD4DTO {
  id!: string;

  @IsString()
  chiefComplaint: string;
}
