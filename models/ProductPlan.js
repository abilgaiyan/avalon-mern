const mongoose = require('mongoose');
const { Schema } = mongoose;

//define schema for our Customer Plan
const productPlanSchema = new Schema({
    //_productPlan: { type: Schema.ObjectId, default: "Incoming" },
    _productPlan: String,
    planDate: Date,
    active: Boolean,
    displayorder: Number,
    createDate: Date,
    updateDate: Date

});

// create modal based on schema
mongoose.model('productplan', productPlanSchema, 'productplan');