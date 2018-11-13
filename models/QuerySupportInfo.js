const mongoose = require('mongoose');
const { Schema } = mongoose;

//define schema for Customers Query Support Information
const QuerySupportInfoSchema = new Schema({
    emailRequirement: String,
    emailProvider: String,
    adminEmailId: String,
    adminPassword: String,
    createDate: Date,
    updateDate: Date

});
// create modal based on schema
mongoose.model('querysupportinfo', QuerySupportInfoSchema, 'querysupportinfo');