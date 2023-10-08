import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { GithubService } from './github/github.service';
import { GithubController } from './github/github.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [GithubService],
  controllers: [GithubController],
})
export class AppModule {}
