import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, passowrd: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);
    // console.log(email);
    if (user && bcrypt.compare(user.password, passowrd)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...rest } = user;
      console.log(rest);
      return rest;
    }
    return null;
  }
}
