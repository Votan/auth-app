import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Comments {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
  })
  name: string;

  @Column({
    type: 'text',
  })
  body: string;

  @CreateDateColumn()
  createDate: string;

  @UpdateDateColumn()
  updateDate: string;
}
