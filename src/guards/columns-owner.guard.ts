import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ColumnsService } from '../columns/columns.service';

@Injectable()
export class ColumnsOwnerGuard implements CanActivate {
  constructor(private readonly columnsService: ColumnsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const columnId = request.params.id;
    const column = await this.columnsService.findOne(columnId);
    const userId = request.user.id;

    if (userId === column.authorId) {
      return true;
    }
  }
}
