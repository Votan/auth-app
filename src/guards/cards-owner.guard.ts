import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { CardsService } from '../cards/cards.service';

@Injectable()
export class CardsOwnerGuard implements CanActivate {
  constructor(private readonly cardsService: CardsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const cardId = request.params.id;
    const card = await this.cardsService.findOne(cardId);
    const userId = request.user.id;

    if (userId === card.authorId) {
      return true;
    }
  }
}
