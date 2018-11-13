const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const EmailMarketingAccountInfo = mongoose.model('emailmarketingaccountinfo');
const CustomerInfo = mongoose.model("customerinfo");

module.exports = app => {
  //Get Customer Email Marketing Account info data by ID
  app.get('/api/emailmarketingaccountinfo/:customerId', async (req, res) => {
    const customerId = req.params.customerId;
    const eMktAccount_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _emailmarketingAccountInfo: 1, _id: 0 });
    const eMktAccountId = eMktAccount_temp[0]._emailmarketingAccountInfo;
    //const customerId = req.params.customerid.toString();
    //console.log(billinginfo);
    //res.send(billinginfo);

    const eMktAccountInfo = await EmailMarketingAccountInfo.find({
      _id: mongoose.Types.ObjectId(eMktAccountId)
    }, { createDate: 0, updateDate: 0 });

    // console.log("-------------->>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<------------------------")
    // console.log(billinginfo);

    if (eMktAccountInfo) {
      // console.log("-------------->>>>>>>>><<<<<<<<<<<<<<<-------------");
      // console.log(billinginfo);
      res.send(eMktAccountInfo);
    } else {
      res.send("no data");
    }

  });

  // app.get('/api/emailmarketingaccountinfo/:emktaccountinfoid', async(req, res) =>{
  //     const emktaccinfoId= req.params.emktaccountinfoid;
  //     const eMktAccountInfo = await EmailMarketingAccountInfo.find({
  //     _id: mongoose.Types.ObjectId(emktaccinfoId)
  //      },{createDate: 0, updateDate: 0 });
  //     //console.log(eMktAccountInfo);
  //     //res.send(eMktAccountInfo);
  //     if (eMktAccountInfo) {
  //         res.send(eMktAccountInfo);
  //       } else {
  //         res.send("no data");
  //       }

  // });

  //New && Edit
  app.post("/api/emailmarketingaccountinfo", async (req, res) => {

    const eMktAccountInfo = { ...req.body };
    eMktAccountInfo.updateDate = Date.now();
    const customerId = eMktAccountInfo.customerId;
    const eMktAccountInfo_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _emailmarketingAccountInfo: 1, _id: 0 });
    const eMktAccountInfoId = eMktAccountInfo_temp[0]._emailmarketingAccountInfo;
    // console.log("--------------------->>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<-----------------------");
    // console.log(billinginfoId);
    // if (req.body.customerId = 0) {
    //   billinginfo.createDate = Date.now();
    //   delete billinginfo.customerId;
    // }
    // else {
    //   // billinginfo._id = mongoose.Types.ObjectId(req.body.customerId);
    //   delete billinginfo.customerId;
    // }
    // //console.log('zzzz', billinginfo); 
    // //await billinginfo.save();

    if (eMktAccountInfoId === null) {
      //eMktAccountInfo._id = new ObjectID();
      eMktAccountInfo.createDate = Date.now();
      // console.log("NULL>>>>>>>>>>>>>>", eMktAccountInfo);
      await EmailMarketingAccountInfo.create(eMktAccountInfo, async (err, newid) => {
        // Deal with the response data/error
        if (err) {
          console.log(err);
        }
        if (newid) {
          //console.log("Insert Avalon Info Id>>>>>>>>>>>>>>>:", newid);
          //Push eMktAccountInfoId from EmailMarketingAccountInfo collection to CustomerInfo Table
          await CustomerInfo.findOneAndUpdate(
            { _id: customerId },
            { _emailmarketingAccountInfo: newid._id }
          )
        }
        // console.log(res);
      });
      res.send(eMktAccountInfo);
    }
    else {
      await EmailMarketingAccountInfo.findOneAndUpdate(
        {
          _id: eMktAccountInfoId
        },
        eMktAccountInfo,
        { upsert: false },
        (err, res) => {
          // Deal with the response data/error
          if (err) {
            console.log(err);
          }
          if (res) {
            //console.log(res);
          }
          // console.log(res);
        });
      res.send(eMktAccountInfo);
    }
    res.end();
  });
  // app.post("/api/emailmarketingaccountinfo", async (req, res) => {

  //   const eMktAccountInfo = { ...req.body };
  //   eMktAccountInfo.updateDate = Date.now();
  //   const customerId = eMktAccountInfo.customerId;
  //   const eMktAccountInfo_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _emailmarketingAccountInfo: 1, _id: 0 });
  //   const eMktAccountInfoId = eMktAccountInfo_temp[0]._emailmarketingAccountInfo;
  //   // console.log("--------------------->>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<-----------------------");
  //   // console.log(billinginfoId);
  //   // if (req.body.customerId = 0) {
  //   //   billinginfo.createDate = Date.now();
  //   //   delete billinginfo.customerId;
  //   // }
  //   // else {
  //   //   // billinginfo._id = mongoose.Types.ObjectId(req.body.customerId);
  //   //   delete billinginfo.customerId;
  //   // }
  //   // //console.log('zzzz', billinginfo); 
  //   // //await billinginfo.save();
  //   await EmailMarketingAccountInfo.findOneAndUpdate(
  //     {
  //       _id: eMktAccountInfoId
  //     },
  //     eMktAccountInfo,
  //     { upsert: true },
  //     (err, res) => {
  //       // Deal with the response data/error
  //       if (err) {
  //         console.log(err);
  //       }
  //       if (res) {
  //         console.log(res);
  //       }
  //       // console.log(res);
  //     }
  //   );

  //   res.end();
  // });
  // app.post("/api/emailmarketingaccountinfo", async (req, res) => {

  //   const eMktAccountInfo = { ...req.body };
  //   eMktAccountInfo.updateDate = Date.now();
  //   if (req.body.emktaccinfoId = 0) {
  //     eMktAccountInfo.createDate = Date.now();
  //   }

  //   const customerId = req.body.customerId;

  //   //console.log(eMktAccountInfo);
  //   EmailMarketingAccountInfo.findOneAndUpdate(
  //     {
  //       _id: req.body.emktaccinfoId
  //     },
  //     eMktAccountInfo,
  //     { upsert: true },
  //     (err, res) => {
  //       // Deal with the response data/error
  //       console.log(err);
  //       // console.log(res);
  //       if (res) {

  //         CustomerInfo.update({ _id: customerId }, {
  //           _emailmarketingAccountInfo: res._id
  //         }, function (err, affected, resp) {
  //           console.log(resp);
  //         })
  //       }
  //     }
  //   );

  //   res.end();
  // });

}