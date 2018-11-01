const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const AshiMicrowebsiteInfo = mongoose.model('ashimicrowebsiteinfo');
const CustomerInfo = mongoose.model("customerinfo");

module.exports = app => {
  //Get Website info data 
  app.get('/api/ashimicrowebsiteinfo/:customerId', async (req, res) => {
    const customerId = req.params.customerId;
    const ashimicrowebsiteInfo_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _ashimicrowebsiteInfo: 1, _id: 0 });
    const ashimicrowebsiteInfo = ashimicrowebsiteInfo_temp[0]._ashimicrowebsiteInfo;

    const ashimicrowebsiteinfo = await AshiMicrowebsiteInfo.find({
      _id: mongoose.Types.ObjectId(ashimicrowebsiteInfo)
    }, { createDate: 0, updateDate: 0 });

    // console.log("-------------->>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<------------------------")
    // console.log(ashimicrowebsiteinfo);

    if (ashimicrowebsiteinfo) {
      // console.log("-------------->>>>>>>>><<<<<<<<<<<<<<<-------------");
      // console.log(ashimicrowebsiteinfo);
      res.send(ashimicrowebsiteinfo);
    } else {
      res.send("no data");
    }

  });

  //Edit
  app.post("/api/ashimicrowebsiteinfo", async (req, res) => {

    const microWebsiteinfo = { ...req.body };
    microWebsiteinfo.updateDate = Date.now();
    const customerId = microWebsiteinfo.customerId;
    const ashimicrowebsiteInfo_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _ashimicrowebsiteInfo: 1, _id: 0 });
    const microWebsiteinfoId = ashimicrowebsiteInfo_temp[0]._ashimicrowebsiteInfo;
    // console.log("--------------------->>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<-----------------------");
    // console.log(microWebsiteinfoId);

    await AshiMicrowebsiteInfo.findOneAndUpdate(
      {
        _id: microWebsiteinfoId
      },
      microWebsiteinfo,
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