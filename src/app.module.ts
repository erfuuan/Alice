import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TeamModule } from './team/team.module';
import { NewaModule } from './newa/newa.module';
import { NewsModule } from './news/news.module';
import { FileModule } from './file/file.module';
import { HomeModule } from './home/home.module';
import { LunchModule } from './lunch/lunch.module';
import { NewsModule } from './news/news.module';

@Module({
  imports: [UserModule, AuthModule, TeamModule, NewaModule, NewsModule, LunchModule, HomeModule, FileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
