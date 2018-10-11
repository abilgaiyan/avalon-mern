const mongoose = require('mongoose');
const { Schema } = mongoose;
const CustomerSchema = require('./Customer');

//define schema for our customer Telephonic conversation

const customerphonesSchema = new Schema({
    phone: String,
    _customer: { type: Schema.Types.ObjectId, ref: 'customer' },
    displayorder: Number,
    // phonedate: String,
    status: String,
    createDate: Date,
    updateDate: Date
});
// create modal based on schema
mongoose.model('customerphones', customerphonesSchema);