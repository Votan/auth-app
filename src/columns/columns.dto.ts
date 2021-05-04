import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString } from 'class-validator';

export class CreateColumnDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  title: string

  @ApiProperty()
  @IsString()
  @IsDefined()
  authorId: string
}

export class UpdateColumnDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  title?: string
}
