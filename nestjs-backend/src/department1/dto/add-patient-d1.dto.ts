import { IsString } from 'class-validator';

export class AddPatientD1DTO {
  id?: number;

  @IsString()
  maritalStatus: string;
}
