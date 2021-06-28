import { IsString } from 'class-validator';

export class AddPatientD3DTO {
  id!: string;

  @IsString()
  chiefComplaint: string;
}
