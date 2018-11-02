const mongoose = require('mongoose');
const { Schema } = mongoose;
//const websiteStatusSchema = require('./WebsiteStatus');


//define schema for our customer

const avalonInfoSchema = new Schema({
    _websitestatus: { type: Schema.Types.ObjectId, ref: "websitestatus" },
    signupDate: String,
    numberOfDaysFromSignup: { type: Number, default: 0 },
    layoutSentDate: String,
    layoutAprrovedDate: String,
    betaOnReviewDate: String,
    comments: String,
    //websitestatus: String,
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('avaloninfo', avalonInfoSchema, 'avaloninfo');