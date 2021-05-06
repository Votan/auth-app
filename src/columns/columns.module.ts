import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColumnsService } from './columns.service';
import { ColumnsController } from './columns.controller';
import { Columns } from './columns.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Columns])],
  providers: [ColumnsService],
  exports: [ColumnsService],
  controllers: [ColumnsController],
})
export class ColumnsModule {}
