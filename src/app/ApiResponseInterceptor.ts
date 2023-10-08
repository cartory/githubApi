import {
  Injectable,
  HttpStatus,
  CallHandler,
  NestInterceptor,
  ExecutionContext,
} from '@nestjs/common';

import { Response } from 'express';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ApiResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const http = context.switchToHttp();
    const res = http.getResponse<Response>();

    return next.handle().pipe(
      map((data) => {
        return {
          data,
        };
      }),
      catchError(async (err) => {
        res.status(
          err?.status ?? err?.getStatus() ?? HttpStatus.INTERNAL_SERVER_ERROR,
        );

        return {
          errMessage: err.message,
        };
      }),
    );
  }
}
