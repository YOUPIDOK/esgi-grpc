import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import {GrpcPermissionDeniedException} from 'nestjs-grpc-exceptions';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const call = context.switchToRpc().getContext();
        const authorization = call.internalRepr.get('authorization');

        if (authorization !== undefined) {
            return this.authService.validateToken(authorization[0]);
        } else {
            throw new GrpcPermissionDeniedException('Token required');
        }
    }
}