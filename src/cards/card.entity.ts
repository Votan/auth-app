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

  @OneToMany(() => Comments, (comments) => comments.card)
  comments: Comments[];
}
