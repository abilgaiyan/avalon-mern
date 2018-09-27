const mongoose = require('mongoose');
const { Schema } = mongoose;
const CustomerSchema = require('./Customer');

//define schema for our customer queries conversation

const customerqueriesSchema = new Schema({
    message: String,
    _customer: {type: Schema.Types.ObjectId, ref: 'customer'},
    displayorder: Number,
    querydate: String,
    status: String,
    createDate: Date,
    updateDate: Date  
    
});
// create modal based on schema
mongoose.model('customerqueries', customerqueriesSchema);