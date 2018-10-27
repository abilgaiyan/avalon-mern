const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const EmailMarketingAccountInfo = mongoose.model('emailmarketingaccountinfo');
const CustomerInfo = mongoose.model("customerinfo");

module.exports = app =>{
    //Get Customer Email Marketing Account info data by ID
    app.get('/api/emailmarketingaccountinfo/:emktaccountinfoid', async(req, res) =>{
        const emktaccinfoId= req.params.emktaccountinfoid;
        const eMktAccountInfo = await EmailMarketingAccountInfo.find({
        _id: mongoose.Types.ObjectId(emktaccinfoId)
         },{createDate: 0, updateDate: 0 });
        //console.log(eMktAccountInfo);
        //res.send(eMktAccountInfo);
        if (eMktAccountInfo) {
            res.send(eMktAccountInfo);
          } else {
            res.send("no data");
          }
        
    });

//New
app.post("/api/emailmarketingaccountinfo", async (req, res) => {
    
    const eMktAccountInfo ={...req.body};
    eMktAccountInfo.updateDate = Date.now();
    if (req.body.emktaccinfoId = 0){
        eMktAccountInfo.createDate = Date.now();
    }

    const customerId = req.body.customerId;

    //console.log(eMktAccountInfo);
    EmailMarketingAccountInfo.findOneAndUpdate(
      {
        _id: req.body.emktaccinfoId
      },
      eMktAccountInfo,
      { upsert: true },
      (err, res) => {
        // Deal with the response data/error
        console.log(err);
       // console.log(res);
       if (res) {

        CustomerInfo.update({ _id: customerId }, {
          _emailmarketingAccountInfo: res._id
        }, function (err, affected, resp) {
          console.log(resp);
        })
      }
      }
    );

    res.end();
});

}