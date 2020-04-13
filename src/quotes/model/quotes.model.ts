import * as mongoose from 'mongoose';

export const QuoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter the title'],
        trim: true
    },
    author: {
        type: String,
        required: [true, 'Please enter the author'],
        trim: true
    }
})