const mongoose = require('mongoose');
const { Schema } = mongoose;
const CustomerSchema = require('./Customer');

//define schema for our customer Email conversation

const customeremailSchema = new Schema({
    subject: String,
    comments: String,
    _customer: {type: Schema.Types.ObjectId, ref: 'customer'},
    displayorder: {type: Number, default:0},
    emaildate: Date,
    status: String,
    createDate: Date,
    updateDate: Date  
   
});
// create modal based on schema
mongoose.model('customeremail', customeremailSchema);