const mongoose = require('mongoose');
const { Schema } = mongoose;
//const ProductPlanSchema = require("./ProductPlan");

//define schema for our customer
const websiteInfoSchema = new Schema({
    //websitePlan: String,
    _productplan: { type: Schema.Types.ObjectId, ref: "productplan" },
    liveDate: Date,
    holdDate: Date,
    reasontoLeave: String,
    _designeType: { type: Schema.Types.ObjectId, ref: "designetype" },
    responsiveWebsiteReleasedDate: Date,
    shoppingcartStatus: String,
    comments: String,
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('websiteinfo', websiteInfoSchema, 'websiteinfo');