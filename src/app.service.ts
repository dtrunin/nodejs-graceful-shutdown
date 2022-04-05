import { Injectable } from '@nestjs/common';
import { delay, Observable, of } from 'rxjs';

@Injectable()
export class AppService {
  getHello(): Observable<string> {
    return of('Hello World!').pipe(delay(3000));
  }
}
