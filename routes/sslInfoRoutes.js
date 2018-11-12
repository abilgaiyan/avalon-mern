const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const SSLInfo = mongoose.model('sslinfo');
const CustomerInfo = mongoose.model("customerinfo");

module.exports = app => {
  //Get Customer Website SSL Information data by ID
  app.get('/api/sslinfo/:customerId', async (req, res) => {
    const customerId = req.params.customerId;
    const sslinfo_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _sslInfo: 1, _id: 0 });
    const sslinfoId = sslinfo_temp[0]._sslInfo;

    const sslinfo = await SSLInfo.find({
      _id: mongoose.Types.ObjectId(sslinfoId)
    }, { createDate: 0, updateDate: 0 });

    // console.log("-------------->>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<------------------------")
    // console.log(sslinfo_temp);

    if (sslinfo) {
      // console.log("-------------->>>>>>>>><<<<<<<<<<<<<<<-------------");
      // console.log(sslinfo);
      res.send(sslinfo);
    } else {
      res.send("no data");
    }
  });

  // app.get('/api/sslinfo/:sslinfoid', async(req, res) =>{
  //     const sslInfoId= req.params.sslinfoid;
  //     const sslinfo = await SSLInfo.find({
  //     _id: mongoose.Types.ObjectId(sslInfoId)
  //     },{createDate: 0, updateDate: 0 });
  //     //console.log(sslinfo);
  //     //res.send(sslinfo);
  //     if (sslinfo) {
  //         res.send(sslinfo);
  //       } else {
  //         res.send("no data");
  //       }

  // });


  //New && Edit
  app.post("/api/sslinfo", async (req, res) => {

    const sslinfo = { ...req.body };
    sslinfo.updateDate = Date.now();
    const customerId = sslinfo.customerId;
    const sslinfo_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _sslInfo: 1, _id: 0 });
    const sslinfoId = sslinfo_temp[0]._sslInfo;
    // console.log("--------------------->>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<-----------------------");
    // console.log(microWebsiteinfoId);

    if (sslinfoId === null) {
      //sslinfo._id = new ObjectID();
      sslinfo.createDate = Date.now();
      // console.log("NULL>>>>>>>>>>>>>>", sslinfo);
      await SSLInfo.create(sslinfo, async (err, newid) => {
        // Deal with the response data/error
        if (err) {
          console.log(err);
        }
        if (newid) {
          //console.log("Insert Avalon Info Id>>>>>>>>>>>>>>>:", newid);
          //Push sslinfoId from SSLInfo collection to CustomerInfo Table
          await CustomerInfo.findOneAndUpdate(
            { _id: customerId },
            { _sslInfo: newid._id }
          )
        }
        // console.log(res);
      });
      res.send(sslinfo);
    }
    else {
      await SSLInfo.findOneAndUpdate(
        {
          _id: sslinfoId
        },
        sslinfo,
        { upsert: false },
        (err, res) => {
          // Deal with the response data/error
          if (err) {
            console.log(err);
          }
          if (res) {
            console.log(res);
          }
          // console.log(res);
        });
      res.send(sslinfo);
    }
    res.end();
  });

  // app.post("/api/sslinfo", async (req, res) => {

  //   const sslinfo = { ...req.body };
  //   sslinfo.updateDate = Date.now();
  //   const customerId = sslinfo.customerId;
  //   const sslinfo_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _sslInfo: 1, _id: 0 });
  //   const sslinfoId = sslinfo_temp[0]._sslInfo;
  //   // console.log("--------------------->>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<-----------------------");
  //   // console.log(microWebsiteinfoId);

  //   await SSLInfo.findOneAndUpdate(
  //     {
  //       _id: sslinfoId
  //     },
  //     sslinfo,
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
  // app.post("/api/sslinfo", async (req, res) => {

  //   const sslinfo = { ...req.body };
  //   sslinfo.updateDate = Date.now();
  //   if (req.body.sslInfoId = 0) {
  //     sslinfo.createDate = Date.now();
  //   }
  //   const customerId = req.body.customerId;

  //   //console.log(sslinfo);
  //   SSLInfo.findOneAndUpdate(
  //     {
  //       _id: req.body.sslInfoId
  //     },
  //     sslinfo,
  //     { upsert: true },
  //     (err, res) => {
  //       // Deal with the response data/error
  //       console.log(err);
  //       // console.log(res);
  //       if (res) {

  //         CustomerInfo.update({ _id: customerId }, {
  //           _sslInfo: res._id
  //         }, function (err, affected, resp) {
  //           console.log(resp);
  //         })
  //       }
  //     }
  //   );

  //   res.end();
  // });

}