const mongoose = require('mongoose');
const { Schema } = mongoose;
const ProductPlanSchema = require("./ProductPlan");

//define schema for our customer
const websiteInfoSchema = new Schema({
    //websitePlan: String,
    liveDate: Date,
    holdDate: Date,
    reasontoLeave: String,
    designeType: Number,
    responsiveWebsiteReleasedDate: Date,
    shoppingcartStatus: String,
    comments: String,
    _productplan: { type: Schema.Types.ObjectId, ref: "ProductPlan" },
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('websiteinfo', websiteInfoSchema);