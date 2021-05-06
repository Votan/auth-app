import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString } from 'class-validator';

export class CreateCardDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  title: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  description: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  position: string;
}

export class UpdateCardDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  title?: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  description: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  position: string;
}
