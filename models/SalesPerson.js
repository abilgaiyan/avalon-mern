const mongoose = require('mongoose');
const { Schema } = mongoose;
//const AddressSchema = require('./Address');

//define schema for Sales Person
const salespersonSchema = new Schema({
    statecode: String,
    statename: String,
    countryid: String,
    salesmen_name: String,
    salesmen_email: String,
    salesmen_tel: String,
    salesmen_cell: String,
    salesmen_homeaddress: String,
    salesmen_fax: String,
    sales_person_code: String,
    active: Boolean,
    displayorder: { type: Number, default: 0 },
    createDate: Date,
    updateDate: Date
});

// create modal based on schema
mongoose.model('salesperson', salespersonSchema, 'salesperson');
