import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Card } from '../cards/card.entity';

@Entity()
export class Columns {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 100,
    type: 'varchar',
  })
  authorId: User['id'];

  @Column({
    length: 100,
    type: 'varchar',
  })
  name: string;

  @CreateDateColumn()
  createDate: string;

  @UpdateDateColumn()
  updateDate: string;

  @ManyToOne(() => User, (user) => user.columns, { onDelete: 'CASCADE' })
  user: User;

  @OneToMany(() => Card, (card) => card.columns, { onDelete: 'CASCADE' })
  cards: Card[];
}
