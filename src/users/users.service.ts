import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(entity: DeepPartial<User>) {
    return this.usersRepository.save({
      ...entity,
      password: await bcrypt.hash(entity.password, 10),
    });
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(email: string): Promise<User> {
    return this.usersRepository.findOne({ email: email });
  }

  update(id: string, entity: Partial<User>) {
    return this.usersRepository.update(id, entity);
  }

  async delete(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
