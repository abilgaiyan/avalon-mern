const mongoose = require('mongoose');
const { Schema } = mongoose;
const ProductPlanSchema = require('./ProductPlan');


//define schema for our customer

const billingInfoSchema = new Schema({
    //_productPlan: { type: Schema.Types.ObjectId, ref: "ProductPlan" },
    //websitePlan: String,
    websitePlan: { type: String, default: "Bronze" },
    websiteSetupAmount: Number,
    buyingGroupDiscount: Number,
    setupAmountReceived: Number,
    setupAmountPending: Number,
    //hostingPaymentType: String,
    hostingAmount: { type: String, default: "$ 69" },
    comments: String,
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('billinginfo', billingInfoSchema, 'billinginfo');