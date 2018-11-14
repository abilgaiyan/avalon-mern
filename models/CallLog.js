const mongoose = require('mongoose');
const { Schema } = mongoose;

//define schema for Avalon Customers Call Logs by Support Team
const callLogInfoSchema = new Schema({
    previousCallDate: Date,
    _previousCallType: { type: Schema.Types.ObjectId, ref: "previouscalltype" },
    callPerson: String,
    avalonExcutive: String,
    topic: String,
    summary: String,
    comments: String,
    followupcalldate: Date,
    followupcallTime: Date,
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('callloginfo', callLogInfoSchema, 'callloginfo');