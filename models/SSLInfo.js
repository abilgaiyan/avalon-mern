const mongoose = require('mongoose');
const { Schema } = mongoose;

//define schema for Avalon Customer SSL Information
const sslInfoSchema = new Schema({
    sslPurchaser: String,
    sslProvider: String,
    sslType: String,
    httpsStatus: String,
    sslAccountId: String,
    sslLoginUserName: String,
    sslLoginUserPassword: String,
    buyDate: Date,
    expiryDate: Date,
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('sslinfo', sslInfoSchema, 'sslinfo');