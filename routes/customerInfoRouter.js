const _ = require("lodash");
const Path = require("path-parser");
const { URL } = require("url");
const mongoose = require("mongoose");
const CustomerInfo = mongoose.model("customereinfo");

module.exports = app => {
  //Get Customer Email Communication
  app.get("/api/customerinfo/:customerId", async (req, res) => {
    const customerid = req.params.customerId;
    // console.log(customerid);

    //const customeremail = await CustomerEmail.find({_customer: customerid});
    const customerinfo = await CustomerInfo.find({
      _customer: customerid
    }).sort({ createDate: -1 });

    console.log(customerinfo);
    res.send(customerinfo);
  });

  //Post Request to Customer Email Communication
  app.post("/api/customerinfo", async (req, res) => {
    console.log("/api/customerinfo", req.body);
    const {
      jewelsoftId,
      avalonId,
      customerName,
      customerDBA,
      mainContact,
      contactPersonName,
      position,
      address1,
      address2,
      city,
      state,
      postalCode,
      contactpersonEmail,
      mobileNumber,
      telephone1,
      telephone2,
      salesPerson,
      websiteUrl,
      websiteProvider,
      customersince,
      customerType,
      comment,
      product,
      plan
    } = req.body;

    const CustomerInfodata = new CustomerInfo({
      jewelsoftId,
      avalonId,
      customerName,
      customerDBA,
      mainContact,
      contactPersonName,
      position,
      address1,
      address2,
      city,
      state,
      postalCode,
      contactpersonEmail,
      mobileNumber,
      telephone1,
      telephone2,
      salesPerson,
      websiteUrl,
      websiteProvider,
      customersince,
      customerType,
      comment,
      product,
      plan,
      displayorder: 0,
      status: "Active",
      createDate: Date.now(),
      updateDate: Date.now()
    });

    //Save Data
    await CustomerInfodata.save();
    res.end();
  });
};
