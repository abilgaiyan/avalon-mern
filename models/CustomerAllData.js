const mongoose = require('mongoose');
const { Schema } = mongoose;
const CustomeralldataSchema = require('./CustomerAllData');

//define schema for our customer

const customeralldataSchema = new Schema({
    sr: String,
    jewelsoftId: String,
    customerName: String,
    websiteUrl: String,
    contactPersonName: String,
    address1: String,
    city: String,
    state: String,
    telephone: Number,
    customerStatusType: String,
    websiteReleaseMonth:String,
    websiteReleaseYear: String,
    responsiveReleaseDate: Date,
    salesPersonName: String,
    liquidDesign: String,
    monthlyPlan: String,
    hostingAmount: Number,
    holdyear: String,
    yearlyPlan: String,
    responsiveUpgrade: String,
    websiteStatus: String,
    filterSearchFunctionality: String,
    adminDeploymentStatus: String,
    responsiveWebsiteWithSmallSlider: String,
});
// create modal based on schema
mongoose.model('customerdata', customeralldataSchema, 'customerdata');