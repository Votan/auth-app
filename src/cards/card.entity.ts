import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Columns } from '../columns/columns.entity';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  title: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  description: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  position: string;

  @CreateDateColumn()
  createDate: string;

  @UpdateDateColumn()
  updateDate: string;

  @ManyToOne((type) => Columns, (columns) => columns.cards)
  columns: Columns;
}
