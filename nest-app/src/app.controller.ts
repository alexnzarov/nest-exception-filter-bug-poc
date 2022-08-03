import { Controller, Get, Query } from '@nestjs/common';
import { HelloService } from 'external-dependency';

@Controller()
export class AppController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  sayWorld(@Query('text') text: string): string {
    return this.helloService.sayWorld(text);
  }
}
