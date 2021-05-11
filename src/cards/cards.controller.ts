import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateCardDto, UpdateCardDto } from './cards.dto';
import { CardsService } from './cards.service';
import { CurrentUser } from '../guards/current-user.decorator';
import { User } from '../users/user.entity';
import { CardsOwnerGuard } from '../guards/cards-owner.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('cards')
@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  create(@Body() createUserDto: CreateCardDto, @CurrentUser() user: User) {
    return this.cardsService.create(createUserDto, user);
  }

  @Get()
  @UseGuards(CardsOwnerGuard)
  findAll() {
    return this.cardsService.findAll();
  }

  @Get(':id')
  @UseGuards(CardsOwnerGuard)
  findOne(@Param('id') id: string) {
    return this.cardsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(CardsOwnerGuard)
  update(@Param('id') id: string, @Body() updateCardDto: UpdateCardDto) {
    return this.cardsService.update(id, updateCardDto);
  }

  @Delete(':id')
  @UseGuards(CardsOwnerGuard)
  delete(@Param('id') id: string) {
    return this.cardsService.delete(id);
  }
}
