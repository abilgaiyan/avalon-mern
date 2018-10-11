const mongoose = require("mongoose");
const { Schema } = mongoose;
const ProductSchema = require("./Product");
const ProductPlanSchema = require("./ProductPlan");

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
  _salesPerson: { type: Schema.Types.ObjectId, ref: "SalesPerson" },
  websiteUrl: String,
  websiteProvider: String,
  customersince: String,
  customerType: string,
  comment: String,
  _product: { type: Schema.Types.ObjectId, ref: "product" },
  _plan: { type: Schema.Types.ObjectId, ref: "ProductPlan" },
  createDate: Date,
  updateDate: Date
});
// create modal based on schema
mongoose.model("customerinfo", customerinfoSchema);
