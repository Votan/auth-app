import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Card } from './card.entity';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card)
    private cardsRepository: Repository<Card>,
  ) {}

  create(entity: DeepPartial<Card>) {
    return this.cardsRepository.save(entity);
  }

  findAll(): Promise<Card[]> {
    return this.cardsRepository.find();
  }

  findOne(id: string): Promise<Card> {
    return this.cardsRepository.findOne(id);
  }

  update(id: string, entity: Partial<Card>) {
    return this.cardsRepository.update(id, entity);
  }

  async delete(id: string): Promise<void> {
    await this.cardsRepository.delete(id);
  }
}