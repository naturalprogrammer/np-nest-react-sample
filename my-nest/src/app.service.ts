import {Injectable} from '@nestjs/common';
import {add, Profile} from "my-common/dist/my-math";

@Injectable()
export class AppService {
  getHello(): string {
    const profile: Profile = {name: "Sanjay"};
    return `Hello World ${profile.name}! ${add(1, 5)}`;
  }
}
