import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ColumnsService } from './columns.service';
import { CreateColumnDto, UpdateColumnDto } from './columns.dto';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('columns')
@Controller('columns')
export class ColumnsController {
  constructor(private readonly columnsService: ColumnsService) {}

  @Post()
  create(@Body() createColumnDto: CreateColumnDto) {
    return this.columnsService.create(createColumnDto);
  }

  @Get()
  findAll() {
    return this.columnsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.columnsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateColumDto: UpdateColumnDto) {
    return this.columnsService.update(id, updateColumDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.columnsService.delete(id);
  }
}