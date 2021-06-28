import { IsString } from 'class-validator';

export class AddPatientD7DTO {
  id!: string;

  @IsString()
  chiefComplaint: string;
}
