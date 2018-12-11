const mongoose = require("mongoose");
const { Schema } = mongoose;
const ProductSchema = require("./Product");
const ProductPlanSchema = require("./ProductPlan");
const salespersonSchema = require('./SalesPerson');
const avalonInfoSchema = require("./AvalonInfo");
const billingInfoSchema = require("./BillingInfo");
const websiteInfoSchema = require("./WebsiteInfo");
const productInfoSchema = require("./ProductInfo");
const ashimicrowebsiteinfo = require("./AshiMicroWebsiteInfo");
const domainInfoSchema = require("./DomainInfo");
const sslInfoSchema = require("./SSLInfo");
const businessEmailInfoSchema = require("./BusinessEmailInfo");
const emailmarketingaccountInfoSchema = require("./EmailMarketingAccountInfo");
const targetAreaInfoSchema = require("./TargetAreas");
const callLogInfoSchema = require("./CallLog");
const customerQuriesSchema = require("./CustomerQueries");
const buyingGroupInfoSchema = require("./BuyingGroups");


//define schema for our customer

const customerinfoSchema = new Schema({
  jewelsoftId: String,
  avalonId: String,
  Name: String,
  customerDBA: String,
  mainContact: String,
  contactPersonName: String,
  position: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  postalCode: Number,
  contactpersonEmail: String,
  mobileNumber: Number,
  telephone1: Number,
  telephone2: Number,
  logourl: String,
  // _salesPerson: { type: Schema.Types.ObjectId, ref: "salesperson" },
  _salesPerson: String,
  websiteUrl: String,
  websiteProvider: String,
  customersince: String,
  customerType: String,
  _buyinggroups: [String],
  //_buyinggroups: [{ type: Schema.Types.ObjectId, ref: 'buyinggroup' }],
  comment: String,
  // _product: { type: Schema.Types.ObjectId, ref: "product" },
  // _plan: { type: Schema.Types.ObjectId, ref: "ProductPlan" },
  _avalonInfo: { type: Schema.Types.ObjectId, ref: "avaloninfo" },
  _billingInfo: { type: Schema.Types.ObjectId, ref: "billinginfo" },
  _websiteInfo: { type: Schema.Types.ObjectId, ref: "websiteinfo" },
  _productInfo: { type: Schema.Types.ObjectId, ref: "productinfo" },
  _ashimicrowebsiteInfo: { type: Schema.Types.ObjectId, ref: "ashimicrowebsiteinfo" },
  _domainInfo: { type: Schema.Types.ObjectId, ref: "domaininfo" },
  _sslInfo: { type: Schema.Types.ObjectId, ref: "sslinfo" },
  _businessEmailInfo: { type: Schema.Types.ObjectId, ref: "businessemailinfo" },
  _querysupportInfo: [{ type: Schema.Types.ObjectId, ref: "customerqueries" }],
  _emailmarketingAccountInfo: { type: Schema.Types.ObjectId, ref: "emailmarketingaccountinfo" },
  _targetAreaInfo: { type: Schema.Types.ObjectId, ref: "targetareainfo" },
  _callLogInfo: [{ type: Schema.Types.ObjectId, ref: "callloginfo" }],
  displayorder: { type: Number, default: 0 },
  createDate: Date,
  updateDate: Date
});
// create modal based on schema
mongoose.model('customerinfo', customerinfoSchema, 'customerinfo');
