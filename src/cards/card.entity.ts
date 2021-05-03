import { CardColumn } from 'src/columns/column.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type:'varchar',
    nullable: false
  })
  title: string;

  @Column({
    type:'varchar',
    nullable: false
  })
  description: string;

  @Column({
    type:'varchar',
    nullable: false
  })
  position: string;

  @CreateDateColumn()
  createDate: string;

  @UpdateDateColumn()
  updateDate: string;

  @ManyToOne(type => CardColumn, cardColumn => cardColumn.cards)
  column: CardColumn;
}