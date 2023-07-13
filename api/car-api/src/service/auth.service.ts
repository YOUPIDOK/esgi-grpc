import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import {GrpcPermissionDeniedException} from 'nestjs-grpc-exceptions';

@Injectable()
export class AuthService {
    private readonly secretKey: string = process.env.SECRET_KEY;

    generateToken(payload: any): string {
        return jwt.sign(payload, this.secretKey);
    }

    validateToken(token: string): boolean {
        try {
            token = token.replace('Bearer ', '');
            jwt.verify(token, this.secretKey);
            return true;
        } catch (error) {
            throw new GrpcPermissionDeniedException('Invalid token');
            return false;
        }
    }
}