import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { Quote } from './interfaces/qutoe.interface';
import { ApiTags, ApiParam } from '@nestjs/swagger';

@ApiTags('quote')
@Controller('quote')
export class QuotesController {

    constructor(private qutoeService: QuotesService) { }

    @Get()
    async getQuotes(): Promise<Quote[]> {
        return await this.qutoeService.getQuotes()
    }

    @ApiParam({ name: 'id' })
    @Get(':id')
    async getQuote(@Param('id') id: string): Promise<Quote> {
        return await this.qutoeService.getQuote(id);
    }

    @Post()
    async createQuotes(@Body() createQuoteDto: CreateQuoteDto): Promise<Quote> {
        return await this.qutoeService.createQutoe(createQuoteDto);
    }

    @ApiParam({ name: 'id' })
    @Put(':id')
    async updateQuotes(@Param('id') id: string, @Body() updateQuoteDto: CreateQuoteDto): Promise<Quote> {
        return await this.qutoeService.UpdateQuoteDto(id, updateQuoteDto);
    }

    @ApiParam({ name: 'id' })
    @Delete(':id')
    async deleteQuotes(@Param('id') id: string): Promise<Quote> {
        return await this.qutoeService.deleteQuoteDto(id);
    }
}
