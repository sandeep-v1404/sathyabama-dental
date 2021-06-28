import { IsString } from 'class-validator';

export class AddPatientD9DTO {
  id!: string;

  @IsString()
  chiefComplaint: string;
}
