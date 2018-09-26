const mongoose = require('mongoose');
const { Schema } = mongoose;
//const CustomerSchema = require('./Customer');

//define schema for our customer

const customerphonesSchema = new Schema({
    message: String,
    customerid: String,
    displayorder:Number,
    phonedate:String,
    createDate: Date,
    updateDate: Date,    
    status:String
});
// create modal based on schema
mongoose.model('customerphones', customerphonesSchema);