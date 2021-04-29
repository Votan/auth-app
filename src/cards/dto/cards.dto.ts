import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString } from 'class-validator';

export class CreateCardDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  cardname: string
}

export class UpdateCardDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  cardname?: string
}
