const mongoose = require('mongoose');
const { Schema } = mongoose;


//define schema for Avalon Customer Support Query Trend
const querySupportTrendInfoSchema = new Schema({
    avgMonthlyQuery: String,
    avgYearlyQuery: String,
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('querysupporttrendinfo', querySupportTrendInfoSchema);