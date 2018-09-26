const mongoose = require('mongoose');
const { Schema } = mongoose;
//const ProductSchema = require('./Product');

//define schema for our product Plan
const productSchema = new Schema({ 
    oldTempalte = Boolean,
    liquidTemplate = Boolean,
    responsiveTemplate = Boolean,
    jewelExchange = Boolean,
    createDate: Date,
    updateDate: Date
}); 
// create modal based on schema
mongoose.model('product', productSchema);