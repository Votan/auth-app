import { Columns } from 'src/columns/columns.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'varchar',
  })
  password: string;

  @Column({
    type: 'varchar',
  })
  email: string;

  @OneToMany(() => Columns, (columns) => columns.user, {
    onDelete: 'CASCADE',
  })
  columns: Columns[];
}
