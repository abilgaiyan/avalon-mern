const mongoose = require('mongoose');
const { Schema } = mongoose;
//const ProductPlanSchema = require('./ProductPlan');

//define schema for our Customer Plan
const websiteStatusSchema = new Schema({
    _websitestatus: String,
    active: Boolean,
    displayorder: Number,
    createDate: Date,
    updateDate: Date

});

// create modal based on schema
mongoose.model('websitestatus', websiteStatusSchema, 'websitestatus');