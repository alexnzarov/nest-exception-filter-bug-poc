import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  public sayWorld(text: string) {
    if (text !== 'world') {
      throw new HttpException(`'${text}' !== 'world'`, HttpStatus.BAD_REQUEST);
    }

    return 'hello world';
  }
}
