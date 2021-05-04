import { Columns } from 'src/columns/columns.entity';
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

  @OneToMany(type => Columns, columns => columns.user)
  columns: Columns[];
}