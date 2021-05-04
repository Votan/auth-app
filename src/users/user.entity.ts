import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: false
  })
  username: string;

  @Exclude()
  @Column({
    type: 'varchar',
    nullable: false
  })
  password: string;

  @Column({
    type: 'varchar',
    nullable: false
  })
  email: string;

  @CreateDateColumn()
  createDate: string;

  @UpdateDateColumn()
  updateDate: string;
}