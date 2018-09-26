const mongoose = require('mongoose');
const { Schema } = mongoose;
//const ProductSchema = require('./CustomerStatus');

//define schema for our Customer Status
const customerstatusSchema = new Schema({ 
    customerStatusType = String,
    websiteReleaseMonth = String,
    websiteReleaseYear = String,
    responsiveReleaseDate = Date,
    jewelExchange = Boolean,
    createDate: Date,
    updateDate: Date
}); 
// create modal based on schema
mongoose.model('customerstatus', customerstatusSchema);