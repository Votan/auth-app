import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { CardColumn } from './column.entity';

@Injectable()
export class ColumnsService {
  constructor(
    @InjectRepository(CardColumn)
    private cardsRepository: Repository<CardColumn>,
  ) {}

  create(entity: DeepPartial<CardColumn>) {
    return this.cardsRepository.save(entity);
  }

  findAll(): Promise<CardColumn[]> {
    return this.cardsRepository.find();
  }

  findOne(id: string): Promise<CardColumn> {
    return this.cardsRepository.findOne(id);
  }

  update(id: string, entity: Partial<CardColumn>) {
    return this.cardsRepository.update(id, entity);
  }

  async delete(id: string): Promise<void> {
    await this.cardsRepository.delete(id);
  }
}