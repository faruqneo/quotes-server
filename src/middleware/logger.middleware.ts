import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, RequestHandler, NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    Logger.log(`New Quotes API Request: ${req.baseUrl+req.url}`);
    next();
  }
}

export const catchAsync = (handler: RequestHandler) => 
(...args: [Request, Response, NextFunction]) => handler(...args).catch(args[2])
