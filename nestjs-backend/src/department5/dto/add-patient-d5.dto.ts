import { IsString } from 'class-validator';

export class AddPatientD5DTO {
  id!: string;

  @IsString()
  chiefComplaint: string;
}
