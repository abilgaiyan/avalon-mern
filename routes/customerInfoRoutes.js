const _ = require("lodash");
const Path = require("path-parser");
const { URL } = require("url");
const mongoose = require("mongoose");
const CustomerInfo = mongoose.model("customerinfo");

module.exports = app => {
  //Get Customer info data
  app.get("/api/customerinfo/:customerid", async (req, res) => {
    const customerId = req.params.customerid.toString();
    //console.log(customerId);
    const customerinfo = await CustomerInfo.find({
      _id: mongoose.Types.ObjectId(customerId)
    },{createDate: 0, updateDate: 0 }).populate('_salesPerson')
       .populate('_buyinggroups')
       .populate('_avalonInfo')
       .populate('_billingInfo')
       .populate('_websiteInfo')
       .populate('_productInfo')
       .populate('_ashimicrowebsiteInfo')
       .populate('_domainInfo')
       .populate('_sslInfo')
       .populate('_businessEmailInfo')
       .populate('_emailmarketingAccountInfo')
       .populate('_querysupportInfo')
       .populate('_targetAreaInfo')
       .populate('_callLogInfo');
    //console.log(customerinfo);
    if (customerinfo) {
      res.send(customerinfo);
    } else {
      res.send("no data");
    }
  });

  app.get("/api/customerallinfo", async (req, res) => {
    const customeralldata = await await CustomerInfo.find({});
    //console.log(customeralldata);
    res.send(customeralldata);
  });

  app.post("/api/customerinfo", async (req, res) => {

    const customerinfo ={...req.body};
    customerinfo.updateDate = Date.now();
    if (req.body.customerId = 0){
      customerinfo.createDate = Date.now();
    }

    //await customerinfo.save();
    CustomerInfo.findOneAndUpdate(
      {
        _id: req.body.customerId
      },
      customerinfo,
      { upsert: true },
      (err, res) => {
        // Deal with the response data/error
        console.log(err);
       // console.log(res);
      }
    );

    res.end();
  });
};
