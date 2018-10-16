const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const AvalonBillingInfo = mongoose.model('billinginfo');

module.exports = app =>{
    //Get Avalon website Billing Info data 
    app.get('/api/avalonbillinginfo/:avalonbillinginfoid', async(req, res) =>{
        const avalonbillinfoId= req.params.avalonbillinginfoid;
        const billinginfo = await AvalonBillingInfo.find({
        _id: mongoose.Types.ObjectId(avalonbillinfoId)
        },{createDate: 0, updateDate: 0 }).populate('_productPlan');
        //console.log(billinginfo);
        //res.send(billinginfo);
        if (billinginfo) {
          res.send(billinginfo);
        } else {
          res.send("no data");
        }
        
    });

     //New
     app.post("/api/avalonbillinginfo", async (req, res) => {
    
        const billinginfo ={...req.body};
        billinginfo.updateDate = Date.now();
        if (req.body.avalonbillinfoId = 0){
            billinginfo.createDate = Date.now();
        }
    
        //console.log(billinginfo);
        AvalonBillingInfo.findOneAndUpdate(
          {
            _id: req.body.avalonbillinfoId
          },
          billinginfo,
          { upsert: true },
          (err, res) => {
            // Deal with the response data/error
            console.log(err);
           // console.log(res);
          }
        );
    
        res.end();
      });
    
}