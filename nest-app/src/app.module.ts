import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HelloModule } from 'external-dependency';

@Module({
  imports: [HelloModule],
  controllers: [AppController],
})
export class AppModule {}
