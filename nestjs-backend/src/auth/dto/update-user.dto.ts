import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDTO {
  @IsString()
  @IsNotEmpty()
  username: string;
}
