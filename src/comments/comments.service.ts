import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeepPartial, Repository } from "typeorm";
import { CreateCommentDto } from "./comments.dto";

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
  ) {}

  async create(entity: Partial<Comment>) {
    return await this.commentsRepository.save(entity);
  }

  findAll(): Promise<Comment[]> {
    return this.commentsRepository.find();
  }

  findOne(id: string): Promise<Comment> {
    return this.commentsRepository.findOne(id);
  }

  update(id: string, entity: Partial<Comment>) {
    return this.commentsRepository.update(id, entity);
  }

  async delete(id: string): Promise<void> {
    await this.commentsRepository.delete(id);
  }
}