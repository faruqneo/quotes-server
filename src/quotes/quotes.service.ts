import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Quote } from './interfaces/qutoe.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class QuotesService {

    constructor(@InjectModel('Quote') private readonly quoteModel: Model<Quote>) { }

    async getQuotes(): Promise<Quote[]> {
        try {
            return await this.quoteModel.find();
        } catch (error) {
            throw new HttpException('Quotes are not found', HttpStatus.NOT_FOUND);
        }
    }

    async getQuote(id: string): Promise<Quote> {
        try {
            return await this.quoteModel.findById(id);
        } catch (error) {
            throw new HttpException('Quote is not found', HttpStatus.NOT_FOUND);
        }
    }

    async UpdateQuoteDto(id: string, qutoe: Quote): Promise<Quote> {
        try {
            return await this.quoteModel.findByIdAndUpdate(id, qutoe, { new: true });
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async deleteQuoteDto(id: string): Promise<Quote> {
        try {
            return await this.quoteModel.findByIdAndRemove(id);
        } catch (error) {
            throw new HttpException('Quote is not found.', HttpStatus.NO_CONTENT);
        }
    }

    async createQutoe(qutoe: Quote): Promise<Quote> {
        try {
            return await this.quoteModel.create(qutoe);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
}
