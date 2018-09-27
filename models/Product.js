const mongoose = require('mongoose');
const { Schema } = mongoose;
//const ProductSchema = require('./Product');

//define schema for our product Plan
const productSchema = new Schema({ 
    name: String,
    version: String,
    productrelasedate: Date,
    active: Boolean,
    displayorder: Number,
    createDate: Date,
    updateDate: Date
}); 
// create modal based on schema
mongoose.model('product', productSchema);