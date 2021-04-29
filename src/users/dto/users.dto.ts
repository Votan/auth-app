import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  username: string

  @ApiProperty()
  @IsString()
  @IsDefined()
  password: string

  @ApiProperty()
  @IsString()
  @IsDefined()
  email: string
}

export class UpdateUserDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  username?: string

  @ApiProperty()
  @IsString()
  @IsDefined()
  password?: string

  @ApiProperty()
  @IsString()
  @IsDefined()
  email: string
}