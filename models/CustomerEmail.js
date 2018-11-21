const mongoose = require('mongoose');
const { Schema } = mongoose;
// const CustomerSchema = require('./Customer');

//define schema for our customer Email conversation

const customeremailSchema = new Schema({
    subject: String,
    text: String,
    from: String,
    to: String,
    type: String,
    hasattachment: String,
    // _customer: { type: Schema.Types.ObjectId, ref: 'customer' },
    html: String,
    displayorder: { type: Number, default: 0 },
    emaildate: Date,
    synced: String,
    status: String,
    createDate: Date,
    updateDate: Date,
    customerid: String
});
// create modal based on schema
mongoose.model('customeremails', customeremailSchema);