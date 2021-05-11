import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { CommentsService } from '../comments/comments.service';

@Injectable()
export class CommentsOwnerGuard implements CanActivate {
  constructor(private readonly commentsService: CommentsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const commentId = request.params.id;
    const comment = await this.commentsService.findOne(commentId);
    const userId = request.user.id;

    if (userId === comment.authorId) {
      return true;
    }
  }
}
