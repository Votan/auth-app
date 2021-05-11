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
import { ColumnsService } from './columns.service';
import { CreateColumnDto, UpdateColumnDto } from './columns.dto';
import { CurrentUser } from '../guards/current-user.decorator';
import { User } from '../users/user.entity';
import { ColumnsOwnerGuard } from '../guards/columns-owner.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('columns')
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

  @Get(':id')
  @UseGuards(ColumnsOwnerGuard)
  findOne(@Param('id') id: string) {
    return this.columnsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(ColumnsOwnerGuard)
  update(@Param('id') id: string, @Body() updateColumnDto: UpdateColumnDto) {
    return this.columnsService.update(id, updateColumnDto);
  }

  @Delete(':id')
  @UseGuards(ColumnsOwnerGuard)
  delete(@Param('id') id: string) {
    return this.columnsService.delete(id);
  }
}
