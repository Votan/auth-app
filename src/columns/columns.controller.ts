import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ColumnsService } from './columns.service';
import { CreateColumnDto } from './columns.dto';
import { CurrentUser } from '../guards/current-user.decorator';
import { User } from '../users/user.entity';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Columns')
@Controller('columns')
export class ColumnsController {
  constructor(private readonly columnsService: ColumnsService) {}

  @Post()
  create(@Body() createColumnDto: CreateColumnDto, @CurrentUser() user: User) {
    return this.columnsService.create(createColumnDto, user);
  }

  @Get()
  findAll() {
    return this.columnsService.findAll();
  }
}
