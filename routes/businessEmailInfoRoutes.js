const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const BusinessEmailInfo = mongoose.model('businessemailinfo');
const CustomerInfo = mongoose.model("customerinfo");

module.exports = app => {
  //Get Customer Website Email info By ID
  app.get('/api/businessemailinfo/:customerId', async (req, res) => {
    const customerId = req.params.customerId;
    const businessEmailInfo_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _businessEmailInfo: 1, _id: 0 });
    const businessEmailInfoId = businessEmailInfo_temp[0]._businessEmailInfo;
    //const customerId = req.params.customerid.toString();
    //console.log(billinginfo);
    //res.send(billinginfo);

    const bemailinfo = await BusinessEmailInfo.find({
      _id: mongoose.Types.ObjectId(businessEmailInfoId)
    }, { createDate: 0, updateDate: 0 });

    // console.log("-------------->>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<------------------------")
    // console.log(billinginfo);

    if (bemailinfo) {
      // console.log("-------------->>>>>>>>><<<<<<<<<<<<<<<-------------");
      // console.log(billinginfo);
      res.send(bemailinfo);
    } else {
      res.send("no data");
    }

  });



  //Edit
  app.post("/api/businessemailinfo", async (req, res) => {

    const bemailinfo = { ...req.body };
    bemailinfo.updateDate = Date.now();
    const customerId = bemailinfo.customerId;
    const businessEmailInfo_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _businessEmailInfo: 1, _id: 0 });
    const businessEmailInfoId = businessEmailInfo_temp[0]._businessEmailInfo;

    await BusinessEmailInfo.findOneAndUpdate(
      {
        _id: businessEmailInfoId
      },
      bemailinfo,
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


}