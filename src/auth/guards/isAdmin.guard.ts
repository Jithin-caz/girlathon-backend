import { ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class isAdminGuard {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (
      request.isAuthenticated() &&
      (request.session.passport.user.role === 'admin' ||
        request.session.passport.user.role === 'superadmin')
    ) {
      return true;
    } else if (
      request.isAuthenticated() &&
      request.session.passport.user.role === 'user'
    ) {
      throw new Error(
        JSON.stringify({
          message: 'You are not authorized to access this route',
        }),
      );
    } else {
      throw new Error(JSON.stringify({ message: 'You are not authenticated' }));
    }
  }
}
