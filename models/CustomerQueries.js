const mongoose = require('mongoose');
const { Schema } = mongoose;
//const CustomerSchema = require('./Customer');

//define schema for our customer

const customerqueriesSchema = new Schema({
    message: String,
    customerid: String,
    displayorder:Number,
    querydate:String,
    createDate: Date,
    updateDate: Date,    
    status:String
});
// create modal based on schema
mongoose.model('customerqueries', customerqueriesSchema);