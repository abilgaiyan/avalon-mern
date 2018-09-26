const mongoose = require('mongoose');
const { Schema } = mongoose;
//const CustomerSchema = require('./Customer');

//define schema for our customer Email conversation

const customeremailSchema = new Schema({
    subject: String,
    message: String,
    _customer: {type: Schema.Types.ObjectId, ref: 'customer'},
    displayorder: Number,
    emaildate: Date,
    createDate: Date,
    updateDate: Date,    
    status: String
});
// create modal based on schema
mongoose.model('customeremail', customeremailSchema);