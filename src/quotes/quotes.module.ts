import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import * as helmet from 'helmet';
import * as cors from 'cors';
import { QuoteSchema } from './model/quotes.model';
import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Quote', schema: QuoteSchema }])],
    controllers: [QuotesController],
    providers: [QuotesService],
})
export class QuotesModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(cors(), helmet(), LoggerMiddleware)
            .forRoutes('quotes')
    }
}
