import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsModule } from './comments/comments.module';
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
    CommentsModule,
  ],
})
export class AppModule {}
