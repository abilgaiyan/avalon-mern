const _ = require("lodash");
const Path = require("path-parser");
const { URL } = require("url");
const mongoose = require("mongoose");
const BuyingGroup = mongoose.model('buyinggroup');
const CustomerInfo = mongoose.model("customerinfo");


module.exports = app => {

  //List of all Buying Groups
  app.get('/api/BuyingGroupsAllData', async (req, res) => {
    const buyinggroupsAllData = await BuyingGroup.find({});
    //console.log(buyinggroupsAllData);
    //res.send(buyinggroupsAllData);

    if (buyinggroupsAllData) {
      res.send(buyinggroupsAllData);
    } else {
      res.send("no data");
    }

  });

  //Get Customer info data
  app.get("/api/customerinfo/:customerid", async (req, res) => {
    const customerId = req.params.customerid.toString();
    //console.log(customerId);
    const customerinfo = await CustomerInfo.find({
      _id: mongoose.Types.ObjectId(customerId)
    }, { createDate: 0, updateDate: 0 }).populate('_salesPerson')
      //.populate('_buyinggroups')
      //.populate('_avalonInfo')
      .populate({
        path: '_avalonInfo',
        populate: {
          path: '_websitestatus',
          model: 'websitestatus'
        }
      })
      // .populate('_billingInfo')
      .populate({
        path: '_billingInfo',
        populate: {
          path: '_productPlan',
          model: 'productplan'
        }
      })
      .populate('_websiteInfo')
      //.populate('_productInfo')
      .populate({
        path: '_productInfo',
        populate: {
          path: '_ashiProductStatus',
          model: 'ashiproductstatus'
        }
      })
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

  //New
  app.post('/api/addcustomerinfo', async (req, res) => {
    const { jewelsoftId, Name, address1, city, state, telephone, websiteUrl, avalonId, customerDBA, mainContact, position, address2, postalCode, contactpersonEmail, telephone1, telephone2, websiteProvider, customersince, customerType, comment } = req.body;
    const AddCustomerInfoData = new CustomerInfo({
      jewelsoftId,
      Name,
      address1,
      city,
      state,
      telephone,
      websiteUrl,
      avalonId,
      customerDBA,
      mainContact,
      position,
      address2,
      postalCode,
      contactpersonEmail,
      telephone1,
      telephone2,
      websiteProvider,
      customersince,
      customerType,
      comment,
      _salesPerson: null,
      _buyinggroups: [],
      _avalonInfo: null,
      _billingInfo: null,
      _websiteInfo: null,
      _productInfo: null,
      _ashimicrowebsiteInfo: null,
      _domainInfo: null,
      _sslInfo: null,
      _businessEmailInfo: null,
      _emailmarketingAccountInfo: null,
      _querysupportInfo: null,
      _targetAreaInfo: null,
      _callLogInfo: [],
      createDate: Date.now(),
      updateDate: Date.now()
    });

    //Save Data
    if (AddCustomerInfoData) {
      await AddCustomerInfoData.save((err, NewCustomer) => {
        if (err) {
          res.send('Error in saving', err);
        }
        if (NewCustomer) {
          //New Customer Inserted
          console.log(NewCustomer)
        }

      });

      //console.log("--------------------------------->>>>>>>>>>>>>>>>>>>>callinfo ID->>>>>>>>>>>>>>>>>>>>>>>>", data);
      res.send(AddCustomerInfoData);
    }
    else {
      res.send("Error!!");
    }
    res.end();
  });

  //Edit
  app.post("/api/customerinfo", async (req, res) => {

    const customerinfo = { ...req.body };
    // const customerinfo_temp = { ...req.body };
    // const buyingGrp_id_temp = customerinfo_temp._buyinggroups
    // const buyingGrp_onlyid = buyingGrp_id_temp.map((onlyid) => { return onlyid.id });
    // customerinfo._buyinggroups = buyingGrp_onlyid;

    //console.log("--------------------->>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<-----------------------", customerinfo)
    customerinfo.updateDate = Date.now();
    const customerId = req.body.customerId;
    // if (req.body.customerId = 0) {
    //   customerinfo.createDate = Date.now();
    //   delete customerinfo.customerId;
    // }
    // else {
    //   // customerinfo._id = mongoose.Types.ObjectId(req.body.customerId);
    //   delete customerinfo.customerId;
    // }
    //console.log('zzzz', customerinfo); 
    //await customerinfo.save();
    await CustomerInfo.findOneAndUpdate(
      {
        _id: customerId
      },
      customerinfo,
      { upsert: false },
      (err, res) => {
        // Deal with the response data/error
        if (err) {
          console.log(err);
        }
        if (res) {
          //console.log(res);
        }
      });
    res.send(customerinfo);
    res.end();
  });
};
