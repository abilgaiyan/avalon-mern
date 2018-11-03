const mongoose = require('mongoose');
const { Schema } = mongoose;

//define schema for our Customer Plan
const ashiProductStatusSchema = new Schema({
    _ashiProductStatus: String,
    active: Boolean,
    displayorder: Number,
    createDate: Date,
    updateDate: Date
});

// create modal based on schema
mongoose.model('ashiproductstatus', ashiProductStatusSchema, 'ashiproductstatus');