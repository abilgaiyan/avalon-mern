const mongoose = require('mongoose');
const { Schema } = mongoose;
//const ProductPlanSchema = require('./ProductPlan');

//define schema for our Customer Plan
const productPlanSchema = new Schema({
    planName: String,
    planDate: Date,
    active: Boolean,
    displayorder:number,
    createDate: Date,
    updateDate: Date

});

// create modal based on schema
mongoose.model('ProductPlan', productPlanSchema);