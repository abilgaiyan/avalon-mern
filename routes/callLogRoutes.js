const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const PreviousCallType = mongoose.model('previouscalltype');
const CustomerCalllogInfo = mongoose.model('callloginfo');
const CustomerInfo = mongoose.model("customerinfo");

module.exports = app => {

  //Get Previous Call Type Data
  app.get('/api/previouscalltype', async (req, res) => {
    const PreviousCallTypedata = await PreviousCallType.find({});
    //console.log(websitestatusdata);
    //res.send(prodplanaaldata);
    if (PreviousCallTypedata) {
      res.send(PreviousCallTypedata);
    } else {
      res.send("no data");
    }
  });

  //Get Website info data 
  app.get('/api/customercallloginfo/:customerId', async (req, res) => {
    const customerId = req.params.customerId;
    const custCallLogInfoIds_temp = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _callLogInfo: 1, _id: 0 });
    const custCallLogInfoIds = custCallLogInfoIds_temp[0]._callLogInfo;

    // console.log("-------------->>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<------------------------")
    // console.log(custCallLogInfoIds);

    const callloginfo = await CustomerCalllogInfo.find({
      //_id: mongoose.Types.ObjectId(custCallLogInfoId)
      _id: { $in: custCallLogInfoIds }
    }, { createDate: 0, updateDate: 0 }).populate('_previousCallType');
    //console.log(callloginfo);
    //res.send(callloginfo);
    if (callloginfo) {
      // console.log("-------------->>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<------------------------")
      // console.log(callloginfo);
      res.send(callloginfo);
    } else {
      res.send("no data");
    }

  });
  // app.get('/api/customercallloginfo/:callloginfoid', async(req, res) =>{
  //     const custCallLogInfoId= req.params.callloginfoid;
  //     const callloginfo = await CustomerCalllogInfo.find({
  //     _id: mongoose.Types.ObjectId(custCallLogInfoId)
  //     },{createDate: 0, updateDate: 0 });
  //     //console.log(callloginfo);
  //     //res.send(callloginfo);
  //     if (callloginfo) {
  //         res.send(callloginfo);
  //       } else {
  //         res.send("no data");
  //       }

  // });

  //New
  //Post Request to Customer Telephonic Communication
  app.post('/api/customercallloginfo', async (req, res) => {
    const { previousCallDate, _previousCallType, callPerson, avalonExcutive, topic, summary, comments, followupcalldate, followupcallTime } = req.body;
    const CustomerCalllogInfoData = new CustomerCalllogInfo({
      previousCallDate,
      _previousCallType,
      callPerson,
      avalonExcutive,
      topic,
      summary,
      comments,
      followupcalldate,
      followupcallTime,
      createDate: Date.now(),
      updateDate: Date.now()

    });

    //Save Data
    if (CustomerCalllogInfoData) {
      await CustomerCalllogInfoData.save(async (err, calllog) => {
        if (err) {
          res.send('Error in saving', err);
        }
        if (calllog) {
          //Push CallLogId from CallLogInfo collection to CustomerInfo Table
          await CustomerInfo.update(
            { _id: req.body.customerId },
            { $push: { _callLogInfo: mongoose.Types.ObjectId(calllog._id) } }
          );
        }

      });

      //console.log("--------------------------------->>>>>>>>>>>>>>>>>>>>callinfo ID->>>>>>>>>>>>>>>>>>>>>>>>", data);
      res.send(CustomerCalllogInfoData);
    }
    else {
      res.send("Error!!");
    }
    res.end();
  });

  // app.post("/api/customercallloginfo", async (req, res) => {

  //   const callloginfo = { ...req.body };
  //   callloginfo.updateDate = Date.now();
  //   if (req.body.custCallLogInfoId = 0) {
  //     callloginfo.createDate = Date.now();
  //   }

  //   const customerId = req.body.customerId;

  //   //console.log(callloginfo);
  //   CustomerCalllogInfo.findOneAndUpdate(
  //     {
  //       _id: req.body.custCallLogInfoId
  //     },
  //     callloginfo,
  //     { upsert: true },
  //     (err, res) => {
  //       // Deal with the response data/error
  //       console.log(err);
  //       // console.log(res);
  //       if (res) {

  //         CustomerInfo.update({ _id: customerId }, {
  //           _callLogInfo: res._id
  //         }, function (err, affected, resp) {
  //           console.log(resp);
  //         })
  //       }
  //     }
  //   );

  //   res.end();
  // });

}