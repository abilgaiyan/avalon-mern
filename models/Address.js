const mongoose = require('mongoose');
const { Schema } = mongoose;
//const AddressSchema = require('./Address')

//define schema for our address
const addressSchema = new Schema({
    contactPersonName: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    postalCode: Number,
    telephone: Number,
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('address', addressSchema);
