import { Columns } from 'src/columns/columns.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 100,
    type: 'varchar',
  })
  name: string;

  @Column({
    length: 100,
    type: 'varchar',
  })
  password: string;

  @Column({
    length: 100,
    type: 'varchar',
  })
  email: string;

  @OneToMany(() => Columns, (columns) => columns.user, {
    onDelete: 'CASCADE',
  })
  columns: Columns[];
}
