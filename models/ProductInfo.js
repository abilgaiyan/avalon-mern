const mongoose = require('mongoose');
const { Schema } = mongoose;

//define schema for our customer
const productInfoSchema = new Schema({
    _ashiProductStatus: { type: Schema.Types.ObjectId, ref: "ashiproductstatus" },
    restrictionFrom: String,
    jewelExchangeSignupStatus: String,
    jewelExchangeSignupDate: Date,
    jewelExchangePlan: String,
    suppliersActivated: String,
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('productinfo', productInfoSchema, 'productinfo');