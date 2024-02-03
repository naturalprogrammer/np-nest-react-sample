import {Injectable} from '@nestjs/common';
import {add} from "my-common/dist/my-math";

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World! ${add(1, 5)}`;
  }
}
