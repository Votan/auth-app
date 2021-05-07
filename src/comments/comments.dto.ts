import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  body: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  authorId: string;
}

export class UpdateCommentDto {
  @ApiProperty()
  @IsString()
  body?: string;
}
