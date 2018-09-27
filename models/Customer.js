const mongoose = require('mongoose');
const { Schema } = mongoose;
//const CustomerSchema = require('./Customer');
const AddressSchema = require('./Address');

//define schema for our customer

const customerSchema = new Schema({
    jewelsoftId: String,
    customerName: String,
    websiteUrl: String,
    createDate: Date,
    updateDate: Date,
    address: [AddressSchema],
    customersince:String,
    comment:String,
    plan:{type: Schema.Types.ObjectId, ref: 'ProductPlan'},
});
// create modal based on schema
mongoose.model('customer', customerSchema);