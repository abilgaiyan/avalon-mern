const mongoose = require('mongoose');
const { Schema } = mongoose;

//define schema for our Customer Plan
const designeTypeSchema = new Schema({
    _designeType: String,
    active: Boolean,
    displayorder: Number,
    createDate: Date,
    updateDate: Date
});

// create modal based on schema
mongoose.model('designetype', designeTypeSchema, 'designetype');