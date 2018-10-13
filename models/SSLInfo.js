const mongoose = require('mongoose');
const { Schema } = mongoose;
//const CustomerSchema = require('./Customer');
// const AddressSchema = require('./Address');
// const ProductSchema = require('./Product');
// const ProductPlanSchema = require('./ProductPlan');


//define schema for our customer

const sslInfoSchema = new Schema({
    sslPurchaser: String,
    sslProvider: String,
    sslType: String,
    httpsStatus: String,
    sslAccountId: String,
    sslLoginUserName: String,
    sslLoginUserPassword: String,
    buyDate: String,
    expiryDate: String,
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('sslinfo', sslInfoSchema);