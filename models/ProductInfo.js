const mongoose = require('mongoose');
const { Schema } = mongoose;

//define schema for our customer
const productInfoSchema = new Schema({
    ashiProductStatus: String,
    restrictionFrom: String,
    jewelExchangeSignupStatus: String,
    jewelExchangeSignupDate: String,
    jewelExchangePlan: String,
    suppliersActivated: String,
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('productinfo', productInfoSchema, 'productinfo');