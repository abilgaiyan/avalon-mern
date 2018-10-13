const mongoose = require('mongoose');
const { Schema } = mongoose;


//define schema for our customer

const domainInfoSchema = new Schema({
    domainPurchaser: String,
    domainProvider: String,
    domainAccountId: String,
    domainLoginUserName: String,
    domainLoginUserPassword: String,
    buyDate: String,
    expiryDate: String,
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('domaininfo', domainInfoSchema);