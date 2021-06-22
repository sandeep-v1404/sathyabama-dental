import { IsNotEmpty } from 'class-validator';

export class CreatePatientDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  sex: string;

  @IsNotEmpty()
  occupation: string;

  @IsNotEmpty()
  contactNumber: string;

  @IsNotEmpty()
  residentialAddress: string;
}
