import { CardColumn } from 'src/columns/column.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type:'varchar',
    nullable: false
  })
  username: string;

  @Column({
    type:'varchar',
    nullable: false
  })
  password: string;

  @Column({
    type:'varchar',
    nullable: false
  })
  email: string;

  @OneToMany(type => CardColumn, cardColumn => cardColumn.user)
  columns: CardColumn[];
}