import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardsModule } from './cards/cards.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'platform',
      password: 'platform',
      database: 'platform',
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    CardsModule,
  ],
})
export class AppModule {}
