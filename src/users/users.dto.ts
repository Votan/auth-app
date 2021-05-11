import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  name: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  password: string;

  @ApiProperty()
  @IsEmail()
  @IsDefined()
  email: string;
}

export class UpdateUserDto {
  @ApiProperty()
  @IsString()
  name?: string;

  @ApiProperty()
  @IsString()
  password?: string;

  @ApiProperty()
  @IsEmail()
  email?: string;
}
