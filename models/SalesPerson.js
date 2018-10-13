const mongoose = require('mongoose');
const { Schema } = mongoose;
//const AddressSchema = require('./Address');

//define schema for Sales Person
const salespersonSchema = new Schema({
    name: String,
    active: Boolean,
    displayorder: {type: Number, default: 0},
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('salesperson', salespersonSchema);
