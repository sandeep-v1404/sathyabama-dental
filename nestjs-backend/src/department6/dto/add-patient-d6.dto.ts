import { IsString } from 'class-validator';

export class AddPatientD6DTO {
  id!: string;

  @IsString()
  chiefComplaint: string;
}
