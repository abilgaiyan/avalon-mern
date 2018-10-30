const mongoose = require('mongoose');
const { Schema } = mongoose;

//define schema for our Customer Plan
const hostingAmountSchema = new Schema({
    hostingAmount: String,
    active: Boolean,
    displayorder: Number,
    createDate: Date,
    updateDate: Date

});

// create modal based on schema
mongoose.model('hostingamount', hostingAmountSchema, 'hostingamount');