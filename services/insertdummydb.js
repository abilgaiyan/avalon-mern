var http = require('http');
var XLSX = require('xlsx');
const mongoose = require('mongoose');
// var mkdirp = require('mkdirp');
// var fs = require('fs');
// var getDirName = require('path').dirname;

mongoose.connect("mongodb://avalon:avalon123@ds113693.mlab.com:13693/avalonsupport-dev");
var dbo = mongoose.connection;

dbo.on("error", console.error.bind(console, "connection error"));
dbo.once("open", function (callback) {
  console.log("Connection succeeded.");
});

// require('../models/SalesPerson');
// const SalesManUtility = mongoose.model("salesperson");

//if (err) throw err;
console.log('test')

var workbook = XLSX.readFile('AshiB2BSalesManInfo.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
console.log(xlData);

dbo.createCollection("salesperson", function (err, res) {
  if (err) throw err;
  console.log("Sales Person Collection created!");
  //    db.close();
});
// //var myobj = { JEWELSOFT_ID: xlData[0]["JEWELSOFT ID"], CUSTOMER_NAME: xlData[0]["CUSTOMER NAME"],MAIN_CONTACT: xlData[0]["MAIN CONTACT"], ADDRESS_1: xlData[0]["ADDRESS 1"],CTIY: xlData[0]["CTIY"], STATE: xlData[0]["STATE"],TELEPHONE: xlData[0]["TELEPHONE"], SALES_PERSON: xlData[0]["SALES PERSON"],WEBSITE_URL: xlData[0]["WEBSITE URL"], MONTH: xlData[0]["MONTH"],YEAR: xlData[0]["YEAR"], STATUS: xlData[0]["STATUS"],LIQUID_DESIGN: xlData[0]["LIQUID DESIGN"], MONTHLY_PLAN: xlData[0]["MONTHLY PLAN"], HOSTING_AMOUNT_PAYING: xlData[0]["HOSTING_AMOUNT_PAYING"]  , RESPONSIVE_UPGRADE: xlData[0]["RESPONSIVE UPGRADE"] };

dbo.collection("salesperson").insert(xlData, function (err, res) {
  if (err) throw err;
  console.log("document insertion into Sales Person completed");
  //    db.close();
});

var xlData1 = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[1]]);
console.log(xlData);

dbo.createCollection("statemaster", function (err, res) {
  if (err) throw err;
  console.log("State Master Collection created!");
  //    db.close();
});
// //var myobj = { JEWELSOFT_ID: xlData[0]["JEWELSOFT ID"], CUSTOMER_NAME: xlData[0]["CUSTOMER NAME"],MAIN_CONTACT: xlData[0]["MAIN CONTACT"], ADDRESS_1: xlData[0]["ADDRESS 1"],CTIY: xlData[0]["CTIY"], STATE: xlData[0]["STATE"],TELEPHONE: xlData[0]["TELEPHONE"], SALES_PERSON: xlData[0]["SALES PERSON"],WEBSITE_URL: xlData[0]["WEBSITE URL"], MONTH: xlData[0]["MONTH"],YEAR: xlData[0]["YEAR"], STATUS: xlData[0]["STATUS"],LIQUID_DESIGN: xlData[0]["LIQUID DESIGN"], MONTHLY_PLAN: xlData[0]["MONTHLY PLAN"], HOSTING_AMOUNT_PAYING: xlData[0]["HOSTING_AMOUNT_PAYING"]  , RESPONSIVE_UPGRADE: xlData[0]["RESPONSIVE UPGRADE"] };

dbo.collection("statemaster").insert(xlData1, function (err, res) {
  if (err) throw err;
  console.log("document insertion into State Master completed");
  //    db.close();
});








