import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from './user.entity';

export const GetUser = createParamDecorator(
  (data: string, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    if (data) {
      if (
        data === req.user.department.toString() &&
        req.user.role.toString() === 'Authorized'
      ) {
        console.log('Authorized');

        delete req.user.password;
        return req.user;
      }
      throw new UnauthorizedException("You don't have sufficient Permissions");
    } else {
      console.log('Authorized:', req.user);
      delete req.user.password;
      return req.user;
    }
  },
);
