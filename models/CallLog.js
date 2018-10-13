const mongoose = require('mongoose');
const { Schema } = mongoose;



//define schema for our customer

const callLogInfoSchema = new Schema({
    previousCallDate: Date,
    previousCallType: String,
    callPerson: String,
    avalonExcutive: String,
    topic: String,
    summary: String,
    comments: String,
    followupcalldate: Date,
    followupcallTime: String,
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('callloginfo', callLogInfoSchema);