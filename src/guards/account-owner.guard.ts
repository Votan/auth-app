import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AccountOwnerGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const userId = request.user.id;
    const accountOwnerId = request.params.id;

    if (userId === accountOwnerId) {
      return true;
    }
  }
}
