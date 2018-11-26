const mongoose = require('mongoose');
const { Schema } = mongoose;

//define schema for our customer queries conversation

const customerqueriesSchema = new Schema({
    qrysubject: String,
    qrytext: String,
    qryrelated: String,
    _customer: { type: Schema.Types.ObjectId, ref: 'customer' },
    displayorder: Number,
    querydate: String,
    status: String,
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('customerqueries', customerqueriesSchema, 'customerqueries');