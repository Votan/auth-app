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
import { CreateUserDto, UpdateUserDto } from './users.dto';
import { UsersService } from './users.service';
import { AccountOwnerGuard } from '../guards/account-owner.guard';

@ApiBearerAuth()
@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id/columns')
  findAllUserColumns(@Param('id') id: string) {
    return this.usersService.findAllUserColumns(id);
  }

  @Get(':id/columns/:id')
  findUserColumn(@Param('id') id: string) {
    return this.usersService.findUserColumn(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, AccountOwnerGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Patch(':userId/columns/:columnId')
  updateUserColumn(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateUserColumn(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard, AccountOwnerGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }

  @Delete(':userId/columns/:columnId')
  deleteUserColumn(@Param('columnId') id: string) {
    return this.usersService.deleteUserColumn(id);
  }
}
