import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MockAppService } from './mock-app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MockAppService],
})
export class AppModule {}
