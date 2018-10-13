const mongoose = require('mongoose');
const { Schema } = mongoose;

//define schema for our Ashi-Microwebsite Info
const ashiMicroWebInfoSchema = new Schema({
    idoWebsiteUrl: String,
    lovebrightWebsiteUrl: String,
    silverstonesWebsiteUrl: String,
    shopholidayWebsiteUrl: String,
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('ashimicrowebsiteinfo', ashiMicroWebInfoSchema);