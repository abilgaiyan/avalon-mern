const mongoose = require('mongoose');
const { Schema } = mongoose;

//define schema for our Customer Plan
const previousCallTypeSchema = new Schema({
    _previouscalltype: String,
    active: Boolean,
    displayorder: Number,
    createDate: Date,
    updateDate: Date
});

// create modal based on schema
mongoose.model('previouscalltype', previousCallTypeSchema, 'previouscalltype');