const mongoose = require('mongoose');
const { Schema } = mongoose;
//const ProductPlanSchema = require('./ProductPlan');


//define schema for our customer

const billingInfoSchema = new Schema({

    //websitePlan: { type: Schema.Types.ObjectId, ref: "ProductPlan" },
    //websitePlan: String,
    //websitePlan: { type: String, default: "Bronze" },
    //hostingPaymentType: String,
    _productPlan: { type: Schema.Types.ObjectId, ref: "productplan" },
    websiteSetupAmount: Number,
    buyingGroupDiscount: Number,
    setupAmountReceived: Number,
    setupAmountPending: Number,
    hostingAmount: { type: Schema.Types.ObjectId, ref: "hostingamount" },
    comments: String,
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('billinginfo', billingInfoSchema, 'billinginfo');