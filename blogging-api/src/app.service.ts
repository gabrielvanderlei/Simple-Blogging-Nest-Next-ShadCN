import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getBlogServer(): string {
    return 'Blog server running';
  }
}
