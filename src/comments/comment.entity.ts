import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Card } from '../cards/card.entity';

@Entity()
export class Comments {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 100,
    type: 'text',
  })
  authorId: string;

  @Column({
    length: 255,
    type: 'text',
  })
  body: string;

  @CreateDateColumn()
  createDate: string;

  @UpdateDateColumn()
  updateDate: string;

  @ManyToOne(() => Card, (card) => card.comments, { onDelete: 'CASCADE' })
  public card: Card;
}
