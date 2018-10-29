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
    }, { createDate: 0, updateDate: 0 }).populate('_salesPerson')
      .populate('_buyinggroups')
      .populate('_avalonInfo')
      // .populate('_billingInfo')
      .populate({
        path: '_billingInfo',
        populate: {
          path: '_productPlan',
          model: 'productplan'
        }
      })
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
    const customeralldata = await CustomerInfo.find({});
    // console.log(customeralldata);
    res.send(customeralldata);
  });

  app.post("/api/searchcustomer", async (req, res) => {
    const search = req.body.search;
    //console.log(search);
    const customeralldata = await CustomerInfo.find(
      { $text: { $search: search } },
      { score: { $meta: "textScore" } }
    );

    res.send(customeralldata);
  });


  app.post("/api/customerinfo", async (req, res) => {

    const customerinfo = { ...req.body };
    console.log("--------------------->>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<-----------------------", customerinfo)
    customerinfo.updateDate = Date.now();
    const customerId = req.body.customerId;
    if (req.body.customerId = 0) {
      customerinfo.createDate = Date.now();
      delete customerinfo.customerId;
    }
    else {
      // customerinfo._id = mongoose.Types.ObjectId(req.body.customerId);
      delete customerinfo.customerId;
    }
    //console.log('zzzz', customerinfo); 
    //await customerinfo.save();
    await CustomerInfo.findOneAndUpdate(
      {
        _id: customerId
      },
      customerinfo,
      { upsert: true },
      (err, res) => {
        // Deal with the response data/error
        if (err) {
          console.log(err);
        }
        if (res) {
          console.log(res);
        }
        // console.log(res);
      }
    );

    res.end();
  });
};
