const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const AvalonBillingInfo = mongoose.model('billinginfo');
const CustomerInfo = mongoose.model("customerinfo");
const productplanInfo = mongoose.model("productplan");

module.exports = app => {
  //Get Avalon website Billing Info data 
  app.get('/api/avalonbillinginfo/:customerId', async (req, res) => {
    const customerId = req.params.customerId;
    const billinginfoId_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _billingInfo: 1, _id: 0 });
    const billinginfoId = billinginfoId_temp[0]._billingInfo;
    //const customerId = req.params.customerid.toString();
    //console.log(billinginfo);
    //res.send(billinginfo);

    const billinginfo = await AvalonBillingInfo.find({
      _id: mongoose.Types.ObjectId(billinginfoId)
    }, { createDate: 0, updateDate: 0 });

    // console.log("-------------->>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<------------------------")
    // console.log(billinginfo);

    if (billinginfo) {
      // console.log("-------------->>>>>>>>><<<<<<<<<<<<<<<-------------");
      // console.log(billinginfo);
      res.send(billinginfo);
    } else {
      res.send("no data");
    }

  });



  //New And Edit
  app.post("/api/avalonbillinginfo", async (req, res) => {

    const billinginfo = { ...req.body };
    billinginfo.updateDate = Date.now();
    const customerId = billinginfo.customerId;
    const billinginfoId_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _billingInfo: 1, _id: 0 });
    const billinginfoId = billinginfoId_temp[0]._billingInfo;
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
    if (billinginfoId === null) {
      //billinginfo._id = new ObjectID();
      billinginfo.createDate = Date.now();
      // console.log("NULL>>>>>>>>>>>>>>", billinginfo);
      await AvalonBillingInfo.create(billinginfo, async (err, newid) => {
        // Deal with the response data/error
        if (err) {
          console.log(err);
        }
        if (newid) {
          //console.log("Insert Avalon Info Id>>>>>>>>>>>>>>>:", newid);
          //Push billinginfoId from AvalonBillingInfo collection to CustomerInfo Table
          await CustomerInfo.findOneAndUpdate(
            { _id: customerId },
            { _billingInfo: newid._id }
          )
        }
        // console.log(res);
      });
      res.send(billinginfo);
    }
    else {
      await AvalonBillingInfo.findOneAndUpdate(
        {
          _id: billinginfoId
        },
        billinginfo,
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
      res.send(billinginfo);
    }
    res.end();
  });

  // app.post("/api/avalonbillinginfo", async (req, res) => {

  //   const billinginfo = { ...req.body };
  //   billinginfo.updateDate = Date.now();
  //   const customerId = billinginfo.customerId;
  //   const billinginfoId_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _billingInfo: 1, _id: 0 });
  //   const billinginfoId = billinginfoId_temp[0]._billingInfo;
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
  //   await AvalonBillingInfo.findOneAndUpdate(
  //     {
  //       _id: billinginfoId
  //     },
  //     billinginfo,
  //     { upsert: true },
  //     (err, res) => {
  //       // Deal with the response data/error
  //       if (err) {
  //         console.log(err);
  //       }
  //       if (res) {
  //         //console.log(res);
  //       }
  //       // console.log(res);
  //     }
  //   );

  //   res.end();
  // });


  // app.post("/api/avalonbillinginfo", async (req, res) => {
  //   const billinginfo = { ...req.body };
  //   // console.log("----------------->>>>>>>>>>> BillingInfo <<<<<<<<<<<<<<<<--------------------------")
  //   // console.log(billinginfo);

  //   billinginfo.updateDate = Date.now();
  //   if (req.body.avalonbillinfoId = 0) {
  //     billinginfo.createDate = Date.now();
  //   }

  //   const customerId = req.body.customerId;


  //   //console.log(billinginfo);
  //   await AvalonBillingInfo.findOneAndUpdate(
  //     {
  //       _id: req.body.avalonbillinfoId
  //     },
  //     billinginfo,
  //     { upsert: true },
  //     (err, res) => {
  //       // Deal with the response data/error
  //       if (err) {
  //         console.log(err);
  //       }

  //       if (res) {

  //         CustomerInfo.update({ _id: customerId }, {
  //           _billingInfo: res._id
  //         }, function (err, affected, resp) {
  //           console.log(resp);
  //         })


  //       }
  //       // console.log(res);
  //     }
  //   )





  //   res.end();
  // });
}