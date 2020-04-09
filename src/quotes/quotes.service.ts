import { Injectable } from '@nestjs/common';
import { Quote } from './interfaces/qutoe.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class QuotesService {

    constructor(@InjectModel('Quote') private readonly quoteModel: Model<Quote>) { }
    // quotes: Quote[] = [
    //     {
    //         id: "0",
    //         title: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    //         author: "Marilyn Monroe"
    //     },
    //     {
    //         id: "1",
    //         title: "Be yourself; everyone else is already taken.",
    //         author: "Oscar Wilde"
    //     },
    //     {
    //         id: "2",
    //         title: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    //         author: "Albert Einstein"
    //     },
    //     {
    //         id: "3",
    //         title: "So many books, so little time.",
    //         author: "Frank Zappa"
    //     },
    //     {
    //         id: "4",
    //         title: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    //         author: "Bernard M. Baruch"
    //     }
    // ];

    async getQuotes(): Promise<Quote[]> {
        return await this.quoteModel.find();
    }

    async getQuote(id: string): Promise<Quote> {
        return await this.quoteModel.findById(id);
    }

    async UpdateQuoteDto(id: string, qutoe: Quote): Promise<Quote> {
        return await this.quoteModel.findByIdAndUpdate(id, qutoe, { new: true })

    }

    async deleteQuoteDto(id: string): Promise<Quote[]> {
        return await this.quoteModel.findByIdAndRemove(id)
    }

    async createQutoe(qutoe: Quote): Promise<Quote> {
        return await this.quoteModel.create(qutoe);
    }
}
