import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Columns } from '../columns/columns.entity';
import { Comments } from '../comments/comment.entity';

@Entity()
export class Card {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
  })
  authorId: string;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'varchar',
  })
  description: string;

  @Column({
    type: 'varchar',
  })
  position: string;

  @CreateDateColumn()
  createDate: string;

  @UpdateDateColumn()
  updateDate: string;

  @ManyToOne(() => Columns, (columns) => columns.cards, {
    onDelete: 'CASCADE',
  })
  columns: Columns;

  @OneToMany(() => Comments, (comments) => comments.card, {
    onDelete: 'CASCADE',
  })
  comments: Comments[];
}
