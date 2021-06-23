import {
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserAdminDTO {
  @IsString()
  department: string;

  @IsString()
  role: string;

  @IsString()
  @IsOptional()
  @MinLength(10)
  @MaxLength(30)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Password should contain 1 upper case letter, 1 lower case letter, 1 number or special character',
  })
  password: string;
}
