import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type:'text'})
  userName: string;

  @Column({type:'text'})
  password: string;

  @Column({ default: true })
  isActive: boolean;
}