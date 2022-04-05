import { Module, OnApplicationShutdown } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { timer } from 'rxjs';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnApplicationShutdown {
  onApplicationShutdown(signal?: string): any {
    if (signal) {
      console.info(`Received shut down signal ${signal}`);
    } else {
      console.info(`Application shut down`);
    }
    // console.info writes to process.stdout
    // Writes to process.stdout in Node.js are sometimes asynchronous and may occur over multiple ticks of the Node.js event loop
    // https://nodejs.org/api/process.html#processexitcode
    // Wait a bit to finish writing to process.stdout
    return timer(100).toPromise();
  }
}
