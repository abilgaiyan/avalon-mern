const mongoose = require('mongoose');
const { Schema } = mongoose;
const CustomerStorySchema = require('./CustomerStory');

//define schema for our surveys

const customerstorySchema = new Schema({
    name: String,
    heading: String,
    description: String,
    videourl: String,
    posterurl: String,
    published: Boolean,
    displayorder: Number,
    createDate: Date,
    updateDate: Date
});


// create modal based on schema

mongoose.model('customerstory', customerstorySchema);