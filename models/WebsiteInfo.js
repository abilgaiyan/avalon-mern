const mongoose = require('mongoose');
const { Schema } = mongoose;
//const ProductPlanSchema = require("./ProductPlan");

//define schema for our customer
const websiteInfoSchema = new Schema({
    //websitePlan: String,
    _productplan: { type: Schema.Types.ObjectId, ref: "productplan" },
    liveDate: String,
    holdDate: String,
    reasontoLeave: String,
    _designeType: { type: Schema.Types.ObjectId, ref: "designetype" },
    responsiveWebsiteReleasedDate: String,
    shoppingcartStatus: String,
    comments: String,
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('websiteinfo', websiteInfoSchema, 'websiteinfo');