const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const DesigneType = mongoose.model('designetype');
const WebsiteInfo = mongoose.model('websiteinfo');
const CustomerInfo = mongoose.model("customerinfo");

module.exports = app => {

  //Get Design Type Data
  app.get('/api/designtype', async (req, res) => {
    const designtypedata = await DesigneType.find({});
    //console.log(websitestatusdata);
    //res.send(prodplanaaldata);

    if (designtypedata) {
      res.send(designtypedata);
    } else {
      res.send("no data");
    }

  });

  //Get Website info data 
  app.get('/api/websiteinfo/:customerId', async (req, res) => {
    const customerId = req.params.customerId;
    const websiteInfo_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _websiteInfo: 1, _id: 0 });
    const websiteInfoId = websiteInfo_temp[0]._websiteInfo;
    //const customerId = req.params.customerid.toString();
    //console.log(billinginfo);
    //res.send(billinginfo);

    const websiteInfo = await WebsiteInfo.find({
      _id: mongoose.Types.ObjectId(websiteInfoId)
    }, { createDate: 0, updateDate: 0 });

    // console.log("-------------->>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<------------------------")
    // console.log(billinginfo);

    if (websiteInfo) {
      // console.log("-------------->>>>>>>>><<<<<<<<<<<<<<<-------------");
      // console.log(billinginfo);
      res.send(websiteInfo);
    } else {
      res.send("no data");
    }

  });

  // app.get('/api/websiteinfo/:websiteinfoid', async(req, res) =>{
  //     const webInfoId= req.params.websiteinfoid;
  //     const websiteinfo = await WebsiteInfo.find({
  //     _id: mongoose.Types.ObjectId(webInfoId)
  //     },{createDate: 0, updateDate: 0 }).populate({ path: '_productplan', model:'productplan'});
  //     //console.log(websiteinfo);
  //     //res.send(websiteinfo);
  //     if (websiteinfo) {
  //         res.send(websiteinfo);
  //       } else {
  //         res.send("no data");
  //       }

  // });

  //New && Edit
  app.post("/api/websiteinfo", async (req, res) => {

    const websiteinfo = { ...req.body };
    websiteinfo.updateDate = Date.now();
    const customerId = websiteinfo.customerId;
    const websiteinfo_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _websiteInfo: 1, _id: 0 });
    const websiteinfoId = websiteinfo_temp[0]._websiteInfo;

    if (websiteinfoId === null) {
      //websiteinfo._id = new ObjectID();
      websiteinfo.createDate = Date.now();
      // console.log("NULL>>>>>>>>>>>>>>", websiteinfo);
      await WebsiteInfo.create(websiteinfo, async (err, newid) => {
        // Deal with the response data/error
        if (err) {
          console.log(err);
        }
        if (newid) {
          //console.log("Insert Avalon Info Id>>>>>>>>>>>>>>>:", newid);
          //Push websiteinfoId from WebsiteInfo collection to CustomerInfo Table
          await CustomerInfo.findOneAndUpdate(
            { _id: customerId },
            { _websiteInfo: newid._id }
          )
        }
        // console.log(res);
      });
      res.send(websiteinfo);
    }
    else {
      await WebsiteInfo.findOneAndUpdate(
        {
          _id: websiteinfoId
        },
        websiteinfo,
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
      res.send(websiteinfo);
    }
    res.end();
  });

  // app.post("/api/websiteinfo", async (req, res) => {

  //   const websiteinfo = { ...req.body };
  //   websiteinfo.updateDate = Date.now();
  //   const customerId = websiteinfo.customerId;
  //   const websiteinfo_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _websiteInfo: 1, _id: 0 });
  //   const websiteinfoId = websiteinfo_temp[0]._websiteInfo;

  //   await WebsiteInfo.findOneAndUpdate(
  //     {
  //       _id: websiteinfoId
  //     },
  //     websiteinfo,
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

  // app.post("/api/websiteinfo", async (req, res) => {

  //   const websiteinfo = { ...req.body };
  //   websiteinfo.updateDate = Date.now();
  //   if (req.body.webInfoId = 0) {
  //     websiteinfo.createDate = Date.now();
  //   }

  //   const customerId = req.body.customerId;

  //   //console.log(websiteinfo);
  //   WebsiteInfo.findOneAndUpdate(
  //     {
  //       _id: req.body.webInfoId
  //     },
  //     websiteinfo,
  //     { upsert: true },
  //     (err, res) => {
  //       // Deal with the response data/error
  //       console.log(err);
  //       // console.log(res);

  //       if (res) {

  //         CustomerInfo.update({ _id: customerId }, {
  //           _websiteInfo: res._id
  //         }, function (err, affected, resp) {
  //           console.log(resp);
  //         })
  //       }

  //     }

  //   );

  //   res.end();
  // });

}