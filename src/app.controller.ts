import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { exec } from 'child_process';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/shutdown')
  shutdown(): void {
    exec('shutdown /s');
  }
  @Get('/sleep')
  sleep(): void {
    exec('rundll32.exe powrprof.dll,SetSuspendState 0,1,0');
  }
}
