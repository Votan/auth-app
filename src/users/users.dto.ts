import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  userName: string

  @ApiProperty()
  @IsString()
  @IsDefined()
  password: string
}

export class UpdateUserDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  userName?: string

  @ApiProperty()
  @IsString()
  @IsDefined()
  password?: string
}