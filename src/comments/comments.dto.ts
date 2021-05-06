import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsString } from "class-validator";

export class CreateCommentDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  name: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  body: string;
}

export class UpdateCommentDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  name?: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  body?: string;
}