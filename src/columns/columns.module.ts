import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColumnsService } from './columns.service';
import { ColumnsController } from './columns.controller';
import { CardColumn } from './column.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardColumn])],
  providers: [ColumnsService],
  exports: [ColumnsService],
  controllers: [ColumnsController],
})
export class ColumnsModule {}