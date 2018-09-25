const mongoose = require('mongoose');
const { Schema } = mongoose;
const ContactusSchema = require('./Contactus');

//define schema for our surveys

const contactusSchema = new Schema({
    name: String,
    email: String,
    mobile: Number,
    message: String,
    createDate: Date,
    updateDate: Date
});


// create modal based on schema

mongoose.model('contactus', contactusSchema);