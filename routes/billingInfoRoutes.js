const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const AvalonBillingInfo = mongoose.model('billinginfo');
const CustomerInfo = mongoose.model("customerinfo");
const productplanInfo = mongoose.model("productplan");

module.exports = app => {
  //Get Avalon website Billing Info data 
  app.get('/api/avalonbillinginfo/:avalonbillinginfoid', async (req, res) => {
    const avalonbillinfoId = req.params.avalonbillinginfoid;
    //const customerId = req.params.customerid.toString();
    //console.log(customerId);
    //const billinginfo = await CustomerInfo.find({ _id: mongoose.Types.ObjectId(customerId) }, { _billingInfo: 1, _id: 0 }).populate('_billingInfo');
    //console.log(billinginfo);
    //res.send(billinginfo);

    const billinginfo = await AvalonBillingInfo.find({
      _id: mongoose.Types.ObjectId(avalonbillinfoId)
      },{createDate: 0, updateDate: 0 }).populate({ path: '_productPlan', model:'productplan'});


    if (billinginfo) {
      res.send(billinginfo);
    } else {
      res.send("no data");
    }

  });

  //New And Edit
  app.post("/api/avalonbillinginfo", async (req, res) => {
    const billinginfo = { ...req.body };
    // console.log("----------------->>>>>>>>>>> BillingInfo <<<<<<<<<<<<<<<<--------------------------")
    // console.log(billinginfo);

    billinginfo.updateDate = Date.now();
    if (req.body.avalonbillinfoId = 0) {
      billinginfo.createDate = Date.now();
    }

    const customerId = req.body.customerId;


    //console.log(billinginfo);
    await AvalonBillingInfo.findOneAndUpdate(
      {
        _id: req.body.avalonbillinfoId
      },
      billinginfo,
      { upsert: true },
      (err, res) => {
        // Deal with the response data/error
        if (err) {
          console.log(err);
        }

        if (res) {

          CustomerInfo.update({ _id: customerId }, {
            _billingInfo: res._id
          }, function (err, affected, resp) {
            console.log(resp);
          })


        }
        // console.log(res);
      }
    )





    res.end();
  });
}