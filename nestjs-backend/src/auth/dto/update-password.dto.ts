import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class UpdatePasswordDTO {
  @IsString()
  oldPassword: string;

  @IsString()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'password should contain 1 upper case letter, 1 lower case letter, 1 number or special character',
  })
  @MinLength(10)
  @MaxLength(30)
  password: string;
}
