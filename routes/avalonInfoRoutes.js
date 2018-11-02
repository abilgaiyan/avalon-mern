const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const AvalonInfo = mongoose.model('avaloninfo');
const WebsiteStatus = mongoose.model('websitestatus');
const CustomerInfo = mongoose.model("customerinfo");

module.exports = app => {

  //Get Website Status Data
  app.get('/api/WebsiteStatus', async (req, res) => {
    const websitestatusdata = await WebsiteStatus.find({});
    //console.log(websitestatusdata);
    //res.send(prodplanaaldata);

    if (websitestatusdata) {
      res.send(websitestatusdata);
    } else {
      res.send("no data");
    }

  });


  //Get Avalon website info data 
  app.get('/api/avaloninfo/:customerId', async (req, res) => {
    const customerId = req.params.customerId;
    const avaloninfo_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _avalonInfo: 1, _id: 0 });
    const avaloninfoId = avaloninfo_temp[0]._avalonInfo;
    //const customerId = req.params.customerid;
    // console.log(avaloninfo_temp);
    //res.send(billinginfo);

    const avaloninfo = await AvalonInfo.find({
      _id: mongoose.Types.ObjectId(avaloninfoId)
    }, { createDate: 0, updateDate: 0 });

    // console.log("-------------->>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<------------------------")
    // console.log(billinginfo);

    if (avaloninfo) {
      // console.log("-------------->>>>>>>>><<<<<<<<<<<<<<<-------------");
      // console.log(billinginfo);
      res.send(avaloninfo);
    } else {
      res.send("no data");
    }

  });
  // app.get('/api/avaloninfo/:avaloninfoid', async (req, res) => {
  //   const avalonInfoId = req.params.avaloninfoid;
  //   const avaloninfo = await AvalonInfo.find({
  //     _id: mongoose.Types.ObjectId(avalonInfoId)
  //   }, { createDate: 0, updateDate: 0 }).populate('_websitestatus');
  //   //console.log(avaloninfo);
  //   //res.send(avaloninfo);
  //   if (avaloninfo) {
  //     res.send(avaloninfo);
  //   } else {
  //     res.send("no data");
  //   }

  // });

  //Edit
  app.post("/api/avaloninfo", async (req, res) => {

    const avaloninfo = { ...req.body };
    console.log("--------------------->>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<-----------------------");
    // console.log(avaloninfo);
    avaloninfo.updateDate = Date.now();
    const customerId = avaloninfo.customerId;
    const _avalonInfo_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _avalonInfo: 1, _id: 0 });
    const _avalonInfoId = _avalonInfo_temp[0]._avalonInfo;

    await AvalonInfo.findOneAndUpdate(
      {
        _id: _avalonInfoId
      },
      avaloninfo,
      { upsert: true },
      (err, res) => {
        // Deal with the response data/error
        if (err) {
          console.log(err);
        }
        if (res) {
          //console.log(res);
          res.send(avaloninfo);
        }
        // console.log(res);
      }
    );

    res.end();
  });

  // app.post("/api/avaloninfo", async (req, res) => {

  //   //console.log("----------------->>>>>>>>>>>", req.body)

  //   const avaloninfo = { ...req.body };
  //   avaloninfo.updateDate = Date.now();
  //   //const customerId = req.body.customerId;
  //   if (req.body.customerId = 0) {
  //     avaloninfo.createDate = Date.now();
  //   }

  //   const customerId = req.body.customerId;

  //   //console.log(avaloninfo);
  //   AvalonInfo.findOneAndUpdate(
  //     {
  //       _id: customerId
  //     },
  //     avaloninfo,
  //     { upsert: true },
  //     (err, res) => {
  //       // Deal with the response data/error
  //       console.log(err);
  //       // console.log(res);


  //       if (res) {

  //         CustomerInfo.update({ _id: customerId }, {
  //           _avalonInfo: res._id
  //         }, function (err, affected, resp) {
  //           console.log(resp);
  //         })
  //       }
  //     }
  //   );

  //   res.end();
  // });


  // app.post('/api/avaloninfo_Post', async (req, res) => {
  //   //console.log("i------------>>>>>>>>>>>>>", req.user)
  //   const { websitestatus, comments, customerId } = req.body;
  //   const AvalonInfoData = new AvalonInfo({
  //     websitestatus: websitestatus,
  //     signupDate: Date.now(),
  //     //numberOfDaysFromSignup: 0,
  //     layoutSentDate: Date.now(),
  //     layoutAprrovedDate: Date.now(),
  //     betaOnReviewDate: Date.now(),
  //     comments,
  //     _user: req.user.id,
  //     _customer: customerId,
  //     createDate: Date.now(),
  //     updateDate: Date.now()

  //   });

  //   //Save Data
  //   await AvalonInfoData.save();
  //   res.end();
  // });

  //Post Request avaloninfo form
  // app.post('/api/avaloninfo', async (req, res) => {
  //   const { numberOfDaysFromSignup, _websitestatus, customerId, comments } = req.body;
  //   const AvalonInfo = new AvalonInfo({
  //     signupDate: Date.now(),
  //     numberOfDaysFromSignup: numberOfDaysFromSignup,
  //     layoutSentDate: Date.now(),
  //     layoutAprrovedDate: Date.now(),
  //     betaOnReviewDate: Date.now(),
  //     comments: comments,
  //     _websitestatus: _websitestatus,
  //     createDate: Date.now(),
  //     updateDate: Date.now()
  //   });

  //   //Save Data
  //   await AvalonInfo.save();
  //   res.end();
  // });


}