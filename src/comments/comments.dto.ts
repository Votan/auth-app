import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty()
  @IsString()
  body: string;
}

export class UpdateCommentDto {
  @ApiProperty()
  @IsString()
  body?: string;
}
