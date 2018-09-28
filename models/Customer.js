const mongoose = require('mongoose');
const { Schema } = mongoose;
//const CustomerSchema = require('./Customer');
const AddressSchema = require('./Address');
const ProductSchema = require('./Product');
const ProductPlanSchema = require('./ProductPlan');


//define schema for our customer

const customerSchema = new Schema({
    jewelsoftId: String,
    customerName: String,
    websiteUrl: String,
    _address: {type: Schema.Types.ObjectId, ref: 'address'},
    _product: {type: Schema.Types.ObjectId, ref: 'product'},
    _plan: {type: Schema.Types.ObjectId, ref: 'ProductPlan'},
    customersince: String,
    comment: String,
    createDate: Date,
    updateDate: Date
});
// create modal based on schema
mongoose.model('customer', customerSchema);