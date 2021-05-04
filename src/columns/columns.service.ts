import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Columns } from './columns.entity';

@Injectable()
export class ColumnsService {
  constructor(
    @InjectRepository(Columns)
    private columnsRepository: Repository<Columns>,
  ) {}

  create(entity: DeepPartial<Columns>) {
    return this.columnsRepository.save(entity);
  }

  findAll(): Promise<Columns[]> {
    return this.columnsRepository.find();
  }

  findOne(id: string): Promise<Columns> {
    return this.columnsRepository.findOne(id);
  }

  update(id: string, entity: Partial<Columns>) {
    return this.columnsRepository.update(id, entity);
  }

  async delete(id: string): Promise<void> {
    await this.columnsRepository.delete(id);
  }
}