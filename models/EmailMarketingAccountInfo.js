const mongoose = require('mongoose');
const { Schema } = mongoose;

//define schema for Customer Email Marketing Account Information
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