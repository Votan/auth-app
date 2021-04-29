import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type:'varchar',
    nullable: false
  })
  cardname: string;
}