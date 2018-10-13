const mongoose = require('mongoose');
const { Schema } = mongoose;

//define schema for our customer

const businessEmailInfoSchema = new Schema({
    emailRequirement: String,
    emailProvider: String,
    adminEmailId: String,
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('businessemailinfo', businessEmailInfoSchema);