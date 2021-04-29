import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

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
}