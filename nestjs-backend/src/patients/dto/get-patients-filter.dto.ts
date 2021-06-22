import { IsOptional, IsString } from 'class-validator';

export class GetPatientsFilterDto {
  @IsOptional()
  @IsString()
  search?: string;
}
