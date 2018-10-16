const mongoose = require('mongoose');
const { Schema } = mongoose;
const ProductPlanSchema = require('./ProductPlan');


//define schema for our customer

const billingInfoSchema = new Schema({
    websiteSetupAmount: Number,
    buyingGroupDiscount: Number,
    setupAmountReceived: Number,
    setupAmountPending: Number,
    hostingPaymentType: String,
    hostingAmount: Number,
    _productPlan: { type: Schema.Types.ObjectId, ref: "ProductPlan" },
    comments: String,
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('billinginfo', billingInfoSchema);