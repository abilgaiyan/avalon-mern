const mongoose = require('mongoose');
const { Schema } = mongoose;
//const CustomerSchema = require('./Customer');
// const AddressSchema = require('./Address');
// const ProductSchema = require('./Product');
// const ProductPlanSchema = require('./ProductPlan');


//define schema for our customer

const emailmarketingaccountInfoSchema = new Schema({
    emailMarketingAccountStatus: String,
    emailMarketingPlan: String,
    emailMarketingUserName: String,
    emailMarketingPassword: String,
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('emailmarketingaccountinfo', emailmarketingaccountInfoSchema);