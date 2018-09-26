const mongoose = require('mongoose');
const { Schema } = mongoose;

//define schema for Sales Person
const salespersonSchema = new Schema({
    name: String,
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('salesperson', salespersonSchema);
