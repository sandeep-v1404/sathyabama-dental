import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  showRes() {
    return "You're unauthorized to Access this page";
  }
}
