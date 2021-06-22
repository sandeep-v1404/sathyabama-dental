import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from './user.entity';

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    if (
      data &&
      data !== req.user.department &&
      req.user.role !== 'Authorized'
    ) {
      throw new UnauthorizedException("You don't have sufficient Permissions");
    }
    delete req.user.password;
    return req.user;
  },
);
