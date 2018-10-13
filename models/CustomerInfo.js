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
const querySupportTrendInfoSchema = require("./QuerySupportTrend");
const targetAreaInfoSchema = require("./TargetAreas");
const callLogInfoSchema = require("./CallLog");
const buyingGroupInfoSchema = require("./BuyingGroups");


//define schema for our customer

const customerinfoSchema = new Schema({
  jewelsoftId: String,
  avalonId: String,
  customerName: String,
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
  _salesPerson: { type: Schema.Types.ObjectId, ref: "salesperson" },
  websiteUrl: String,
  websiteProvider: String,
  customersince: String,
  customerType: string,
  _buyinggroups: [{ type: Schema.Types.ObjectId, ref: 'buyinggroup' }],
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
  _emailmarketingAccountInfo: { type: Schema.Types.ObjectId, ref: "emailmarketingaccountinfo" },
  _querysupportInfo: { type: Schema.Types.ObjectId, ref: "querysupporttrendinfo" },
  _targetAreaInfo: { type: Schema.Types.ObjectId, ref: "targetareainfo" },
  _callLogInfo: { type: Schema.Types.ObjectId, ref: "callloginfo" },
  displayorder: {type: Number, default: 0},
  createDate: Date,
  updateDate: Date
});
// create modal based on schema
mongoose.model("customerinfo", customerinfoSchema);
