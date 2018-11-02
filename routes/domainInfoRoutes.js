const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const CustDomainInfo = mongoose.model('domaininfo');
const CustomerInfo = mongoose.model("customerinfo");

module.exports = app => {
  //Get Customer Domain Information Data by ID
  app.get('/api/customerdomaininfo/:customerId', async (req, res) => {
    const customerId = req.params.customerId;
    const domainInfo_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _domainInfo: 1, _id: 0 });
    const domainInfoId = domainInfo_temp[0]._domainInfo;

    const domainInfo = await CustDomainInfo.find({
      _id: mongoose.Types.ObjectId(domainInfoId)
    }, { createDate: 0, updateDate: 0 });

    // console.log("-------------->>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<------------------------")
    // console.log(domainInfo);

    if (domainInfo) {
      // console.log("-------------->>>>>>>>><<<<<<<<<<<<<<<-------------");
      // console.log(domainInfo);
      res.send(domainInfo);
    } else {
      res.send("no data");
    }
  });
  // app.get('/api/customerdomaininfo/:domaininfoid', async(req, res) =>{
  //     const custDomianInfoId= req.params.domaininfoid;
  //     const domaininfo = await CustDomainInfo.find({
  //     _id: mongoose.Types.ObjectId(custDomianInfoId)
  //     },{createDate: 0, updateDate: 0 });
  //     //console.log(domaininfo);
  //     //res.send(domaininfo);
  //     if (domaininfo) {
  //         res.send(domaininfo);
  //       } else {
  //         res.send("no data");
  //       }

  // });

  //Edit
  app.post("/api/customerdomaininfo", async (req, res) => {

    const domaininfo = { ...req.body };
    domaininfo.updateDate = Date.now();
    const customerId = domaininfo.customerId;
    const domaininfo_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _domainInfo: 1, _id: 0 });
    const domaininfoId = domaininfo_temp[0]._domainInfo;
    // console.log("--------------------->>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<-----------------------");
    // console.log(microWebsiteinfoId);

    await CustDomainInfo.findOneAndUpdate(
      {
        _id: domaininfoId
      },
      domaininfo,
      { upsert: true },
      (err, res) => {
        // Deal with the response data/error
        if (err) {
          console.log(err);
        }
        if (res) {
          //console.log(res);
        }
        // console.log(res);
      }
    );

    res.end();
  });

  // app.post("/api/customerdomaininfo", async (req, res) => {

  //   const domaininfo = { ...req.body };
  //   domaininfo.updateDate = Date.now();
  //   if (req.body.custDomianInfoId = 0) {
  //     domaininfo.createDate = Date.now();
  //   }
  //   const customerId = req.body.customerId;

  //   //console.log(domaininfo);
  //   CustDomainInfo.findOneAndUpdate(
  //     {
  //       _id: req.body.custDomianInfoId
  //     },
  //     domaininfo,
  //     { upsert: true },
  //     (err, res) => {
  //       // Deal with the response data/error
  //       console.log(err);
  //       // console.log(res);
  //       if (res) {

  //         CustomerInfo.update({ _id: customerId }, {
  //           _domainInfo: res._id
  //         }, function (err, affected, resp) {
  //           console.log(resp);
  //         })
  //       }
  //     }
  //   );

  //   res.end();
  // });

}